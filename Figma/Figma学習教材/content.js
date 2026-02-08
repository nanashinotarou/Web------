/**
 * Figma Master Course Content - The Real Complete Edition
 * 全8章（Chapter 0 - Final）フルテキスト版
 * テキスト削減なし。エンジニアのボヤキ、コラム、全収録。
 */

window.siteContent = [
    // =================================================================
    // Chapter 0: 概念 (Introduction)
    // =================================================================
    {
        title: "Figmaって、なんなん？",
        menuTitle: "0. Figmaの正体",
        badge: "INTRO : 革命",
        desc: "「なんでみんなFigma、Figmaって騒ぐの？」<br>その理由は、Figmaが単なるデザインツールではなく、Web開発の『OS』になっちゃったからです。",
        themeClass: "theme-theory",
        body: `
            <section class="story-section">
                <h2>0-1. 「孤独な職人」から「わいわいDIY」へ</h2>
                <p>
                    ちょっと昔話をさせてください。<br>
                    2015年くらいまで、Webデザインの現場は<strong>「職人の工房」</strong>みたいでした。
                </p>
                <p>
                    デザイナーは「Photoshop」という重厚な扉の奥にこもって、数GBもある巨大なファイルと格闘していました。<br>
                    出来上がったら画像を書き出して、エンジニアにメールで送る。「文字直して」と言われたら、また工房にこもって書き出し直し…。<br>
                    エンジニアはエンジニアで、「画像じゃ余白のサイズが分かんないよ！」ってイライラしたりして。
                </p>
                <p>
                    そんな「孤独なすれ違い」をぶっ壊したのが<strong>Figma</strong>です。
                </p>

                <div class="column-box">
                    <h3>☕ 革命の正体：ブラウザで動く！</h3>
                    <p>
                        Figmaの何がすごいって、<strong>「Google Chrome（ブラウザ）の中で動く」</strong>ことです。<br>
                        これの何が革命かというと、<strong>「URLを送るだけで、全員が同じ部屋に入ってこれる」</strong>ようになったんです。
                    </p>
                    <p>
                        あなたがデザインしている画面に、エンジニアさんが自分のパソコンから入ってきて、<br>
                        「お、このボタンいいじゃん！でもここ1pxズレてない？」ってカーソルを動かしてコメントできる。<br>
                        これ、今までじゃあり得ないことだったんです。<br>
                        Figmaはデザインツールである以上に、<strong>「チーム開発のための巨大なホワイトボード」</strong>なんですよ。
                    </p>
                </div>
            </section>

            <section class="story-section">
                <h2>0-2. 実は「お絵かきソフト」じゃない！？</h2>
                <p>
                    ここ、テストに出ます！<br>
                    Figmaの画面は「お絵かきソフト」に見えますが、その中身は<strong>「ビジュアルで操作できるプログラミングエディタ」</strong>なんです。
                </p>
                <p>
                    どういうことかと言うと…<br>
                    あなたが画面に「赤い四角」をポンと置きますよね？<br>
                    その瞬間、Figmaの裏側では、小人さんが猛スピードで<strong>「CSS（Webサイトの見た目を作るコード）」</strong>を書いているんです。
                </p>

                <div class="visual-demo" style="background:#fff; border:2px dashed #333; padding:30px; border-radius:15px;">
                    <div style="display:flex; align-items:center; justify-content:center; gap:30px; flex-wrap:wrap;">
                        <div style="text-align:center;">
                            <strong>あなたの操作（Canvas）</strong><br>
                            <div style="width:80px; height:80px; background:#ff7675; border-radius:10px; margin:15px auto; box-shadow:0 4px 0 rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center; color:white; font-weight:bold;">Button</div>
                            <span style="font-size:0.9rem;">「赤いボタン作ったよ！」</span>
                        </div>
                        <div style="font-size:3rem; color:#ccc;">≒</div>
                        <div style="text-align:left; background:#2d3436; color:#a29bfe; padding:20px; border-radius:12px; font-size:0.9rem; font-family:monospace; line-height:1.6; box-shadow:0 10px 20px rgba(0,0,0,0.2);">
                            <span style="color:#636e72;">// 裏側のデータ</span><br>
                            background-color: <span style="color:#ff7675;">#FF7675</span>;<br>
                            border-radius: <span style="color:#fab1a0;">10px</span>;<br>
                            width: <span style="color:#fab1a0;">80px</span>;<br>
                            height: <span style="color:#fab1a0;">80px</span>;
                        </div>
                    </div>
                </div>

                <div class="engineer-voice">
                    <strong>👨‍💻 エンジニアの本音</strong>
                    「Photoshopで作られたデザインは困るんだよね…。<br>
                    『乗算レイヤー』とか『ブラシ加工』とか、絵としては綺麗だけど、Webのコード（CSS）で再現するのは無理！ってことがよくあるから。<br>
                    その点、Figmaは最初から<strong>『Webで表現できること』しかできない</strong>ようになってる。<br>
                    つまり、君がFigmaで作ってくれたものは、そのまま僕がコードに書けるんだ。これが本当にありがたい！」
                </div>
                <p style="margin-top:20px;">
                    つまり、Figmaを覚えるということは、知らず知らずのうちに<strong>「エンジニアとの共通言語（コードの仕組み）」を学んでいる</strong>のと同じことなんです。<br>
                    だから、Figmaが使えるようになると、開発チームとの会話が驚くほどスムーズになりますよ。
                </p>
            </section>

            <section class="story-section">
                <h2>0-3. 「線」の概念が違う！</h2>
                <p>
                    もしあなたがIllustratorを使ったことがあるなら、最初は戸惑うかもしれません。<br>
                    Figmaの「ペンツール」は、Webのために特殊な進化を遂げているんです。
                </p>
                
                <div class="column-box" style="background:#f0f9ff; border-color:#0984e3;">
                    <h3>🎨 デザイナーあるある：パス閉じ問題</h3>
                    <p>
                        イラレでアイコンを作る時、「あーっ！パスが閉じてないから色が塗れない！」ってイライラしたことありませんか？<br>
                        Figmaの<strong>「ベクターネットワーク (Vector Networks)」</strong>は、そんなストレスとは無縁です。
                    </p>
                    <p>
                        一筆書きじゃなくていいんです。<br>
                        適当に線を交差させて、ツールバーの<strong>「塗りつぶしバケツ (Paint Bucket)」</strong>を持って、囲まれた場所をポチッと押すだけ。<br>
                        まるで「塗り絵パズル」みたいに直感的にアイコンが作れちゃいます。<br>
                        これに慣れると、もう他のツールには戻れませんよ…（沼へようこそ）。
                    </p>
                </div>
            </section>
        `
    },

    // =================================================================
    // Chapter 1: フレーム (Frames)
    // =================================================================
    {
        title: "「フレーム」って何者？",
        menuTitle: "1. フレームの魔法",
        badge: "THEORY : 超基本",
        desc: "Figma初心者が100%つまずく「グループ」と「フレーム」の違い。<br>これを「コンビニの袋」と「段ボール箱」に例えて、一生忘れないレベルで理解しましょう。",
        themeClass: "theme-ch1",
        youtubeQueries: ["Figma frame vs group", "Figma constraints tutorial"],
        body: `
            <section class="story-section">
                <h2>1-1. 「グループ化」の甘い罠</h2>
                <p>
                    PowerPointやExcelで資料を作る時、バラバラの図形をまとめるのに「グループ化 (Ctrl+G)」ってよく使いますよね？<br>
                    とりあえずまとめとけ！みたいな。<br>
                    でも…Figmaの世界では、<strong>「UIデザインにグループ化は（ほぼ）使いません」。</strong>
                </p>
                <p>
                    えっ、なんで！？ 便利じゃん！<br>
                    …と思うでしょう。でも、グループには致命的な弱点があるんです。
                </p>
                
                <div class="visual-demo" style="background:#fff0f0; border:2px dashed #fab1a0;">
                    <div style="font-size:4rem; margin-bottom:15px; animation: float 3s ease-in-out infinite;">👜</div>
                    <h3 style="color:#e17055; margin-top:0;">グループ = ペラペラのビニール袋</h3>
                    <p style="text-align:left;">
                        スーパーのレジ袋を想像してください。<br>
                        中にミカンを詰めたら、袋の形もボコボコ変わりますよね？<br>
                        袋を無理やり左右に引っ張ったら、中のミカンも潰れちゃいますよね？
                    </p>
                    <ul style="text-align:left; font-size:0.95rem; line-height:1.8; background:white; padding:20px; border-radius:8px; border:1px solid #fab1a0; list-style:none;">
                        <li>❌ <strong>サイズが自分勝手：</strong> 中身（ミカン）の位置をちょっとズラすだけで、袋（グループ）のサイズも勝手に変わっちゃう。</li>
                        <li>❌ <strong>色を塗れない：</strong> ビニール袋自体に「背景色」をつけることはできません。</li>
                        <li>❌ <strong>守ってくれない：</strong> 袋のサイズを変えると、中身も一緒にグニャッと歪みます（レスポンシブ非対応）。</li>
                    </ul>
                </div>

                <p style="margin-top:40px;">
                    これじゃあ、画面サイズが変わるスマホアプリのデザインなんて作れません。<br>
                    ボタンの横幅を広げたら、中の文字まで横にビヨーンって伸びちゃうなんて、悪夢です。<br>
                    そこで登場するのが<strong>「フレーム (Frame)」</strong>です！
                </p>

                <div class="visual-demo" style="background:#eafff8; border:2px solid #00b894;">
                    <div style="font-size:4rem; margin-bottom:15px; animation: float 3s ease-in-out infinite;">📦</div>
                    <h3 style="color:#00b894; margin-top:0;">フレーム = 頑丈な段ボール箱</h3>
                    <p style="text-align:left;">
                        こちらはしっかりした「箱」です。<br>
                        中身が空っぽでも「幅100cmの箱」として存在できます。
                    </p>
                    <ul style="text-align:left; font-size:0.95rem; line-height:1.8; background:white; padding:20px; border-radius:8px; border:1px solid #00b894; list-style:none;">
                        <li>⭕ <strong>独立している：</strong> 中身がどうなろうと、箱のサイズは変わりません。</li>
                        <li>⭕ <strong>デコれる：</strong> 箱自体に色を塗ったり、影をつけたり、角を丸くしたりできます（これがHTMLの div タグの正体！）。</li>
                        <li>⭕ <strong>物理法則を持てる：</strong> 「箱を傾けても中身は動かない」みたいなルール（制約）を設定できます。</li>
                    </ul>
                </div>
                
                <div class="engineer-voice">
                    <strong>👨‍💻 エンジニアの補足</strong>
                    「Webサイトを作る時、僕たちは <code>&lt;div&gt;</code> という『箱』を組み合わせて画面を作るんだ。<br>
                    Figmaの『フレーム』はこの <code>&lt;div&gt;</code> と全く同じ性質を持っている。<br>
                    だから、フレームを使ってデザインしてくれると、その構造がそのままコードになるんだよ。<br>
                    逆に『グループ』を使われると、コードに変換できないから、全部作り直しになっちゃうんだ…。」
                </div>

                <div style="background:#2d3436; color:white; padding:20px; margin-top:30px; border-radius:8px; text-align:center;">
                    <strong>結論：</strong><br>
                    「イラストのパーツをまとめる」時以外は、<br>
                    <span style="font-size:1.3rem; font-weight:bold; color:#00b894; display:block; margin-top:10px;">迷わず「フレーム (F)」を使ってください。</span>
                </div>
            </section>

            <section class="story-section">
                <h2>1-2. 「制約」＝ゴムひもの法則</h2>
                <p>
                    フレームを使う一番のメリット。<br>
                    それは、箱（親）と中身（子）を<strong>「ゴムひも」</strong>で繋いでおけることです。<br>
                    これをFigma用語で<strong>「制約 (Constraints)」</strong>と呼びます。
                </p>
                <p>
                    これを設定しておかないと、スマホの画面幅を広げた時に、レイアウトがバラバラになって大惨事になります。
                </p>

                <div class="column-box">
                    <h3>☕ 思考実験：もしも箱が伸びたら？</h3>
                    <p>
                        想像してください。大きな箱の中にボールが入っています。<br>
                        箱の左右をグイーッと広げたとき、ボールはどう動くでしょうか？
                    </p>
                    <div style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
                        <div style="display:flex; align-items:center; gap:20px; background:white; padding:15px; border-radius:8px;">
                            <span style="font-size:2rem;">⬅️</span>
                            <div>
                                <strong style="color:#2d3436;">Left (左固定)</strong><br>
                                左の壁と「硬い棒」で繋がってる状態。壁が動いても距離は変わりません。<br>
                                <span style="font-size:0.8rem; color:#666;">（例：ロゴ、戻るボタン）</span>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:20px; background:white; padding:15px; border-radius:8px;">
                            <span style="font-size:2rem;">➡️</span>
                            <div>
                                <strong style="color:#2d3436;">Right (右固定)</strong><br>
                                右の壁と繋がってる状態。箱が広がると、一緒に右へ移動します。<br>
                                <span style="font-size:0.8rem; color:#666;">（例：ハンバーガーメニュー、閉じるボタン）</span>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:20px; background:white; padding:15px; border-radius:8px;">
                            <span style="font-size:2rem;">↔️</span>
                            <div>
                                <strong style="color:#2d3436;">Left & Right (左右固定)</strong><br>
                                両側の壁と「強力なバネ」で繋がってる状態。<br>
                                箱が広がると、ボール（中身）自体もビヨーンと引き伸ばされます。<br>
                                <span style="font-size:0.8rem; color:#666;">（例：検索バー、横幅いっぱいの画像）</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="designer-voice">
                    <strong>🎨 デザイナーのメモ</strong>
                    「デザインができたら、フレームの端っこを持って、グイーッと動かしてみて。<br>
                    中身が崩れなかったら合格！<br>
                    もし崩れたら、右パネルの『Constraints』を確認しよう。たいてい『Scale（拡大縮小）』か『Left（左固定）』の設定ミスだよ。」
                </div>
            </section>

            <section class="story-section">
                <h2>1-3. グリッドという「補助輪」</h2>
                <p>
                    「要素を綺麗に並べたいけど、目分量じゃズレちゃう…」<br>
                    そんな几帳面なあなたのための機能が<strong>「レイアウトグリッド」</strong>です。
                </p>
                <p>
                    フレームを選択して、右パネルの「Layout Grid」をポチッと押すと、画面に赤いアミ目が出現します。<br>
                    これは印刷には出ない「ガイド線」です。
                </p>
                <div class="visual-demo" style="background:#fff; border:1px solid #ddd; padding:20px;">
                    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; height:100px; padding:10px; background:rgba(255,0,0,0.05); border: 1px dashed red;">
                        <div style="background:rgba(255,0,0,0.1); display:flex; align-items:center; justify-content:center; color:red; font-size:0.8rem;">Col 1</div>
                        <div style="background:rgba(255,0,0,0.1); display:flex; align-items:center; justify-content:center; color:red; font-size:0.8rem;">Col 2</div>
                        <div style="background:rgba(255,0,0,0.1); display:flex; align-items:center; justify-content:center; color:red; font-size:0.8rem;">Col 3</div>
                    </div>
                    <span class="visual-caption">▲ エンジニアが大好きな「12カラムグリッド」も一瞬で作れます。</span>
                </div>
                <p>
                    邪魔になったら <kbd>Shift</kbd> + <kbd>G</kbd> で一瞬で消せるから、ショートカットごと覚えちゃいましょう！
                </p>
            </section>
        `
    },

    // =================================================================
    // Chapter 2: オートレイアウト (Auto Layout)
    // =================================================================
    {
        title: "整列の魔法：オートレイアウト",
        menuTitle: "2. オートレイアウト",
        badge: "MUST : 必須",
        desc: "デザイナーがFigmaを使う理由のNo.1がこれ。<br>CSSの「Flexbox」を視覚的に操る機能です。これを覚えると、修正作業のスピードが10倍になります。",
        themeClass: "theme-ch2", // オレンジ色のテーマ
        youtubeQueries: ["Figma auto layout tutorial", "Figma hug vs fill"],
        body: `
            <section class="story-section">
                <h2>2-1. 要するに「Flexbox」です</h2>
                <p>
                    エンジニアのあなたに朗報です。<br>
                    Figmaの「オートレイアウト」とは、CSSでいう <code>display: flex;</code> そのものです。<br>
                    これを使うと、中の要素が増減しても、自動で並び替えたり、余白を調整したりしてくれます。
                </p>

                <div class="visual-demo" style="background:#fff5eb; border:2px solid #e17055;">
                    <h3 style="color:#e17055; margin-top:0;">Shift + A の魔法</h3>
                    <p style="font-size:0.9rem;">
                        フレームを選んで <kbd>Shift</kbd> + <kbd>A</kbd> を押した瞬間、そのフレームは「Flexコンテナ」に進化します。
                    </p>
                    <div style="background:white; padding:20px; border-radius:8px; display:inline-block; text-align:left; margin-top:10px; font-family:monospace; color:#d35400;">
                        display: flex;<br>
                        flex-direction: row; <span style="color:#aaa;">// 横並び</span><br>
                        gap: 10px; <span style="color:#aaa;">// アイテム間の隙間</span><br>
                        padding: 20px; <span style="color:#aaa;">// 内側の余白</span>
                    </div>
                    <p style="font-size:0.9rem; margin-top:15px;">
                        右パネルに出てくる設定値も、これらと完全に一対一で対応しています。<br>
                        「パディング」や「ガップ（隙間）」という言葉もそのまま通じます。
                    </p>
                </div>
            </section>

            <section class="story-section">
                <h2>2-2. Hug（ハグ）と Fill（フィル）</h2>
                <p>
                    オートレイアウトを使いこなすための唯一の壁。<br>
                    それが<strong>「サイズ設定（Resizing）」</strong>です。<br>
                    これもCSSに置き換えれば一発で分かります。
                </p>

                <div class="column-box" style="background:#fff8e1; border-color:#e17055;">
                    <h3>📏 3つのサイズ設定</h3>
                    
                    <div style="margin-bottom:20px; border-bottom:1px dashed #fab1a0; padding-bottom:15px;">
                        <strong style="color:#d35400;">1. Hug contents (中身に合わせる)</strong>
                        <p style="font-size:0.9rem; margin-top:5px;">
                            <code>width: max-content;</code><br>
                            中身のテキストやアイコンの大きさに合わせて、親フレームがキュッと縮まります。<br>
                            ボタンやバッジを作るときはこれ。
                        </p>
                    </div>

                    <div style="margin-bottom:20px; border-bottom:1px dashed #fab1a0; padding-bottom:15px;">
                        <strong style="color:#e17055;">2. Fill container (コンテナに合わせて拡大)</strong>
                        <p style="font-size:0.9rem; margin-top:5px;">
                            <code>width: 100%;</code> (flex: 1;)<br>
                            親フレームの空きスペースいっぱいに広がります。<br>
                            レスポンシブなカードや、画面幅いっぱいの検索バーはこれ。
                        </p>
                    </div>

                    <div>
                        <strong style="color:#636e72;">3. Fixed width (固定幅)</strong>
                        <p style="font-size:0.9rem; margin-top:5px;">
                            <code>width: 300px;</code><br>
                            中身がどうなろうと、親がどうなろうと、頑固にサイズを維持します。<br>
                            アイコン画像など、サイズを変えたくない時はこれ。
                        </p>
                    </div>
                </div>

                <div class="engineer-voice">
                    <strong>👨‍💻 旦那さんのアドバイス</strong>
                    「デザインが崩れる原因の9割は、この『Fixed（固定）』を使いすぎてることなんだ。<br>
                    スマホ対応のデザインをするなら、基本は<strong>『Fill（親に合わせる）』</strong>か<strong>『Hug（中身に合わせる）』</strong>で作るといいよ。<br>
                    そうすれば、画面幅が変わっても勝手にレイアウトが調整されるからね。」
                </div>
            </section>

            <section class="story-section">
                <h2>2-3. 絶対配置 (Absolute Position)</h2>
                <p>
                    「オートレイアウトは便利だけど、通知バッジみたいに『ちょっと重ねたい』時はどうするの？」<br>
                    そんな時は、子要素を選択して右上の小さなアイコン<strong>「Absolute position」</strong>をONにします。
                </p>
                <div class="visual-demo" style="background:white; border:2px dashed #ccc;">
                    <div style="position:relative; display:inline-block; width:60px; height:60px; background:#dfe6e9; border-radius:12px; margin:20px;">
                        <span style="position:absolute; top:-10px; right:-10px; width:24px; height:24px; background:#e17055; color:white; border-radius:50%; font-size:0.8rem; display:flex; align-items:center; justify-content:center; border:2px solid white; font-weight:bold;">3</span>
                    </div>
                    <p style="font-size:0.9rem;">
                        これで、その要素だけオートレイアウトのルール（整列）から外れて、<code>position: absolute;</code> 状態で自由に配置できるようになります。<br>
                        アイコンの右上の通知バッジなどはこの機能で作ります。
                    </p>
                </div>
            </section>
        `
    },

    // =================================================================
    // Chapter 3: コンポーネント設計 (Component Architecture)
    // =================================================================
    {
        title: "コンポーネント設計の深淵",
        menuTitle: "3. コンポーネント設計",
        badge: "ARCH : 設計",
        desc: "コピー＆ペーストは素人の仕事。プロは「クラス」を設計します。<br>ReactやVueと同じ「Props設計」の概念を持ち込み、数千画面の修正を1秒で終わらせる、堅牢なシステムの作り方を学びます。",
        themeClass: "theme-ch3", // 紫色のテーマ
        youtubeQueries: ["Figma component properties", "Figma variants tutorial", "Atomic Design Figma"],
        body: `
            <section class="story-section">
                <h2>3-1. 「絵」ではなく「システム」を作る</h2>
                <p>
                    Figmaで最も強力で、かつ最も奥が深い機能。それが<strong>コンポーネント</strong>です。<br>
                    これを単なる「コピー機能」だと思っていると、痛い目を見ます。これはプログラミングにおける<strong>「クラス（設計図）とインスタンス（実体）」</strong>そのものです。
                </p>

                <div class="visual-demo" style="background:#f3f0ff; border:1px solid #6c5ce7; text-align:left; padding:30px;">
                    <div style="display:flex; gap:40px; margin-bottom:30px; align-items:flex-start; flex-wrap:wrap;">
                        <div style="text-align:center; flex:1; min-width:200px;">
                            <div style="width:80px; height:80px; background:#6c5ce7; border-radius:12px; margin:0 auto 15px; display:flex; align-items:center; justify-content:center; color:white; font-size:2rem; box-shadow:0 10px 20px rgba(108, 92, 231, 0.3);">❖</div>
                            <h4 style="color:#6c5ce7; margin:0 0 5px 0;">Main Component<br><span style="font-size:0.8rem; font-weight:normal;">(親 / マスター)</span></h4>
                            <p style="font-size:0.85rem; text-align:left; line-height:1.6; margin-top:10px;">
                                <strong>「原本」です。</strong><br>
                                これを削除すると、世界中の全ての子が親なし子（Orphan）になります。<br>
                                通常のデザイン作業でこれを直接いじることはありません。「Components」という専用ページに隔離し、神棚のように祀っておくのが作法です。
                            </p>
                        </div>
                        <div style="font-size:3rem; color:#ccc; align-self:center; display:none;">➔</div>
                        <div style="text-align:center; flex:1; min-width:200px;">
                            <div style="width:80px; height:80px; border:3px solid #6c5ce7; border-radius:12px; margin:0 auto 15px; display:flex; align-items:center; justify-content:center; color:#6c5ce7; font-size:2rem; background:white;">◇</div>
                            <h4 style="color:#636e72; margin:0 0 5px 0;">Instance<br><span style="font-size:0.8rem; font-weight:normal;">(子 / 分身)</span></h4>
                            <p style="font-size:0.85rem; text-align:left; line-height:1.6; margin-top:10px;">
                                <strong>「参照」です。</strong><br>
                                画面デザインに配置するのは常にこれ。<br>
                                実体を持たず、親の姿を投影しているホログラムのような存在です。<br>
                                親が赤くなれば、この子も一瞬で赤くなります。
                            </p>
                        </div>
                    </div>
                    <div style="background:white; padding:15px; border-radius:8px; border-left:4px solid #e74c3c; font-size:0.9rem;">
                        <strong>⚠️ 禁忌：デタッチ (Detach Instance)</strong><br>
                        「ちょっと形を変えたいから…」といって、親との縁を切る「デタッチ（インスタンスの解除）」を行うのは重罪です。<br>
                        一度デタッチされた要素は、二度と親の修正を受け取れません。<br>
                        エンジニアからすれば<strong>「共通化されたコードを勝手にコピペして改造された」</strong>のと同じ。保守不可能なゴミデータの始まりです。
                    </div>
                </div>
            </section>

            <section class="story-section">
                <h2>3-2. プロパティ (Props) 完全攻略</h2>
                <p>
                    ここからが本番です。<br>
                    ただコンポーネントにするだけなら誰でもできます。プロは<strong>「変更しやすいようにプロパティを定義」</strong>します。<br>
                    これはReactやVueの <code>Props</code> 設計と全く同じ思考プロセスです。
                </p>

                <div class="column-box" style="background:#e8f5e9; border-color:#00b894;">
                    <h3>🛠️ Figmaの 4大プロパティ</h3>
                    <p>
                        右パネルの「Properties」から追加できる魔法の機能たち。<br>
                        これらを使いこなせば、バリアントの数を 1/10 に減らせます。
                    </p>
                    
                    <div style="margin-top:20px; display:grid; gap:20px;">
                        <div style="background:white; padding:20px; border-radius:8px; border-left:5px solid #00b894;">
                            <strong style="color:#00b894; font-size:1.1rem;">1. Boolean (真偽値)</strong>
                            <p style="font-size:0.9rem; margin:5px 0;">
                                <strong>「ある？ ない？」のスイッチ。</strong><br>
                                アイコンのレイヤーを選択し、透明度の横にある小さなアイコンから紐付けます。<br>
                                これを使えば、「アイコンありボタン」と「なしボタン」を別々に作る必要がなくなります。
                            </p>
                            <code style="display:block; margin-top:10px; background:#2d3436; color:#00cec9; padding:5px; border-radius:4px;">{ showIcon && &lt;Icon /&gt; }</code>
                        </div>

                        <div style="background:white; padding:20px; border-radius:8px; border-left:5px solid #0984e3;">
                            <strong style="color:#0984e3; font-size:1.1rem;">2. Text (テキスト)</strong>
                            <p style="font-size:0.9rem; margin:5px 0;">
                                <strong>「中身の文字」の入力欄。</strong><br>
                                これを設定すると、キャンバス上の文字をダブルクリックしなくても、右パネルから直接文字を打ち替えられるようになります。<br>
                                「ここは書き換えていい場所だよ」という意思表示にもなります。
                            </p>
                            <code style="display:block; margin-top:10px; background:#2d3436; color:#00cec9; padding:5px; border-radius:4px;">props.label</code>
                        </div>

                        <div style="background:white; padding:20px; border-radius:8px; border-left:5px solid #e17055;">
                            <strong style="color:#e17055; font-size:1.1rem;">3. Instance Swap (入替)</strong>
                            <p style="font-size:0.9rem; margin:5px 0;">
                                <strong>「部品の交換」メニュー。</strong><br>
                                ボタンの中のアイコンを、「検索」から「ホーム」に変えたい時、アセットパネルを探し回る必要はありません。<br>
                                右パネルのドロップダウンから選ぶだけで交換できるようになります。
                            </p>
                            <code style="display:block; margin-top:10px; background:#2d3436; color:#00cec9; padding:5px; border-radius:4px;">&lt;Icon as={SearchIcon} /&gt;</code>
                        </div>
                    </div>
                </div>

                <div class="engineer-voice">
                    <strong>👨‍💻 エンジニアの感動</strong>
                    「君のデータ、めっちゃコーディングしやすい！<br>
                    だって、Figmaの右パネルに『Show Icon』とか『Label Text』って出てるじゃん？<br>
                    これそのままコードの <code>props</code> にすればいいだけだから、設計を考える時間がゼロになったよ。<br>
                    デザイナーなのに、完全にエンジニアの脳みそを持ってるね！」
                </div>
            </section>

            <section class="story-section">
                <h2>3-3. 「バリアント」の正しい使い方</h2>
                <p>
                    プロパティで処理しきれない「見た目の変化」は、<strong>バリアント (Variants)</strong> で管理します。<br>
                    しかし、ここで初心者が陥る罠があります。
                </p>
                
                <div class="visual-demo" style="border:2px solid #e74c3c; background:#fff0f0; padding:25px;">
                    <h4 style="color:#c0392b; margin-top:0;">💀 アンチパターン：バリアント爆発</h4>
                    <p style="text-align:left; font-size:0.9rem;">
                        「Primaryボタン」「Secondaryボタン」「Dangerボタン」<br>
                        「Default状態」「Hover状態」「Active状態」「Disabled状態」<br>
                        「アイコンあり」「なし」「右のみ」<br>
                        これらを全部掛け算でバリアントを作ると…<br>
                        <strong>3 × 4 × 3 = 36個</strong> のボタンを手動で作る羽目になります。<br>
                        修正が入ったら36個全部直すんですか？ 地獄です。
                    </p>
                </div>

                <div class="visual-demo" style="border:2px solid #00b894; background:#eafff8; margin-top:20px; padding:25px;">
                    <h4 style="color:#00695c; margin-top:0;">✨ スマート解決策：.base コンポーネント</h4>
                    <p style="text-align:left; font-size:0.9rem;">
                        プロは裏技を使います。<br>
                        まず、全ての元になる<strong>「.base-button」</strong>というコンポーネントを1つだけ作ります（名前の頭にドットをつけると、アセットパネルから隠せます）。<br>
                        そして、PrimaryもSecondaryも、すべてのバリアントは、この「.base-button」のインスタンスを中に入れて作ります。<br>
                        <br>
                        こうすれば、大元の「.base-button」のレイアウトを1箇所直すだけで、36個すべてのバリアントに修正が反映されます。<br>
                        これが<strong>「継承（Inheritance）」</strong>のテクニックです。
                    </p>
                </div>
            </section>

            <section class="story-section">
                <h2>3-4. 命名規則は「 /（スラッシュ）」が9割</h2>
                <p>
                    コンポーネントの名前、適当につけていませんか？<br>
                    <code>Button Red Big</code> みたいな名前は今日で卒業です。Figmaが泣いています。
                </p>
                <p>
                    Figmaでは、名前に<strong>「 /（スラッシュ）」</strong>を含めると、それをフォルダ階層として認識します。<br>
                    これは整理整頓のためだけでなく、インスタンスの切り替えやすさに直結します。
                </p>

                <div style="display:flex; gap:20px; flex-wrap:wrap; margin-top:20px;">
                    <div style="flex:1; min-width:300px; background:#2d3436; color:#dfe6e9; padding:20px; border-radius:8px; font-family:monospace;">
                        <span style="color:#74b9ff;">// 良い命名例</span><br>
                        Button / Primary / Large<br>
                        Button / Primary / Small<br>
                        Button / Secondary / Large<br>
                        Icon / Action / Search<br>
                        Icon / Navigation / Home
                    </div>
                    <div style="flex:1; min-width:300px; background:white; border:1px solid #ddd; padding:20px; border-radius:8px;">
                        <strong style="display:block; margin-bottom:10px;">👀 メニューでの見え方</strong>
                        <ul style="list-style:none; padding:0; font-size:0.9rem;">
                            <li style="margin-bottom:5px;">📁 Button</li>
                            <li style="margin-left:20px; margin-bottom:5px;">📁 Primary</li>
                            <li style="margin-left:40px; color:#0984e3; font-weight:bold;">💠 Large</li>
                            <li style="margin-left:40px; color:#0984e3;">💠 Small</li>
                            <li style="margin-left:20px;">📁 Secondary...</li>
                        </ul>
                    </div>
                </div>
                <p style="margin-top:20px; font-size:0.9rem;">
                    こうしておくと、インスタンス切り替えメニューが階層化されて表示されるので、<br>
                    「えーっと、あのボタンどこだっけ…」と探す時間がゼロになります。
                </p>
            </section>

            <section class="story-section">
                <h2>3-5. コラム：Atomic Designって結局なに？</h2>
                <div class="column-box">
                    <h3>☕ 原子の世界へようこそ</h3>
                    <p>
                        コンポーネントを作っていると、「どこまで細かく作ればいいの？」と迷うことがあります。<br>
                        そこで役立つのが<strong>「Atomic Design（アトミックデザイン）」</strong>という考え方です。
                    </p>
                    <ul style="line-height:1.8; font-size:0.95rem; margin-top:15px; list-style:none;">
                        <li style="margin-bottom:10px;">
                            <strong>⚛️ Atoms (原子):</strong><br>
                            ボタン、アイコン、入力フォームなど。これ以上分解できない最小単位。
                        </li>
                        <li style="margin-bottom:10px;">
                            <strong>🧬 Molecules (分子):</strong><br>
                            「入力フォーム + ボタン」で作った検索バーなど。原子の組み合わせ。
                        </li>
                        <li>
                            <strong>🦠 Organisms (有機体):</strong><br>
                            ヘッダーやカードなど、独立して機能するUIのかたまり。
                        </li>
                    </ul>
                    <p style="margin-top:15px;">
                        Figmaでも、まずは「Atoms（ボタンや色）」から作り始め、それらを組み合わせて「Molecules」を作る…という手順で進めると、矛盾のない綺麗なシステムが出来上がります。<br>
                        いきなり画面（Pages）から作り始めるのは、基礎工事なしで家を建てるようなものです。
                    </p>
                </div>
            </section>
        `
    },

    // =================================================================
    // Chapter 4: 変数とスタイル (Variables & Tokens)
    // =================================================================
    {
        title: "デザインシステムの心臓部",
        menuTitle: "4. 変数とスタイル",
        badge: "SYSTEM : 管理",
        desc: "色コード(#FF0000)を直接使うのは「ハードコーディング」と呼ばれる禁じ手です。<br>エンジニアと共通言語を持つための「デザイントークン」の概念を、世界一わかりやすく解説します。",
        themeClass: "theme-theory",
        body: `
            <section class="story-section">
                <h2>4-1. 「この青」ではなく「プライマリカラー」と呼ぶ</h2>
                <p>
                    プロの現場では、<code>#0D99FF</code> という色コードを直接使うことはまずありません。<br>
                    なぜなら、「ブランドカラーを少し濃くしたい」と言われた時に、全画面の100箇所以上ある青色を、手作業でスポイトで吸い直すことになるからです。
                </p>
                <p>
                    代わりに、その色に<strong>「役割（意味）」</strong>という名札をつけます。<br>
                    これを専門用語で<strong>「デザイントークン」</strong>と呼びます。
                </p>
                
                <div class="visual-demo" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; align-items:start;">
                    <div style="background:#fff; padding:25px; border-radius:12px; border:2px dashed #fab1a0;">
                        <h4 style="margin-top:0; color:#e74c3c;">× Bad: 生の値 (Raw Value)</h4>
                        <div style="font-family:monospace; background:#eee; padding:10px; margin-bottom:10px; border-radius:4px;">Fill: #0D99FF</div>
                        <p style="font-size:0.9rem; line-height:1.6;">
                            <strong>「名無しの権兵衛」状態。</strong><br>
                            「このボタンの青と、あのアイコンの青は同じなの？」と聞かれても、スポイトで吸ってみるまで分かりません。<br>
                            修正が入ったら即死します。
                        </p>
                    </div>
                    <div style="background:#f0f9ff; padding:25px; border-radius:12px; border:2px solid #0984e3;">
                        <h4 style="margin-top:0; color:#0984e3;">◎ Good: トークン (Token)</h4>
                        <div style="font-family:monospace; background:white; padding:10px; margin-bottom:10px; border:1px solid #0984e3; color:#0984e3; border-radius:4px;">var(--primary-action)</div>
                        <p style="font-size:0.9rem; line-height:1.6;">
                            <strong>「役割名」がついている状態。</strong><br>
                            中身の色が赤になろうが黒になろうが、「これは主要なアクションに使う色です」という役割は変わりません。<br>
                            一箇所変えれば、全画面に即反映されます。
                        </p>
                    </div>
                </div>
            </section>

            <section class="story-section">
                <h2>4-2. 変数の「2階建て構造」 (Primitive & Semantic)</h2>
                <p>
                    ここがプロへの分かれ道です。ちょっと難しいですが、ついてきてください！<br>
                    変数は<strong>「パレット」</strong>と<strong>「使い道」</strong>の2段階で管理するのが、世界標準のベストプラクティスです。
                </p>
                
                <div class="column-box" style="background:#fff8e1; border-color:#ffc107;">
                    <h3>🎨 絵の具セットで例えると？</h3>
                    
                    <div style="margin-bottom:20px; border-bottom:1px dashed #ccc; padding-bottom:15px;">
                        <strong style="color:#d35400;">1階：Primitive（プリミティブ / 絵の具そのもの）</strong>
                        <p style="font-size:0.9rem; margin-top:5px;">
                            「Blue-100」「Blue-500」「Gray-900」のように、色の明るさで機械的に名前をつけます。<br>
                            これは絵の具セットのチューブそのものです。<br>
                            <strong>重要：これらは直接画面には（なるべく）使いません。</strong>
                        </p>
                    </div>
                    
                    <div>
                        <strong style="color:#27ae60;">2階：Semantic（セマンティック / 使い道）</strong>
                        <p style="font-size:0.9rem; margin-top:5px;">
                            「このボタンの背景には Blue-500 を使う」というルールを決めたもの。<br>
                            名前は「Button-bg-primary」や「Text-danger」のようになります。<br>
                            デザイン画面には、必ずこの<strong>Semanticな変数</strong>を塗ります。
                        </p>
                    </div>
                </div>

                <div class="engineer-voice">
                    <strong>👨‍💻 エンジニアの感動ポイント</strong>
                    「『ここ、Blue-500を使って』って言われるより、『Primary-Actionを使って』って言われたほうが100倍嬉しいな。<br>
                    だって、『Primary-Action』なら、後でダークモード対応する時に『夜は中身をBlue-300に切り替える』って設定ができるから。<br>
                    もし『Blue-500』って直接指定されてたら、夜モードでも眩しいBlue-500のままになっちゃうんだよ。」
                </div>
            </section>

            <section class="story-section">
                <h2>4-3. Variables (変数) vs Styles (スタイル)</h2>
                <p>
                    「Figmaには『Variables』と『Styles』があるけど、どっちを使えばいいの？」<br>
                    これ、全ユーザーが混乱しているポイントです。ズバリ答えを出します。
                </p>

                <table style="width:100%; border-collapse:collapse; margin:20px 0; background:white; font-size:0.9rem;">
                    <thead>
                        <tr style="background:#2c3e50; color:white;">
                            <th style="padding:15px; text-align:left;">機能</th>
                            <th style="padding:15px; text-align:left;">Variables (最新) 🚀</th>
                            <th style="padding:15px; text-align:left;">Styles (従来) 🎨</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #eee;">
                            <td style="padding:15px; font-weight:bold;">得意なもの</td>
                            <td style="padding:15px; color:#0984e3; font-weight:bold;">単色、数値、ON/OFF</td>
                            <td style="padding:15px; color:#e17055; font-weight:bold;">グラデーション、影、文字セット</td>
                        </tr>
                        <tr style="border-bottom:1px solid #eee;">
                            <td style="padding:15px; font-weight:bold;">モード切替</td>
                            <td style="padding:15px;"><strong>できる！</strong> (Light/Darkなど)</td>
                            <td style="padding:15px;">できない (手動で置換が必要)</td>
                        </tr>
                        <tr>
                            <td style="padding:15px; font-weight:bold;">使い分け</td>
                            <td style="padding:15px;">基本はこっちを使う。<br>色、角丸、パディングなど。</td>
                            <td style="padding:15px;">Variablesで表現できない複雑な装飾に使う。</td>
                        </tr>
                    </tbody>
                </table>
                <p style="font-size:0.9rem;">
                    <strong>結論：</strong> まずは「Variables」で色や数値を定義し、それを組み合わせて「Styles」を作るのが最強の布陣です。
                </p>
            </section>

            <section class="story-section">
                <h2>4-4. 魔法の杖！モード切り替え</h2>
                <p>
                    Variablesを正しく設定していると、まるで魔法のようなことが起きます。<br>
                    1つのデザインデータで「ライトモード」と「ダークモード」を、スイッチひとつで行き来できるようになるのです。
                </p>
                
                <div class="visual-demo" style="background:#2d3436; color:white; padding:30px; border-radius:12px;">
                    <h4 style="margin-top:0; color:#fab1a0;">Variablesの設定画面イメージ</h4>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #555; padding-bottom:10px; font-size:0.9rem; color:#aaa;">
                        <span>Token Name</span>
                        <span>☀️ Light Mode</span>
                        <span>🌙 Dark Mode</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; align-items:center;">
                        <span style="font-family:monospace;">bg-canvas</span>
                        <span style="display:flex; align-items:center; gap:8px;"><span style="width:12px; height:12px; background:#fff; border-radius:50%;"></span> #FFFFFF</span>
                        <span style="display:flex; align-items:center; gap:8px;"><span style="width:12px; height:12px; background:#121212; border-radius:50%;"></span> #121212</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; align-items:center;">
                        <span style="font-family:monospace;">text-primary</span>
                        <span style="display:flex; align-items:center; gap:8px;"><span style="width:12px; height:12px; background:#333; border-radius:50%;"></span> #333333</span>
                        <span style="display:flex; align-items:center; gap:8px;"><span style="width:12px; height:12px; background:#fff; border-radius:50%;"></span> #FFFFFF</span>
                    </div>
                    <div style="margin-top:20px; padding:15px; background:rgba(255,255,255,0.1); border-radius:8px; font-size:0.9rem; line-height:1.6;">
                        この設定さえあれば、デザイン上の親フレームを選択し、右パネルの「レイヤーモード」アイコン（六角形が重なったマーク）からモードを選ぶだけで、<br>
                        <strong>一瞬で全ての色が反転します。</strong><br>
                        いちいち「夜用のデザイン」を別で作る必要はありません。これが現代の時短術です。
                    </div>
                </div>
            </section>

            <section class="story-section">
                <h2>4-5. 数値も変数になる (Number Variables)</h2>
                <p>
                    色だけじゃありません。「角丸の大きさ」や「余白のサイズ」も変数にできます。<br>
                    <code>radius-s (4px)</code>, <code>radius-m (8px)</code>, <code>spacing-xl (32px)</code> のように名前をつけておきましょう。
                </p>
                <div class="engineer-voice">
                    <strong>👨‍💻 旦那さんの心の叫び</strong>
                    「コードの世界では、8pxの倍数で余白を作ることが多いんだ。<br>
                    もし君が適当に『13px』とか『7px』で余白を作ると、僕はモニターの前で頭を抱えることになる。<br>
                    変数を使って <code>spacing-m (16px)</code> とか決めておいてくれれば、お互いに幸せになれるよ。約束だ！」
                </div>
            </section>
        `
    },

    // =================================================================
    // Chapter 5: プロトタイピング (Interaction & Logic)
    // =================================================================
    {
        title: "「絵」に「命」を吹き込む",
        menuTitle: "5. 動的ロジック",
        badge: "LOGIC : 挙動",
        desc: "Figmaで作るのは「止まった絵」ではありません。「動くアプリ」です。<br>変数（Variables）と条件分岐（If文）を使えば、コードを書かずに「本物と同じ動き」が作れます。",
        themeClass: "theme-theory",
        body: `
            <section class="story-section">
                <h2>5-1. アニメーションの正体 (Smart Animate)</h2>
                <p>
                    画面Aから画面Bへ移動する時、「スマートアニメート」を使うと、要素がニューッと動いて変形しますよね。<br>
                    あれは魔法じゃなくて、Figmaが必死に<strong>「間違い探し」</strong>をしているんです。
                </p>
                <div class="visual-demo" style="background:#2d3436; color:#dfe6e9; padding:30px; border-radius:12px; text-align:left;">
                    <h4 style="margin-top:0; color:#74b9ff;">Figmaの脳内会議（アルゴリズム）</h4>
                    <p style="font-size:0.9rem; line-height:1.8;">
                        Figma「お、次の画面に移動だな。前の画面にあった『四角形』はどこ行った？」<br>
                        Figma「名前が同じ『Icon / Home』があるぞ！ 座標が右にズレてるな。よし、ここに向かって移動アニメーションさせよう！」
                    </p>
                    <div style="background:rgba(231, 76, 60, 0.2); border-left:4px solid #e74c3c; padding:20px; margin-top:20px; border-radius:4px;">
                        <strong>⚠️ 失敗パターン：名無しの権兵衛</strong><br>
                        もしレイヤー名が「Rectangle 1」と「Rectangle 56」みたいにバラバラだと…<br>
                        Figma「うーん、同じやつが見つからないな。別人かな？ 仕方ない、ただのフェードイン（じわっと切り替え）にしとくか…」<br>
                        <br>
                        これが「アニメーションがヌルヌル動かない原因」の99%です。<br>
                        <strong>「動かしたいものは、前後で一字一句同じ名前にする」</strong>。これだけ覚えて帰ってください。
                    </div>
                </div>
            </section>

            <section class="story-section">
                <h2>5-2. デザインに「脳みそ」を持たせる (Variables)</h2>
                <p>
                    最新のFigmaには<strong>「変数 (Variables)」</strong>という機能があります。<br>
                    これを使うと、デザインデータがただの絵から「数を数えたり、状態を記憶できるアプリ」に進化します。
                </p>

                <div class="column-box" style="background:#e3f2fd; border-color:#2196f3;">
                    <h3>☕ RPGで例えると？</h3>
                    <p>
                        変数は、RPGの<strong>「ステータス画面」</strong>だと思ってください。
                    </p>
                    <ul style="line-height:2.0; font-size:0.95rem;">
                        <li>
                            <strong>🔢 Number (数値) ≒ 所持金・HP</strong><br>
                            「カートの中身：0個」。ボタンを押すたびに <code>count = count + 1</code> して増やせます。
                        </li>
                        <li>
                            <strong>🔘 Boolean (真偽値) ≒ フラグ</strong><br>
                            「鍵を持っているか？ (True/False)」。このフラグがONの時だけ、宝箱が開くように設定できます。
                        </li>
                        <li>
                            <strong>🔤 String (文字列) ≒ 主人公の名前</strong><br>
                            「表示言語：日本語」。これを切り替えるだけで、アプリ内の全テキストを一瞬で英語に変換できます。
                        </li>
                    </ul>
                </div>

                <div class="engineer-voice">
                    <strong>👨‍💻 エンジニアの感動</strong>
                    「今まで『カートに入れるボタンを押したら、バッジの数字を1増やして』って口で言われても、実装漏れが多かったんだ。<br>
                    でもFigmaで実際にポチポチ動くプロトタイプを見せてもらえると、仕様が一発でわかる。<br>
                    これを『State（状態）管理』って言うんだけど、デザイナーがここまでやってくれるなんて、神かよ…」
                </div>
            </section>

            <section class="story-section">
                <h2>5-3. 「もしも」の分岐 (Conditional Logic)</h2>
                <p>
                    「ログインしてたらマイページへ、してなかったらログイン画面へ」<br>
                    こういう条件分岐（If文）も、Figmaだけで作れちゃいます。
                </p>
                
                <div class="visual-demo" style="text-align:left; background:#fff; border:2px solid #333;">
                    <h4 style="margin-top:0;">🚦 交通整理のロジック</h4>
                    <div style="font-family:monospace; font-size:0.9rem; line-height:1.6; background:#f5f5f5; padding:15px; border-radius:6px;">
                        <strong style="color:#e17055;">if</strong> ( loggedIn == <span style="color:#0984e3;">true</span> ) {<br>
                        &nbsp;&nbsp;Navigate to "Home"; <span style="color:#aaa;">// 会員ならホームへ</span><br>
                        } <strong style="color:#e17055;">else</strong> {<br>
                        &nbsp;&nbsp;Open Overlay "Login Modal"; <span style="color:#aaa;">// 非会員ならログイン画面へ</span><br>
                        }
                    </div>
                </div>
                <p style="margin-top:20px;">
                    これの何がすごいか分かりますか？<br>
                    今までは「ログイン成功版のデザイン」と「失敗版のデザイン」を別々に作って、線で繋いで…とやっていました。<br>
                    でもロジックがあれば、<strong>画面は1つでいいんです。</strong><br>
                    ボタンを押した瞬間の「変数の値」によって、行き先を自動で振り分けてくれるからです。これが現代のFigmaです。
                </p>
            </section>
        `
    },

    // =================================================================
    // Chapter 6: エンジニアへの納品 (Handoff)
    // =================================================================
    {
        title: "エンジニアへのラブレター",
        menuTitle: "6. 実装ハンドオフ",
        badge: "PRACTICE : 納品",
        desc: "デザイン完了はゴールじゃありません。ここからが本番。<br>エンジニア（旦那さん）に「最高のバトン」を渡すための、Dev Modeの作法を学びます。",
        themeClass: "theme-drill", // 実践色
        body: `
            <section class="story-section">
                <h2>6-1. 開発モード (Dev Mode) の歩き方</h2>
                <p>
                    画面右上のスイッチをONにすると、画面が緑色の<strong>「Dev Mode」</strong>に変わります。<br>
                    ここはエンジニアのための聖域。デザインを壊すことなく、サイズや色を調べるためだけのモードです。
                </p>
                
                <div class="visual-demo">
                    <div style="display:flex; gap:20px; align-items:flex-start;">
                        <div style="flex:1; text-align:left;">
                            <h4 style="margin-top:0;">🔍 インスペクト（検査）</h4>
                            <p style="font-size:0.9rem;">
                                要素をクリックすると、横幅やマージンがコードとして表示されます。<br>
                                重要なのは、ここに表示されるコードは<strong>「あなたが作ったオートレイアウトの構造そのもの」</strong>だということです。
                            </p>
                        </div>
                        <div style="flex:1; background:#1e272e; padding:15px; border-radius:6px; font-family:monospace; font-size:0.85rem; color:#a29bfe;">
                            display: flex;<br>
                            flex-direction: column;<br>
                            gap: 16px;<br>
                            padding: 24px;
                        </div>
                    </div>
                    <p style="font-size:0.9rem; margin-top:20px; color:#e74c3c; font-weight:bold; background:#fff0f0; padding:15px; border-radius:8px; border:1px solid #fab1a0;">
                        💀 恐怖の Absolute<br>
                        もしあなたがオートレイアウトをサボって適当に配置していると、ここには<br>
                        <code>position: absolute; top: 342px; left: 54px;</code><br>
                        という絶望的なコードが表示されます。これを見たエンジニアは、そっとブラウザを閉じたくなるでしょう。
                    </p>
                </div>
            </section>

            <section class="story-section">
                <h2>6-2. アノテーション（付箋）を貼ろう</h2>
                <p>
                    静止画だけでは伝わらない「動き」や「想い」は、Dev Mode専用のコメント機能（アノテーション）で補足しましょう。<br>
                    これはエンジニアへのラブレターです。
                </p>
                <div style="background:#eafff8; border-left:5px solid #00b894; padding:20px; border-radius:0 8px 8px 0;">
                    <strong>💌 良いラブレターの例</strong>
                    <ul style="margin:10px 0 0 0; font-size:0.95rem; line-height:1.8;">
                        <li>「このヘッダーは、スクロールしたら上に張り付いてね (Sticky)」</li>
                        <li>「このカード、スマホの時は縦並びにしてほしいな (Responsive)」</li>
                        <li>「アニメーションは『ボヨン』って感じで！ (Ease-out-back)」</li>
                    </ul>
                </div>
            </section>

            <section class="story-section">
                <h2>6-3. セクション機能で「状態」を伝える</h2>
                <p>
                    「どれが最新のデザインなの？」「これは採用案？ボツ案？」<br>
                    キャンバスが散らかっていると、エンジニアは迷子になります。<br>
                    <strong>「セクション (Shift + S)」</strong>を使って、デザインをエリアごとに囲みましょう。
                </p>
                <div class="visual-demo" style="text-align:center;">
                    <div style="display:inline-block; border:2px dashed #ccc; padding:20px; position:relative; background:white; margin-right:20px;">
                        <span style="position:absolute; top:-15px; left:10px; background:#ccc; color:white; padding:2px 10px; font-size:0.8rem; border-radius:4px;">Draft (書きかけ)</span>
                        <div style="width:50px; height:50px; background:#eee;"></div>
                    </div>
                    <div style="display:inline-block; border:2px solid #00b894; padding:20px; position:relative; background:#eafff8;">
                        <span style="position:absolute; top:-15px; left:10px; background:#00b894; color:white; padding:2px 10px; font-size:0.8rem; border-radius:4px;">Ready for Dev (開発OK)</span>
                        <div style="width:50px; height:50px; background:#00b894;"></div>
                    </div>
                </div>
                <p style="margin-top:15px;">
                    セクションのタイトルの横にある「Ready for dev」マークをONにすると、エンジニアの画面に「これを作って！」と通知がいきます。<br>
                    これがプロの仕事の渡し方です。
                </p>
            </section>
        `
    },

    // =================================================================
    // Final Drill: 最終試験 (The Boss Battle)
    // =================================================================
    {
        title: "最終試験：免許皆伝ドリル",
        menuTitle: "★ 最終試験",
        badge: "FINAL : 実力試験",
        desc: "これまでの知識を総動員して挑む、最後の試練。<br>単に作るだけでなく、「なぜ崩れたのか？」を修正するトラブルシューティング問題もあります。",
        themeClass: "theme-drill",
        body: `
            <div class="level-header" style="border-top:none; margin-top:20px;">
                <span class="level-badge" style="background:#00b894">LEVEL 1</span>
                <h3 class="level-title">物理法則の基礎</h3>
                <p class="level-desc">まずは準備運動。「壊れないボタン」を作れますか？</p>
            </div>

            <article class="drill-card lv1">
                <div class="status-bar"></div>
                <div class="card-content">
                    <div class="drill-header">
                        <div>
                            <span class="mission-number">MISSION 01</span>
                            <h3 class="mission-title">絶対崩れないボタン</h3>
                        </div>
                    </div>
                    <div class="goal-viz">
                        <span class="goal-label">GOAL</span>
                        <div style="display:inline-flex; gap:20px; align-items:center;">
                            <div class="css-btn">送信</div>
                            <span style="font-size:1.5rem;">→</span>
                            <div class="css-btn">メッセージを送信する</div>
                        </div>
                    </div>
                    <div class="steps-container">
                        <details>
                            <summary>Q. なぜ四角形の上に文字を置くだけではダメなのか？</summary>
                            <div class="step-content">
                                <strong>A. コンテンツと枠が連動しないから。</strong><br>
                                文字が増えた時、四角形は勝手に伸びてくれません。<br>
                                文字自身に「座布団（パディング）」を持たせてあげることで、文字の成長に合わせて座布団も広がるようになります。これがオートレイアウトの本質です。
                            </div>
                        </details>
                        <details>
                            <summary>Checkpoint</summary>
                            <div class="step-content">
                                □ <kbd>T</kbd> で文字を書く<br>
                                □ <kbd>Shift</kbd> + <kbd>A</kbd> でオートレイアウト化（フレーム化）<br>
                                □ 右パネルで「Fill（背景色）」と「Padding（余白）」を設定<br>
                                □ 文字を書き換えて枠が伸びるか確認
                            </div>
                        </details>
                    </div>
                </div>
            </article>

            <div class="level-header">
                <span class="level-badge" style="background:#fdcb6e; color:#333;">LEVEL 2</span>
                <h3 class="level-title">レスポンシブ設計</h3>
                <p class="level-desc">親が変われば子も変わる。その挙動を制御せよ。</p>
            </div>

            <article class="drill-card lv2">
                <div class="status-bar"></div>
                <div class="card-content">
                    <div class="drill-header">
                        <div>
                            <span class="mission-number">MISSION 02</span>
                            <h3 class="mission-title">伸び縮みするカード</h3>
                        </div>
                    </div>
                    <div class="goal-viz">
                        <span class="goal-label">TEST</span>
                        <div style="width:100%; max-width:300px; border:2px dashed #ccc; padding:10px; margin:0 auto;">
                            <div style="background:white; border-radius:6px; overflow:hidden; display:flex; gap:10px; padding:10px; box-shadow:0 2px 5px rgba(0,0,0,0.1);">
                                <div style="width:40px; height:40px; background:#dfe6e9; border-radius:4px; flex-shrink:0;"></div>
                                <div style="flex:1;">
                                    <div style="height:10px; width:100%; background:#2d3436; margin-bottom:5px; border-radius:2px;"></div>
                                    <div style="height:8px; width:70%; background:#b2bec3; border-radius:2px;"></div>
                                </div>
                            </div>
                        </div>
                        <p style="font-size:0.7rem; margin-top:5px;">外枠（点線）を広げると、中のカードも横一杯に追従させよ</p>
                    </div>
                    <div class="steps-container">
                        <details>
                            <summary>Q. 横幅をどう設定すべきか？</summary>
                            <div class="step-content">
                                <strong>A. 「Fill container (コンテナに合わせて拡大)」</strong><br>
                                固定幅 (Fixed) だと、親が広がっても知らんぷりしてしまいます。<br>
                                「親に合わせて広がりたい！」という意思表示をするために、横幅設定を <code>Fill container</code> に変更しましょう。
                            </div>
                        </details>
                    </div>
                </div>
            </article>

            <div class="level-header">
                <span class="level-badge" style="background:#0d99ff">LEVEL 3</span>
                <h3 class="level-title">トラブルシューティング</h3>
                <p class="level-desc">ここが分かればプロ級。崩れたレイアウトを直せ！</p>
            </div>

            <article class="drill-card lv3">
                <div class="status-bar"></div>
                <div class="card-content">
                    <div class="drill-header">
                        <div>
                            <span class="mission-number">FINAL MISSION</span>
                            <h3 class="mission-title">なぜかボタンがはみ出す…</h3>
                        </div>
                    </div>
                    <div class="hint-box" style="margin-bottom:20px; background:#fff0f0; border-color:#e74c3c;">
                        <strong>💀 状況設定</strong><br>
                        スマホ画面（親フレーム）の中に、オートレイアウトで作ったボタン（子）を置きました。<br>
                        ボタンの横幅を「Fill（親に合わせる）」にしたのに、なぜか<strong>親の枠を突き破って外にはみ出してしまいます。</strong><br>
                        なぜでしょうか？
                    </div>
                    <div class="steps-container">
                        <details>
                            <summary>💡 正解を見る</summary>
                            <div class="step-content">
                                <strong>犯人は「固定幅 (Fixed width)」の親です。</strong><br>
                                親フレーム自体がオートレイアウトになっていても、その横幅が「中身より小さい固定幅」になっているのに、中身が「親より大きくなろうとする（パディングなどが原因）」と矛盾が生じます。<br>
                                <br>
                                <strong>解決策：</strong><br>
                                1. 親のオートレイアウト設定で「折り返し (Wrap)」をONにする。<br>
                                2. または、ボタンの長すぎるテキストを「切り詰め (Truncate)」設定にする。
                            </div>
                        </details>
                    </div>
                </div>
            </article>

            <div style="text-align:center; margin-top:80px; padding-bottom:40px;">
                <h3 style="font-size:1.8rem; color:#2c3e50;">🎓 免許皆伝</h3>
                <p style="line-height:1.8; color:#636e72;">
                    お疲れ様でした！<br>
                    ここまで理解できれば、あなたはもう「ツールを使える人」ではありません。<br>
                    <strong>「エンジニアと対等に渡り合える、構造を理解したデザイナー」</strong>です。<br>
                    自信を持って、現場で活躍してください！
                </p>
                <button onclick="window.scrollTo({top:0, behavior:'smooth'})" style="margin-top:20px; padding:16px 40px; background:#2c3e50; color:white; border:none; border-radius:30px; font-weight:bold; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.2); font-size:1rem;">最初から復習する</button>
            </div>
        `
    }
];