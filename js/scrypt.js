new Swiper('.swiper1', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: { el: '.swiper-pagination1', clickable: true },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    641: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});