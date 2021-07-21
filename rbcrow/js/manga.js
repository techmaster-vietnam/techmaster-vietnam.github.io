$(function() {
    active_btn_dot_file_item('#manga');
    file_item_quote('#manga');
    file_item_quote('#manga');
    resize_dots('#manga');

    $(window).resize(function () {
        file_item_quote('#manga');
        resize_dots('#manga');
    })
})