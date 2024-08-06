//ハンバーガーボタン

$(".burgerbtn").on("click",function(){
    $('.header-nav').toggleClass('open')
    $('.burgerbtn-line').toggleClass('open');
    $('body').toggleClass('noscroll');
});

//news

const news = new Swiper(".fv-news",{
    loop: true,
    slidesPerView: 1,

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
        1025: {
          slidesPerView: 2.5, 
          spaceBetween: 60, 
        } 
      },

    });