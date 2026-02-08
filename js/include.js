
document.addEventListener('DOMContentLoaded', () => {
    const includeElements = document.querySelectorAll('[data-include]');

    includeElements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Includes fail');
            })
            .then(html => {
                el.innerHTML = html;
            })
            .catch(error => {
                console.error('Include error:', error);
            });
    });
});
