$('.control-amount button').click(function () {
    amount = $(this).closest('.control-amount').find('.amount-detail-item');
    content = amount.val();
    if ($(this).hasClass('btn-decrease-amount')) {
        if (content > 1) {
            content--;
            amount.val(content);
        }
    }
    else if ($(this).hasClass('btn-increase-amount')) {
        content++;
        amount.val(content);
    }
    pre_content = 0;
    cart = $('.cart-item');
    for(i = 0; i < cart.length; i++) {
        item_price = cart.find('.cart-item-price')[i];
        item_amount = cart.find('.amount-detail-item')[i];
        pre_content += item_price.innerText.split(' ')[0].split('.').join('') * item_amount.value;
    }
    // pre_content_string = pre_content.toString();
    // console.log(pre_content.toString().length);
    // for(i = 0; i < pre_content_string.length/3; i++) {
    //     pre_content_string.splice(pre_content_string.length - i*3, 0, '.');
    // }
    $('#pre-price .price-row-price').text(pre_content + ' VNĐ');
    $('#final-price .price-row-price').text(pre_content + ' VNĐ');
})
