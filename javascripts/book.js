document.addEventListener("DOMContentLoaded", function(){
    new Splide('.slider', {
        type: 'loop',
        autoplay: true,
        interval: 3000, //  интервал для лучшего восприятия
        pauseOnHover: true, //  паузу при наведении
        pauseOnFocus: true, //  паузу при фокусе
        perPage: 1,
        // Array: false,
        fixedWidth: '100%',
        heightRatio: 0.5, // Соотношение высоты слайдера
        cover: true, // Растягиваем изображения на всю площадь
    }).mount();
});