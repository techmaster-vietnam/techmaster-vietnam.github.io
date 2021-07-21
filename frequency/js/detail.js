$(window).on("load", function () {
    $("body").css("overflow", "auto");
    $(".loading").fadeOut(600);
});

$(document).ready(function () {
    $(".nav").css({
        "position": "relative",
        "background-color": "#202020"
    });

    // video
    $("#video--show").click(function () {
        $(".watch__main-status-video").toggleClass("watch__main-status-video--show");
    });

    $(".watch__main-status-video--overlay").click(function () {
        $(".watch__main-status-video").toggleClass("watch__main-status-video--show");
    });

    // fancybox
    $("[data-fancybox='gallery']").fancybox({
        loop: true,
        animationEffect: "zoom-in-out",
        animationDuration: 400,
        transitionEffect: "circular",
        transitionDuration: 600
    });
});