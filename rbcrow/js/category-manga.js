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

    active_btn_dot_file_item('#manga');
    file_item_quote('#manga');
    resize_dots('#manga');

    $(window).resize(function () {
        file_item_quote('#manga');
        resize_dots('#manga');
    })

    tab_filter('#category-check');
    tab_filter('#status-check');
    tab_filter('#country-check');
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