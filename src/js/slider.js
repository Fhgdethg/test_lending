const swiper = new Swiper(".slider", {
  slidesPerView: 2.7,
  centeredSlides: false,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});