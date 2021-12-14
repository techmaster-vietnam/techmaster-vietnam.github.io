function active_btn_dot_file_item(nameFileItem) {
    let name_list = nameFileItem + ' .btn-dot';
    let name_list_file = nameFileItem + ' .file-item';
    let list = $(name_list);
    let list_file = $(name_list_file);
    list.click(function () {
        let ele_list = $(this);
        let pre_active_dots = nameFileItem + ' .active-dots';
        let num = $(pre_active_dots).text();

        list.removeClass('active-dots');

        if (ele_list.hasClass('number-dot')) {
            ele_list.addClass('active-dots');
        }
        else {
            if (ele_list.text() === '«') {
                var filter = '.number-dot:first';
            }
            else if (ele_list.text() === '»') {
                var filter = '.number-dot:last';
            }
            else if (ele_list.text() === '‹') {
                var filter = '.number-dot:eq(' + (num - 2) + ')';
            }
            else if (ele_list.text() === '›') {
                var filter = '.number-dot:eq(' + (num) + ')';
            }
            list.filter(filter).addClass('active-dots');
        }

        list_file.toggleClass('dp-none');

        file_item_quote(nameFileItem);
        if ($(window).width() < 450) {
            resize_dots(nameFileItem);
        }

        if (list.filter('.number-dot:first').hasClass('active-dots')) {
            list.filter('.pre-dot').addClass('dp-none');
            list.filter('.number-dot:first').css('margin-left', '74px');
        }
        else {
            list.filter('.pre-dot').removeClass('dp-none');
            list.filter('.number-dot:first').css('margin-left', '0px')
        }

        if (list.filter('.number-dot:last').hasClass('active-dots')) {
            list.filter('.next-dot').addClass('dp-none');
            list.filter('.number-dot:last').css('margin-right', '86px');
        }
        else {
            list.filter('.next-dot').removeClass('dp-none');
            list.filter('.number-dot:last').css('margin-right', '12px');
        }
    })
};

function resize_dots(nameFileItem) {
    let dotNum = nameFileItem + ' .number-dot';
    let activeDot = nameFileItem + ' .active-dots';
    if ($(window).width() < 450) {
        $(dotNum).addClass('dp-none');
        $(activeDot).removeClass('dp-none');
        if ($(activeDot).text() == 1) {
            $(dotNum).filter('.number-dot:lt(3)').removeClass('dp-none');
        }
        else if ($(activeDot).text() == $(dotNum).length) {
            $(dotNum).filter('.number-dot:gt(' + ($(activeDot).text() - 4) + ')').removeClass('dp-none');
        }
        else {
            $(dotNum).filter('.number-dot:eq(' + ($(activeDot).text() - 2) + ')').removeClass('dp-none');
            $(dotNum).filter('.number-dot:eq(' + ($(activeDot).text()) + ')').removeClass('dp-none');
        }
    }
    else {
        $(dotNum).removeClass('dp-none');
    }
}

function file_item_quote(nameFileItem) {
    let item = nameFileItem + ' .file-item .quote';
    let item_description = nameFileItem + ' .file-item .quote-excerpt';
    let listItem = $(item);
    if ($(window).width() <= 500) {
        $(item_description).addClass('dp-none');
    }
    else {
        $(item_description).removeClass('dp-none');
    }

    for (i = 0; i < listItem.length; i++) {
        if ($(listItem[i]).offset().left + $(listItem[i]).outerWidth() > $(window).width()) {
            $(listItem[i]).addClass('quote-left');
            console.log('activated-1');
        }
        if ($(listItem[i]).offset().left < 0) {
            $(listItem[i]).removeClass('quote-left');
        }
    }
};

