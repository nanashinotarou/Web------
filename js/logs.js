/**
 * Log Management Script
 * Handles sorting and visual enhancements for the log list.
 */

document.addEventListener('DOMContentLoaded', () => {
    initLogSorter();
});

function initLogSorter() {
    const logsList = document.querySelector('.logs-list');
    if (!logsList) return;

    // 1. Inject Controls
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'log-controls';

    // Sort Buttons
    const btnNewest = createSortButton('新しい順', true);
    const btnOldest = createSortButton('古い順', false);

    controlsContainer.appendChild(btnNewest);
    controlsContainer.appendChild(btnOldest);

    // Insert before the list
    logsList.parentNode.insertBefore(controlsContainer, logsList);

    // 2. Parse & Enhance Logs
    const logs = Array.from(logsList.querySelectorAll('.log-card'));

    // Calculate "New" threshold (14 days)
    const now = new Date();
    const twoWeeksAgo = new Date(now.getTime() - (14 * 24 * 60 * 60 * 1000));

    logs.forEach(log => {
        const timeEl = log.querySelector('time');
        if (!timeEl) return;

        const dateStr = timeEl.textContent.trim().replace(/\./g, '-');
        const date = new Date(dateStr);
        log.dataset.date = date.getTime(); // Store for sorting

        // Add NEW badge
        if (date >= twoWeeksAgo) {
            const badge = document.createElement('span');
            badge.className = 'new-badge';
            badge.textContent = 'NEW';
            log.querySelector('.log-meta').appendChild(badge);
        }
    });

    // 3. Sorting Logic
    function sortLogs(isDesc) {
        const sorted = logs.sort((a, b) => {
            const dateA = parseInt(a.dataset.date || 0);
            const dateB = parseInt(b.dataset.date || 0);
            return isDesc ? dateB - dateA : dateA - dateB;
        });

        // Re-append in order
        sorted.forEach(log => logsList.appendChild(log));

        // Update active state
        btnNewest.classList.toggle('active', isDesc);
        btnOldest.classList.toggle('active', !isDesc);
    }

    function createSortButton(text, isDesc) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.className = 'sort-btn';
        if (isDesc) btn.classList.add('active'); // Default
        btn.onclick = () => sortLogs(isDesc);
        return btn;
    }
}
