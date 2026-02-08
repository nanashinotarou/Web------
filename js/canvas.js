/**
 * The Sketchbook
 * Simple Canvas drawing API implementation.
 */

document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
});

function initCanvas() {
    const canvas = document.getElementById('drawing-board');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentColor = '#5D4037';
    let lastX = 0;
    let lastY = 0;

    // Initial Setup
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;

    // Mouse Events
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    // Touch Events (for mobile)
    canvas.addEventListener('touchstart', (e) => {
        isDrawing = true;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        lastX = touch.clientX - rect.left;
        lastY = touch.clientY - rect.top;
        e.preventDefault();
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        if (!isDrawing) return;
        e.preventDefault(); // Prevent scrolling
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        drawCore(x, y);
    }, { passive: false });

    canvas.addEventListener('touchend', () => isDrawing = false);


    function draw(e) {
        if (!isDrawing) return;
        drawCore(e.offsetX, e.offsetY);
    }

    function drawCore(x, y) {
        ctx.strokeStyle = currentColor;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
    }

    // Tools
    // 1. Color Picker
    document.querySelectorAll('.color-picker').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-picker').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentColor = btn.dataset.color;
        });
    });

    // 2. Clear
    document.getElementById('btn-clear').addEventListener('click', () => {
        if (confirm('全部消しますか？')) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });

    // 3. Save
    document.getElementById('btn-save').addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'my-sketch.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}
