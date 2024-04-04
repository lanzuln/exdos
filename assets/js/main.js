const offcanvasMenu = document.querySelector(".offcanvas_menu");
const mobile_bars = document.querySelector(".menu_bar");
const closeButton = document.querySelector(".close_btn");

mobile_bars.addEventListener("click", () => {
  offcanvasMenu.classList.toggle("open");
});

closeButton.addEventListener("click", () => {
  offcanvasMenu.classList.remove("open");
});

$(document).ready(function () {
  $('.all_fedback').slick({
    prevArrow: ".b_prev",
    nextArrow: ".b_next"
  });


  $('.first_carousel_wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        }
      }
    ]
  });
  
  $('.second_carousel_wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          centerPadding: '40px',
        }
      }
    ]
  });

  $('.all_team').slick({
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".t_b_prev",
    nextArrow: ".t_b_next",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});
