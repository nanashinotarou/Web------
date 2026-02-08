/**
 * Atelier Radio
 * Simple Lo-fi BGM player for the website.
 */

document.addEventListener('DOMContentLoaded', () => {
    initRadio();
});

function initRadio() {
    // 1. Create Player UI
    const player = document.createElement('div');
    player.className = 'radio-player';
    player.innerHTML = `
        <div class="radio-status">
            <span class="music-note">🎵</span>
            <span class="track-name">Atelier Lo-fi</span>
        </div>
        <div class="radio-controls">
            <button id="radio-prev">⏮</button>
            <button id="radio-play">▶</button>
            <button id="radio-next">⏭</button>
        </div>
        <audio id="bgm-audio" loop>
            <source src="https://assets.mixkit.co/active_storage/sfx/1125/1125-preview.mp3" type="audio/mpeg">
        </audio>
    `;
    document.body.appendChild(player);

    // 2. Logic
    const audio = player.querySelector('audio');
    const playBtn = player.querySelector('#radio-play');
    const trackName = player.querySelector('.track-name');
    let isPlaying = false;

    // Volume (Low for background)
    audio.volume = 0.3;

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = '▶';
            player.classList.remove('playing');
        } else {
            audio.play().then(() => {
                playBtn.textContent = '⏸';
                player.classList.add('playing');
            }).catch(e => {
                console.log('Audio play failed:', e);
                alert('ブラウザの設定で音声再生がブロックされている可能性があります。');
            });
        }
        isPlaying = !isPlaying;
    });

    // Simple interaction for Prev/Next (just restart for now as we have 1 track)
    document.getElementById('radio-prev').addEventListener('click', () => {
        audio.currentTime = 0;
    });

    document.getElementById('radio-next').addEventListener('click', () => {
        // Mock changing track
        trackName.textContent = 'Searching...';
        setTimeout(() => {
            trackName.textContent = 'Atelier Lo-fi';
            audio.currentTime = 0;
            if (isPlaying) audio.play();
        }, 500);
    });
}
