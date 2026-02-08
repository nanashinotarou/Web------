// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    const tocList = document.getElementById('toc-list');
    const contentDisplay = document.getElementById('content-display');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    
    // エリアの取得
    const landingView = document.getElementById('landing-view');
    const learningView = document.getElementById('learning-view');

    // LP上の「学習スタート」ボタン
    const startLearningBtn = document.getElementById('start-learning-btn');

    let currentIndex = 0;

    // 初期化処理
    // データ読み込み（content.js）を少し待ってから実行
    setTimeout(init, 100);

    function init() {
        if (!window.siteContent || window.siteContent.length === 0) {
            console.warn('コンテンツデータが見つかりません。content.jsを確認してください。');
            return;
        }

        // 目次（サイドバー）の生成
        renderTOC();

        // LPのボタンイベント設定
        if (startLearningBtn) {
            startLearningBtn.addEventListener('click', () => {
                startChapter(0); // 第0章から開始
            });
        }

        // 初期表示はHTML側でLanding Viewが表示されている状態
    }

    // --- ビュー切り替え関数 ---

    // 学習画面を表示し、指定した章を読み込む（グローバルスコープに公開してHTMLから呼べるようにする）
    window.startChapter = function(index) {
        if (index < 0 || index >= window.siteContent.length) return;
        
        // ビューの切り替え
        landingView.style.display = 'none';
        learningView.style.display = 'flex';
        
        // スマホでサイドバーが開いている場合などはここで閉じる処理を入れる（今回は省略）
        
        loadChapter(index);
    };

    // --- コンテンツ描画ロジック ---

    function renderTOC() {
        tocList.innerHTML = '';
        window.siteContent.forEach((chapter, index) => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.className = 'toc-btn';
            btn.textContent = chapter.menuTitle || chapter.title;
            btn.onclick = () => startChapter(index); // 目次クリックでも学習画面へ
            li.appendChild(btn);
            tocList.appendChild(li);
        });
    }

    function loadChapter(index) {
        if (index < 0 || index >= window.siteContent.length) return;
        currentIndex = index;

        const chapter = window.siteContent[index];
        const themeClass = chapter.themeClass || '';

        // HTML生成
        let html = `
            <div class="${themeClass}">
                <header class="hero-header" style="text-align:center; margin-bottom:60px;">
                    <span class="step-badge" style="font-size:1rem; padding:6px 16px; margin-bottom:15px;">${chapter.badge}</span>
                    <h1>${chapter.title}</h1>
                    <p style="color:#666; font-size:1.1rem;">${chapter.desc}</p>
                </header>
        `;

        // YouTubeレコメンド
        if (chapter.youtubeQueries) {
            const queries = chapter.youtubeQueries.map(q => `<span class="yt-query">${q}</span>`).join(' ');
            html += `
                <div class="youtube-recommend">
                    <div class="yt-icon">📺</div>
                    <div class="yt-text">
                        <h4>おすすめ学習キーワード</h4>
                        <p style="font-size:0.9rem; margin:0;">
                            YouTube検索: ${queries}
                        </p>
                    </div>
                </div>
            `;
        }

        // 本文
        html += chapter.body;
        html += `</div>`; // theme wrapper close

        contentDisplay.innerHTML = html;
        contentDisplay.scrollTop = 0; // スクロール位置をリセット

        // 目次のアクティブ表示更新
        document.querySelectorAll('.toc-btn').forEach((btn, i) => {
            if (i === index) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        
        // ナビゲーションボタンの制御
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === window.siteContent.length - 1;
        pageIndicator.textContent = `${currentIndex + 1} / ${window.siteContent.length}`;
    }

    // --- ナビゲーションイベント ---
    
    prevBtn.addEventListener('click', () => loadChapter(currentIndex - 1));
    nextBtn.addEventListener('click', () => loadChapter(currentIndex + 1));
});