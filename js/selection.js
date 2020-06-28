const menuButton = document.querySelector(".js-toggle-btn");
const nav = document.querySelector(".js-nav");
const links = document.querySelectorAll(".js-nav-link");

// Eventos
menuButton.onclick = function (e) {
    e.stopPropagation();
    toggleMenu();
  };
  
  nav.onclick = function (e) {
    e.stopPropagation();
  }
  
  document.body.onclick = function () {
    nav.classList.remove("open");
  }
  
  links.forEach(function (link) {
    link.onclick = function () {
      nav.classList.remove("open");
    }
  });
  
  // Funciones
  function toggleMenu () {
    nav.classList.toggle("open");
  };


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

  