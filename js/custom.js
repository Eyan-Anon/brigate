jQuery(function($) {

    // stickl up slider code start
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
    // stickl up slider code end

    // animated number counter code start
    $('.customer').animationCounter({

        start: 0,
      
        end: 1200,
        step: 5,

        delay: 10
      
      });
      $('.project').animationCounter({

        start: 0,
      
        end: 2080,
        step: 10,

        delay: 20
      
      });
      $('.brance').animationCounter({

        start: 0,
      
        end: 4000,
        step:10,

        delay: 20
      
      });
      $('.winner').animationCounter({

        start: 0,
      
        end: 100,
        step: 1,

        delay: 20
      
      });

    // animated number counter code end

    // swipper js code start
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoPlay: true,
        autoPlayTimeOut: 2000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

  });