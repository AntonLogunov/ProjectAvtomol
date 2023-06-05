const swiper = new Swiper('.section-slider__swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      },
  
    navigation: {
      nextEl: '.section-slider__swiper-button-next',
      prevEl: '.section-slider__swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.info__grid-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    // breakpoints:{
    //   670:{
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    //   990:{
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //   },
    //   1260:{
    //     slidesPerView: 4,
    //     spaceBetween: 10,
    //   },
    // },
    speed: 1000,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: '.info__grid-swiper-button-next',
      prevEl: '.info__grid-swiper-button-prev',
    },
  });

  const swiper3 = new Swiper('.section_clients_reviews-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints:{
      990:{
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1260:{
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    speed: 10000,
    grabCursor: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  
    navigation: {
      nextEl: '.section_clients_reviews__button-next',
      prevEl: '.section_clients_reviews__button-prev',
    },
  });