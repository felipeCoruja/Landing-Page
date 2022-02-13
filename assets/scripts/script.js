
const swiper = new Swiper('.swiper', {
  // Optional parameters
      slidesPerView: 4,
      spaceBetween:40,
      slidesPerGroup:1,
      speed: 1000,
      loopFillGroupWithBlank:true,
      loop: true,
    //   slidesOffsetBefore: -60,
      
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          // when window width is >= 320px
          
          300: {
              slidesPerView: 1,
              spaceBetween: 30
          },
          // when window width is >= 480px
          525: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          // when window width is >= 640px
          840: {
              slidesPerView: 3,
              spaceBetween: 40
          },
          1000:{
              slidesPerView: 4,
              spaceBetween: 45
          }
        }
  
  });
  
    
  
   
  
  
  