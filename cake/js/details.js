$(document).ready(function () {
  $(".details__carousel-list").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    centerMode: false,
    cssEase: "linear",
  });

  //// SELECT PHOTO

  $(".js-details-mini").click(function () {
   

    if ($(this).hasClass("details-mini--active")) {
      return 
    }

    $(".details-mini--active").removeClass("details-mini--active");
    $(this).addClass("details-mini--active");

    let index = $(this).attr("data-index");

    let itemContent = $(".details__pho[data-index='" + index + "']");
    
    $(".details__photo--active").removeClass("details__photo--active");
    itemContent.addClass("details__photo--active");
  });

  /// SELECT NUMBER
  let count;
  let numbeBasket = $(".details__number-basket");
  count = parseInt(numbeBasket.text());
  

  $(".details__number-plus").click(function () {
    count++;
    numbeBasket.text(count);
  });
  $(".details__number-minus").click(function () {
    if (count <= 1) {
      return;
    } else {
      count--;
      numbeBasket.text(count);
    }
  });

  /////////// POPULA ///////////

  $(".popula__carousel").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      ,
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
