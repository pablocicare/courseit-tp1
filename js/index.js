const btnToggle = document.querySelector('.toggle-btn');
const btnActive = document.querySelector('.li-btn');

btnToggle.addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.toggle('active');
});

btnActive.addEventListener('click', function() {
    document.querySelector('.menu-mobile').classList.remove('active');
    console.log("click")
});

$(document).ready(function(){

    $('.carousel-series').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,

        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 4,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1
        //     }
        //   },
        //   // You can unslick at a given breakpoint now by adding:
        //   // settings: "unslick"
        //   // instead of a settings object
        // ]
      });

  });

  