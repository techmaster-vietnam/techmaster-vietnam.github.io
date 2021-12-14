var sum = 0, total, discount, discountRate=0;
var $navMenuCont;
$(document).ready(function(){
    // $('.box').css({'transform':'translateX(0)','opacity':1});
    // $('.box-title').css({'transform':'translateX(0)','opacity':1});
    $(window).scroll(function(){
        checkY();
    });
    
    // Do this on load just in case the user starts half way down the page
    checkY();
    
    $(".brand-owl").owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplaySpeed: 1500,
        // autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            350:{
                items:2
            },
            550:{
                items:3
            },
            768:{
                items:4,
                margin:30
            },
            992:{
                items:5,
                margin:40
            },
            1200:{
                items:6,
                margin:50
            }
        }
    });
    
    $('.box').each(function () {
        var countTo = Number($(this).find('.count').text());
        $(this).mouseenter( function() {
            $(this).find('.count').prop('counter',0).animate({
                counter: countTo
            }, {
                duration: 800,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); 
    });

    // Solution 1
    projectResponsive();

    $(window).resize(function(){
        projectResponsive();
    });

    $('[data-toggle="slide-collapse"]').on('click', function() {
        $navMenuCont = $($(this).data('target'));
        $navMenuCont.animate({'width':'toggle'}, 350);
        

        // $navMenuCont.find('.nav').click(function(event){
            // return false;
            // event.stopPropagation();
        // });
        return false;
        // event.stopPropagation();
    });

    $(window).click(function() {
        if ($('.side-nav').css("display") == "block" && window.innerWidth < 768) {
            $('.side-nav').animate({'width':'toggle'}, 350);
            event.stopPropagation();
        } else {
            event.stopPropagation();
        }
    });

    $('[data-toggle="filter-display"]').each(function () {
        $(this).on('click', function() {
            displayTarget = $(this).data('target');
            $('.product-group, .sub-group, .tags button').removeClass('active');
            $(this).addClass('active');
            $('.col-item').hide();
            $('.col-item' + displayTarget).fadeIn(600);
            // $('.col-item').removeAttr('style');
            // $('.col-item').not(displayTarget).css('display','none');
        });
    });
    $('[data-toggle="display-all"]').on('click', function() {
        $('.product-group, .sub-group, .tags button').removeClass('active');
        $('.col-item').fadeIn(600);
    });

    $('.qty-decrease').each(function () {
        $(this).on('click', function() {
            var updateQty = Number($(this).next('input').attr('value'));
            if (updateQty > 1) {
                updateQty--;
            }
            $(this).next('input').attr('value',updateQty);
            $(this).next('input').val(updateQty);
            updateSubtotal(this,updateQty);
            updateTotal();
        });
    });
    $('.qty-increase').each(function () {
        $(this).on('click', function() {
            var updateQty = Number($(this).prev('input').attr('value'));
            updateQty++;
            $(this).prev('input').attr('value',updateQty);
            $(this).prev('input').val(updateQty);
            updateSubtotal(this,updateQty);
            updateTotal();
        });
    });
    $('.product-quantity input').each(function () {
        $(this).change(function(){
            var currentQty = $(this).val();
            $(this).attr('value',currentQty);
            updateSubtotal(this,currentQty);
            updateTotal();
        });
    });
    $('.product-remove button').each(function () {
        $(this).on('click', function() {
            $(this).parents('.cart-item').remove();
            updateTotal();
        });
    });

    $('.apply-coupon').click(function(){
        discountRate = $(this).prev('input').val();
        $('.discount-rate').text(discountRate + '%');
        $('.cart-discount td').text(discount.toLocaleString('vi'));
        updateTotal();
    });
    $('.open-option').change(function() {
        if (this.checked) {
            $('.optional').slideDown();
        } else {
            $('.optional').slideUp();
        }
    });
    // $('.product-list').find('[data-toggle="tab"]').each(function () {
    //     $(this).on('click', function() {
    //         $('.col-item').removeAttr('style');
    //     });
    // });
    $('.user-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var tabId = button.data('tabs'); // Extract info from data-* attributes
        $(this).find('.nav-tabs>li').removeClass('active');
        $(this).find('#' + tabId + '-indicator').addClass('active');
        $(this).find('.tab-pane').removeClass('active in');
        $(this).find('.tab-pane#' + tabId).addClass('active in');
    });

    $('#login-btn').click(function(){
        $('.before-log').hide();
        $('.logged').css('display','flex');
    });
    $('#logout-btn').click(function(){
        $('.logged').hide();
        $('.before-log').show();
        event.preventDefault();
    });
    $("#to-about").click(function() {
        $('html,body').animate({
            scrollTop: $("#about-min").offset().top},
            'slow');
        return false;
    });
    $(".back-top").click(function() {
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
        return false;
    });
});

$('td.product-price').each(function () {   
    var item = $(this).text();
    sum += Number($(this).text());
    discount = sum*discountRate/100;
    total = sum - discount;
    var qty = $(this).next('td').find('input').attr('value');
    var subTotal = (Number(item)*Number(qty)).toLocaleString('vi');
    var num = Number(item).toLocaleString('vi');
    $(this).text(num);
    $(this).siblings('.product-subtotal').text(subTotal);
    $('.cart-subtotal td').text(sum.toLocaleString('vi'));
    $('.amount').text(total.toLocaleString('vi'));
});

function updateSubtotal (currentItem,currentQty) {
    var item = $(currentItem).parents('.product-quantity').siblings('.product-price').text().replace(/\./g, "");
    var subTotal = (Number(item)*currentQty).toLocaleString('vi');
    $(currentItem).parents('.product-quantity').siblings('.product-subtotal').text(subTotal);
}
function updateTotal () {
    sum = 0;
    $('td.product-subtotal').each(function () {
        sum += Number($(this).text().replace(/\./g, ""));
    });
    discount = sum*discountRate/100;
    total = sum - discount;
    $('.cart-subtotal td').text(sum.toLocaleString('vi'));
    $('.cart-discount td').text(discount.toLocaleString('vi'));    
    $('.amount').text(total.toLocaleString('vi'));
}

function projectResponsive() {
    if (window.innerWidth >= 768 && window.innerWidth <=991) {
        $('.project-container:nth-child(odd)').each(function () {
            $(this).hover(
                function () {
                    $(this).css('width','66.67%');
                    $(this).prev().css('width','33.33%');
                }, function () {
                    $(this).css('width','50%');
                    $(this).prev().css('width','50%');
                }
            );
        });

        $('.project-container:nth-child(even)').each(function () {
            $(this).hover(
                function () {
                    $(this).css('width','66.67%');
                    $(this).next().css('width','33.33%');
                }, function () {
                    $(this).css('width','50%');
                    $(this).next().css('width','50%');
                }
            );
        });
    } else {
        $('.project-container').removeAttr('style');
        $('.project-container').off();
    }
}

function checkY(){
    if( $(window).scrollTop() > 0 ){
        $('.box').css({'transform':'translateX(0)','opacity':1});
        $('.box-title').css({'transform':'translateX(0)','opacity':1});
        $('.slogan').find('h1').css({'transform':'translateY(0)','opacity':1});
        $('.slogan').find('a').css({'transform':'translateY(0)','opacity':1});
        $('.slogan').find('h3').animate({width:'200px',opacity:1},1500);
    }
    if ($(window).scrollTop() > 500) {
        $('.back-top').fadeIn('slow');
    } else {
        $('.back-top').fadeOut('slow');
    }
    // startY = $('.section-title.style').position().top;
    // if( $(window).scrollTop() > startY ){
    //     $('.style-title').slideDown(800);
    // }
}