const swiper = new Swiper('.swiper', {

  // Optional parameters
  loop: true,
  autoplay: true,
  speed: 800,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    400: {
      spaceBetween: 20,
      slidesPerView: 3,
      centeredSlides: true,
    },
    0: {
      spaceBetween: 0,
      slidesPerView: 2,
      centeredSlides: false,
    },
  },

  on: {
    init: function() {
      let self = this;
      setTimeout(function() {
        let slideElements = self.slides
        for (let i = 0; i < slideElements.length; i++) {
          slideElements[i].style.transition = '.8s';
        }

      }, 10)
  }
  }

});

