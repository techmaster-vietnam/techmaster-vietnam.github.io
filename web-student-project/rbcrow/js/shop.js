$(function () {
    active_btn_dot_file_item('#e-voucher');
    active_btn_dot_file_item('#other-product');

    resize_dots('#e-voucher');
    resize_dots('#other-product');

    var nbItem = 0;

    cart_Shop(nbItem);

    var listItem = $('.shop .item-feature-icon span');

    listItem.click(function() {
        if($(this).hasClass('active-item-feature-icon')){
            $(this).removeClass('active-item-feature-icon');
            if($(this).hasClass('fa-shopping-cart')) {
                nbItem --;
            }
        }
        else {
            $(this).addClass('active-item-feature-icon');
            if($(this).hasClass('fa-shopping-cart')) {
                nbItem ++;
            }
        }
        cart_Shop(nbItem);
    })

    $(window).resize(function () {
        resize_dots('#e-voucher');
        resize_dots('#other-product');
    })
})

function cart_Shop(numberItem) {
    if(numberItem === 0) {
        $('#btn-header-cart i').addClass('dp-none-after');
    }
    else {
        $('#btn-header-cart i').removeClass('dp-none-after');
        $('#btn-header-cart i').attr('data-content', numberItem);
    }
}