$(window).on("load", function () {
    setTimeout(function () {
        $("body").css("overflow", "auto");
        $(".loading").fadeOut(600);
        $(".banner__content-h1:nth-child(1)").addClass("animate__animated animate__fadeInLeft animate__delay-1s");
        $(".banner__content-h1:nth-child(2)").addClass("animate__animated animate__fadeInLeft animate__delay-2s");
        $(".banner__content-h2").addClass("animate__animated animate__fadeInUp animate__delay-3s");
    }, 1000);
});

$(document).ready(function () {
    $(".nav__main-menu-item:nth-child(1) a").addClass("nav__main--location");

    // scroll navbar
    $(window).scroll(function () {
        let scroll = $("html").scrollTop();
        let location = $(".main").offset().top;

        if (scroll >= location) {
            $(".nav").addClass("nav--change");
        } else {
            $(".nav").removeClass("nav--change");
        }

        let svg = $(".slide-main").offset().top;

        if(scroll >= svg) {
            $(".service__title-svg--truck").css("display", "block");
            $(".service__title-svg--truck").addClass("animation-truck");

            $(".service__title-svg--shield").css("display", "block");
            $(".service__title-svg--shield").addClass("animation-shield");

            $(".service__title-svg--badge").css("display", "block");
            $(".service__title-svg--badge").addClass("animation-badge");

            $(".service__title-svg--gift").css("display", "block");
            $(".service__title-svg--gift").addClass("animation-gift");

            // $(".service__title-content").addClass("animate__animated animate__fadeInDown");
            // $(".service__title-content").css("display", "block");
        }
    });
});