// const swiper1 = new Swiper('.swiper1', {
//     slidesPerView: 3,        // 3 слайда
//     slidesPerGroup: 3,       // листает по 3
//     spaceBetween: 24,
//     loop: true,              // бесконечный

//     pagination: {
//         el: '.swiper-pagination1',
//         clickable: true,
//     },

//     navigation: {
//         nextEl: '.swiper-button-next1',
//         prevEl: '.swiper-button-prev1',
//     },

//     speed: 600,
// });

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    spaceBetween: 24,
    speed: 600,

    navigation: {
        nextEl: '.slider-arrow--next',
        prevEl: '.slider-arrow--prev',
    },

    pagination: {
        el: '.slider-pagination',
        clickable: true,
        bulletClass: 'slider-dot',
        bulletActiveClass: 'is-active',
        renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
        },
    },
});