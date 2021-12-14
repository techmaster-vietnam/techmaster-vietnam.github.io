//open credit

$("#open_credit").click(function () {
    $(".Credit-des").slideDown(1000);
    $(".Credit-des-2").slideUp(1000);
});

//close credit

$("#close_credit").click(function () {
    $(".Credit-des").slideUp(1000);
    $(".Credit-des-2").slideDown(1000);
});


// scale card

$(".card").click(function () {
    $(".card").css({
      transition: "all 0.3s all 0.3s ease-in-out",
      transform: "scale(1)",
    });
    $(this).css('transform', 'scale(1.2)');
});