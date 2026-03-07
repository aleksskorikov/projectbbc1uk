// const swiper1 = new Swiper('.swiper1', {
//     loop: true,
//     speed: 600,
//     spaceBetween: 24,

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
//             if (window.innerWidth <= 640 && index > 2) return '';
//             return `<span class="${className}"></span>`;
//         },
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//         },
//         641: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
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

            if (window.innerWidth <= 640) {
                if (index > 2) return '';
            }

            return `<span class="${className}" data-index="${index}"></span>`;
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

    on: {
        slideChange: function () {

            if (window.innerWidth <= 640) {
                const bullets = document.querySelectorAll('.slider-dot');

                bullets.forEach(b => b.classList.remove('is-active'));

                const activeIndex = this.realIndex % 3;

                if (bullets[activeIndex]) {
                    bullets[activeIndex].classList.add('is-active');
                }
            }
        }
    }
});