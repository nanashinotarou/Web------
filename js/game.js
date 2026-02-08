/**
 * The Hidden Cats Game
 * Find 5 cats hidden across the website to unlock a special reward.
 */

document.addEventListener('DOMContentLoaded', () => {
    initCatGame();
});

function initCatGame() {
    const TOTAL_CATS = 5;
    const catSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3'); // Free Cat Meow SFX placeholder

    // Check state
    let foundCats = JSON.parse(localStorage.getItem('foundCats') || '[]');

    // UI: Counter Badge (Fixed Bottom Left)
    const counterBadge = document.createElement('div');
    counterBadge.className = 'cat-counter';
    updateCounter(counterBadge, foundCats.length, TOTAL_CATS);
    document.body.appendChild(counterBadge);

    // Event Delegation for Cat Clicks
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('hidden-cat')) {
            const catId = e.target.dataset.id;

            if (!foundCats.includes(catId)) {
                // Found a new cat!
                foundCats.push(catId);
                localStorage.setItem('foundCats', JSON.stringify(foundCats));

                // Sound & Visuals
                catSound.currentTime = 0;
                catSound.play().catch(() => { }); // Ignore interaction errors
                e.target.classList.add('found');

                // Confetti / Particles (Simple CSS Class)
                createSparkles(e.clientX, e.clientY);

                updateCounter(counterBadge, foundCats.length, TOTAL_CATS);

                if (foundCats.length === TOTAL_CATS) {
                    showVictoryModal();
                }
            } else {
                // Already found
                alert('この猫ちゃんはもう見つけているよ！');
            }
        }
    });

    // Check if cat on this page is already found
    const onPageCat = document.querySelector('.hidden-cat');
    if (onPageCat && foundCats.includes(onPageCat.dataset.id)) {
        onPageCat.classList.add('found');
    }
}

function updateCounter(el, count, total) {
    el.textContent = `🐈 ${count} / ${total}`;
    if (count === total) {
        el.classList.add('complete');
        el.textContent = '👑 All Cats Found!';
    }
}

function createSparkles(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'click-sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

function showVictoryModal() {
    const modal = document.createElement('div');
    modal.className = 'cat-modal';
    modal.innerHTML = `
        <div class="cat-modal-content">
            <h2>🎉 コンプリート！</h2>
            <p>アトリエの猫を全員見つけましたね！</p>
            <p>（将来的にここに壁紙DLリンクなどが追加されます）</p>
            <button onclick="this.parentElement.parentElement.remove()">閉じる</button>
        </div>
    `;
    document.body.appendChild(modal);
}
