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

    $('.series-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: false,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,

        responsive: [
          {
            breakpoint: 992,
            settings: "unslick"
          }
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
        ]
      });

  });

  