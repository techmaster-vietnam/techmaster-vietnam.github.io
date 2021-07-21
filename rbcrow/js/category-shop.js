$(function () {
    let checkmarks = $('#category-check input');
    console.log($(checkmarks[0]).prop('checked'))
    checkmarks.click(function () {
        if ($(this).closest('.filter-box').text().includes('Tất cả')) {
            if ($(this).prop('checked') == true) checkmarks.prop('checked', true);
            else checkmarks.prop('checked', false);
        }
    })

    $('.filter-categories-btn i').click(function () {
        $('.filter-categories').toggle(100);
        $('.filter-categories-btn .cover-screen-filter').toggle(10);
    })

    $('.cover-screen-filter').mousedown(function () {
        $('.filter-categories').toggle(100);
        $('.filter-categories-btn .cover-screen-filter').toggle(10);
    });

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

    active_btn_dot_file_item('#shop');
    resize_dots('#shop');

    $(window).resize(function () {
        file_item_quote('#shop');
        resize_dots('#shop');
    })

    tab_filter('#category-check');
})





function tab_filter(idFilter) {
    let element = idFilter + ' i:last-child';
    let eleObj = $(element);
    eleObj.click(function () {
        if (eleObj.hasClass('fa-angle-up')) {
            eleObj.removeClass('fa-angle-up');
            eleObj.addClass('fa-angle-down');
            eleObj.closest('.filter-category').find('.filter-content').toggle(500);
        }
        else {
            eleObj.removeClass('fa-angle-down');
            eleObj.addClass('fa-angle-up');
            eleObj.closest('.filter-category').find('.filter-content').toggle(500);
        }
    })
}

function cart_Shop(numberItem) {
    if(numberItem === 0) {
        $('#btn-header-cart i').addClass('dp-none-after');
    }
    else {
        $('#btn-header-cart i').removeClass('dp-none-after');
        $('#btn-header-cart i').attr('data-content', numberItem);
    }
}