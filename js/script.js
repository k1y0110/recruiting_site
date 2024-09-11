//ハンバーガーボタン

$(".burgerbtn").on("click",function(){
    $('.header-nav').toggleClass('open')
    $('.burgerbtn-line').toggleClass('open');
    $('.entry-btn-link').toggleClass('open');
    $('.top-loop').toggleClass('open');
    $('body').toggleClass('noscroll');
});

//news

const news = new Swiper(".fv-news",{
    loop: true,
    slidesPerView: .8,

    autoplay: {
        delay: 5000
    },
});

//staff

const staff = new Swiper(".staff-swiper",{
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",

    autoplay: {
        delay: 5000
    },

    breakpoints: {
        768: {
          slidesPerView: 4, 
          spaceBetween: 67, 
        } 
      },

    });