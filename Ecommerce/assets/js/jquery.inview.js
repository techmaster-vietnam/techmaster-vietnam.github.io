var $animation_elements = $('.check-in-view');
var $animation_elements_1 = $('.check-in-view-1');
var $animation_elements_2 = $('.check-in-view-2');
var $animation_elements_3 = $('.check-in-view-3');

var $window = $(window);
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 1
            $(".wrap-sec-first > p:nth-of-type(1)").stop(true, true).delay(500).animate({ left: 0, opacity: 1 }, 600, "linear");
            $(".wrap-sec-first > p > strong").stop(true, true).delay(1000).animate({ right: 0, opacity: 1 }, 600, "linear");
            $(".wrap-sec-first > p:nth-of-type(2)").stop(true, true).delay(2000).animate({ right: 0, opacity: 1 }, 600, "linear");
            $(".wrap-sec-first > span").stop(true, true).delay(2500).animate({ opacity: 1 }, 600, "linear");
            $(".wrap-sec-first > span").addClass('in-view');
            $(".wrap-sec-first .read-more a").stop(true, true).delay(3500).animate({ opacity: 1 }, 600, "linear");
            //$(".wrap-sec-first .first-cir-item .item").addClass('in-view');
            $(".first-cir-item").stop(true, true).delay(4000).animate({ opacity: 1 }, 600, "linear");
        }
        else {
            // banner 1
            $(".wrap-sec-first > p:nth-of-type(1)").stop(true, true).delay(0).animate({ left: '-50px', opacity: 0 }, 600, "linear");
            $(".wrap-sec-first > p > strong").stop(true, true).delay(0).animate({ right: '-50px', opacity: 0 }, 600, "linear");
            $(".wrap-sec-first > p:nth-of-type(2)").stop(true, true).delay(0).animate({ right: '-50px', opacity: 0 }, 600, "linear");
            $(".wrap-sec-first > span").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
            $(".wrap-sec-first > span").removeClass('in-view');
            $(".wrap-sec-first .read-more a").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
            //$(".wrap-sec-first .first-cir-item .item").removeClass('in-view');
            $(".first-cir-item").delay(0).stop(true, true).animate({ opacity: 0 }, 600, "linear");
        }
    });

    $.each($animation_elements_1, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 2
            $(".wrap-sec-second > h2").stop(true, true).delay(1000).animate({ opacity: 1, right: 0 }, 600, "linear");
            $(".wrap-sec-second > span").addClass('in-view');
            $(".wrap-sec-second > span").stop(true, true).delay(2000).animate({ opacity: 1 }, 600, "linear");
            $(".wrap-sec-second .second-item").stop(true, true).delay(5000).animate({ opacity: 1 }, 600, "linear");
            $(".wrap-sec-second .read-more a").stop(true, true).delay(3500).animate({ opacity: 1 }, 600, "linear");
            $(".section_df .line").addClass('in-view');
        }
        else {
            // banner 2
            $(".wrap-sec-second > h2").stop(true, true).delay(0).animate({ opacity: 0, right: '-50px' }, 600, "linear");
            $(".wrap-sec-second > span").removeClass('in-view');
            $(".wrap-sec-second > span").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
            $(".wrap-sec-second .second-item").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
            $(".wrap-sec-second .read-more a").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
            $(".section_df .line").remove('in-view');
        }
    });

    $.each($animation_elements_2, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 3
            $(".wrap-sec-third .third-wrap").stop(true, true).delay(1000).animate({ opacity: 1, right: 0 }, 600, "linear");
            $(".wrap-sec-third .read-more a").stop(true, true).delay(3500).animate({ opacity: 1 }, 600, "linear");
        }
        else {
            // banner 3
            $(".wrap-sec-third .third-wrap").stop(true, true).delay(1000).animate({ opacity: 0, right: '100px' }, 600, "linear");
            $(".wrap-sec-third .read-more a").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
        }
    });

    $.each($animation_elements_3, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position) && ($(window).width() > 992)
            ) {
            // banner 4
            $(".wrap-sec-fourth > h2").stop(true, true).delay(500).animate({ opacity: 1, left: 0 }, 600, "linear");
            $(".wrap-sec-fourth > p").stop(true, true).delay(1000).animate({ opacity: 1, right: 0 }, 600, "linear");
            $(".wrap-sec-fourth > ul").stop(true, true).delay(1500).animate({ opacity: 1 }, 600, "linear");
            $(".wrap-sec-fourth .read-more a").stop(true, true).delay(3500).animate({ opacity: 1 }, 600, "linear");
        }
        else {
            // banner 4
            $(".wrap-sec-fourth > h2").stop(true, true).delay(0).animate({ opacity: 0, left: '-50px' }, 600, "linear");
            $(".wrap-sec-fourth > p").stop(true, true).delay(0).animate({ opacity: 0, right: '-50px' }, 600, "linear");
            $(".wrap-sec-fourth > ul").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
            $(".wrap-sec-fourth .read-more a").stop(true, true).delay(0).animate({ opacity: 0 }, 600, "linear");
        }
    });
};
$window.on('load scroll resize', check_if_in_view);
$window.trigger('scroll');


