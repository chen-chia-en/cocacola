var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 20,
      modifier: 15,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
  });

