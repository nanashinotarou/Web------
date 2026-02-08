document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for General Fade-in Animations
    const fadeOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: Keep animating or stop
            }
        });
    }, fadeOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => fadeObserver.observe(el));

    // 2. Sensor Visualizer Specific Trigger
    const sensorContainer = document.querySelector('.sensor-visualizer');
    if (sensorContainer) {
        const sensorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Triggers CSS keyframe 'expandSensor'
                }
            });
        }, { threshold: 0.5 });

        sensorObserver.observe(sensorContainer);
    }
});
