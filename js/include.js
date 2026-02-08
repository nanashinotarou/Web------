
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // 2. Handle Includes
    const includeElements = document.querySelectorAll('[data-include]');

    // We need to wait for includes to finish before adding the toggle button
    const promises = Array.from(includeElements).map(el => {
        const file = el.getAttribute('data-include');
        return fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Includes fail');
            })
            .then(html => {
                el.innerHTML = html;
            })
            .catch(error => console.error('Include error:', error));
    });

    Promise.all(promises).then(() => {
        // 3. Inject Theme Toggle after header is loaded
        const headerContainer = document.querySelector('.site-header .container');
        if (headerContainer && !document.querySelector('.theme-toggle')) {
            const btn = document.createElement('button');
            btn.className = 'theme-toggle';
            btn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
            btn.setAttribute('aria-label', 'Toggle Dark Mode');

            btn.onclick = () => {
                const current = document.documentElement.getAttribute('data-theme');
                const next = current === 'dark' ? 'light' : 'dark';

                document.documentElement.setAttribute('data-theme', next);
                localStorage.setItem('theme', next);
                btn.innerHTML = next === 'dark' ? '☀️' : '🌙';
            };

            headerContainer.appendChild(btn);

            // Adjust header layout
            headerContainer.style.display = 'flex';
            headerContainer.style.alignItems = 'center';
            headerContainer.style.justifyContent = 'space-between';
            const logo = headerContainer.querySelector('.logo');
            if (logo) {
                // Reset center alignment if needed, or let flex handle it
                logo.style.marginRight = 'auto';
            }
        }
    });
});
