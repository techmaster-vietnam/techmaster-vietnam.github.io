
$('.slide-featured').slick({
    centerMode: true,
    slidesToShow: 3,
    arrows: false,
    centerPadding: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  });

  $("#nextSlide").click(function () {
    $(".slide-featured").slick("slickNext");
  });
  
  $("#prevSlide").click(function () {
    $(".slide-featured").slick("slickPrev");
  });