document.addEventListener("DOMContentLoaded", function () {
    const svg = document.querySelector('.chel');
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    document.addEventListener('mousemove', (e) => {
        // Вычисляем небольшой угол (ограничиваем диапазон)
        const angle = Math.min(4, Math.max(-4,
            (e.clientX - center.x) * 0.1 // Максимум ±15 градусов
        ));

        svg.style.transform = `rotate(${angle}deg)`;
    });
});