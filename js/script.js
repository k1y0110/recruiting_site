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

const staff = new Swiper(".staff",{
    loop: true,
    slidesPerView: 1,

    autoplay: {
        delay: 5000
    },

    breakpoints: {
        1025: {
          slidesPerView: 2.2, 
          spaceBetween: 70, 
        } 
      },
    });