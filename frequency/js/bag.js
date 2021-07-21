$(window).on("load", function () {
    $("body").css("overflow", "auto");
    $(".loading").fadeOut(600);
});

$(document).ready(function () {
    $(".nav").addClass("nav--change-style");

    $(".product__items-button-plus").click(function () {
        console.log($(".product__items-button-input").val());
    });
});