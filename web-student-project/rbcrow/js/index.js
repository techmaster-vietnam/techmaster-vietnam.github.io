$(function () {
    $('.advance-search').hide();
    select_box();

    $('#expan-banner-btn').click(function () {
        $('.normal-search').hide();
        $('.advance-search').show();

        if ($('.timkiem .banner-text').height() > $('.timkiem img').height()) {
            $('.timkiem img').css('height', '100%');
        }
    })

    $('#shorten-banner-btn').click(function () {
        $('.normal-search').show();
        $('.advance-search').hide();
        $('.timkiem img').css('height', 'auto');
    })

    var listItem = $('.shop .item-feature-icon span');

    listItem.click(function () {
        window.location.href = "shop.html#other-product";
    })

    active_btn_dot_file_item('#update-manga');
    active_btn_dot_file_item('#full-manga');
    active_btn_dot_file_item('#shop');
    carousel('.categories');

    file_item_quote('#update-manga');
    file_item_quote('#full-manga');

    file_item_quote('#update-manga');
    file_item_quote('#full-manga');


    resize_dots('#update-manga');
    resize_dots('#full-manga');
    resize_dots('#shop');

    $(window).resize(function () {
        file_item_quote('#update-manga');
        file_item_quote('#full-manga');
        resize_dots('#update-manga');
        resize_dots('#full-manga');
        resize_dots('#shop');
    })
});

$('a[href*="#timkiem"]').click(function (event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});


let inputEmail = document.getElementById('email');
inputEmail.oninvalid = function (event) {
    if (inputEmail.validity.valueMissing)
        event.target.setCustomValidity('Vui lòng nhập địa chỉ email.');
    else if (inputEmail.validity.typeMismatch || inputEmail.validity.patternMismatch)
        event.target.setCustomValidity('Vui lòng nhập đúng địa chỉ email.');
    else event.target.setCustomValidity('');
}

let nameManga = document.getElementById('name-manga');
nameManga.oninvalid = function (e) {
    if (nameManga.validity.valueMissing) e.target.setCustomValidity('Vui lòng nhập Tên truyện.');
    else e.target.setCustomValidity('');
}

function select_box() {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
}

function carousel(className) {
    $(className).slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 690,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}