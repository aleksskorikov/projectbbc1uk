
// const swiper1 = new Swiper('.swiper1', {
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     loop: true,
//     spaceBetween: 24,
//     speed: 600,

//     navigation: {
//         nextEl: '.slider-arrow--next',
//         prevEl: '.slider-arrow--prev',
//     },

//     pagination: {
//         el: '.slider-pagination',
//         clickable: true,
//         bulletClass: 'slider-dot',
//         bulletActiveClass: 'is-active',
//         renderBullet: function (index, className) {
//             return `<span class="${className}"></span>`;
//         },
//     },
// });

const swiper1 = new Swiper('.swiper1', {
    loop: true,
    speed: 600,
    spaceBetween: 24,

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

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        641: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});