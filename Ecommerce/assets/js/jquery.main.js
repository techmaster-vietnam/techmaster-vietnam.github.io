(function ($) {
    $(window).load(function () {
        //EqualSizer('.online-item .item .sp-info a h3,.item-news');
        //EqualSizer_1('.online-item .item .sp-info p');
    });
    $(window).resize(function () {

    });
    $(function () {
        mymap();
        myfunload();
        sp_quantity();
    });
})(jQuery);
//function===============================================================================================
/*=============================fun=========================================*/
function myfunload() {
    $(".panel-a").mobilepanel();
    $("#menu > li").not(".home").clone().appendTo($("#menuMobiles"));
    $("#menuMobiles input").remove();
    $("#menuMobiles > li > a").append('<span class="fa fa-chevron-circle-right iconar"></span>');
    $("#menuMobiles li li a").append('<span class="fa fa-angle-right iconl"></span>');
    $("#menu > li:last-child").addClass("last");
    $("#menu > li:first-child").addClass("fisrt");

    $("#menu > li").find("ul").addClass("menu-level");

    $('#menu li').hover(function () {
        $(this).children('ul').stop(true, false, true).slideToggle(300);
    });
    $('.log-in > a').click(function (e) {
        e.preventDefault();
        $('.lognin').stop(true, false, true).slideToggle(400);
    });
    $('.cart').click(function () {
        $('.cart-box').stop(true, false, true).slideToggle(400);
    });
    /* active carousel bootstrap */
    $('.carousel-indicators').find('li').first().addClass('active');
    $('.carousel-inner').find('.item').first().addClass('active');

    $('.nav-tabs').find('li').first().addClass('active');
    $('.tab-content').find('.tab-pane').first().addClass('active');
    /*===== maps =====*/
    
    /*=====  =====*/
    $('.product-km').owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('.product-bc').owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });


}
function sp_quantity() {
    $(".sp-btn").on("click", function () {
        var $button = $(this),
            $input = $button.closest('.sp-quantity').find("input.quntity-input");
        var oldValue = $input.val(),
            newVal;
        console.log(oldValue);

        if ($(this).attr('data-id') == 'sp-plus') {
            newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $input.val(newVal);
    });
}
/*=========================================================================*/
//================== scroll top
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

//$(window).scroll(function () {
//    if ($(this).scrollTop() > 138) {
//        $('.bot-head').addClass('bot-head-scroll');
//    }
//    else {
//        $('.bot-head').removeClass('bot-head-scroll');
//    }
//});

$('.scroll-to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});
function DoEqualSizer(myclass) {
    var heights = $(myclass).map(function() {
        $(this).height('auto');
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(myclass).height(maxHeight);
};
function EqualSizer_1(myclass) {
    $(document).ready(DoEqualSizer(myclass));
    window.addEventListener('resize', function () {
        DoEqualSizer(myclass);
    });
};
function EqualSizer(myclass) {
    $(document).ready(DoEqualSizer(myclass));
    window.addEventListener('resize', function() { 
        DoEqualSizer(myclass); 
    });
};
//==================
function mymap() {
    mympp();
    var timeout;
    $(window).resize(function () {
        clearTimeout(timeout);
        setTimeout(function () {
            mympp();
        }, 500);
    });
}
function mympp() {
    $('#mapwrap').remove();
    if ($(window).width() > 768) {
        $('#mapshow').append('<div id="mapwrap"><iframe id="iframe" src="map.html" frameborder="0" height="100%" width="100%"></iframe></div>');
    }
}

