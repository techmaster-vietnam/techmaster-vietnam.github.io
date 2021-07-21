$(window).on("load", function () {
    $("body").css("overflow", "auto");
    $(".loading").fadeOut(600);
});

$(document).ready(function () {
    $(".nav__main-menu-item:nth-child(2) a").addClass("nav__main--location");
    $(".nav").css({
        "position": "relative",
        "background-color": "#202020"
    });

    $(".watch__option-list").slideUp(0);

    $(".watch__option--btn").click(function () {
        $(this).next().slideToggle(400);
        $(this).toggleClass("icon--rotate");
    });

    $("#filter").click(function () {
        $("#filter-options").toggleClass("watch__filter-options--show");
    });

    $(".watch__filter-options-link").click(function () {
        let option = $(this).text();
        $("#filter-content").text(option);

        $(".watch__filter-options-link").removeClass("active");
        $(this).addClass("active");
    });

    $(".watch__option-size-number").click(function () {
        $(this).toggleClass("watch__option-size--chose");
    });

    $(".heart").click(function () {
        $(this).toggleClass("fas").toggleClass("far");

    });

    // Notification
    $(".watch__product-icon .heart").on("click", function () {
        if ($(this).hasClass("fas")) {
            $("#like").css({ "visibility": "visible", "opacity": "1" });
            setTimeout(function () {
                $("#like").css({ "visibility": "hidden", "opacity": "0" });
            }, 1200);
        } else {
            $("#dislike").css({ "visibility": "visible", "opacity": "1" });
            setTimeout(function () {
                $("#dislike").css({ "visibility": "hidden", "opacity": "0" });
            }, 1200);
        }
    });

    // Isotope
    $(".watch__main").isotope({
        itemSlector: ".all",
        layoutMode: 'fitRows',
        getSortData: {
            number: ".number parseFloat"
        }
    });

    // Isotope - filter
    $(".watch__option-list-items").click(function () {
        let type = $(this).attr("data-filter");

        $(".watch__main").isotope({
            filter: type
        });
    });

    // Isotope - sort
    $("#sort").click(function () {
        let value = $(this).attr("data-sort");

        $(".watch__main").isotope({
            sortBy: value,
            sortAscending: true
        });
    });

    // Isotope - sort-reverse
    $("#sort-reverse").click(function () {
        let value = $(this).attr("data-sort");

        $(".watch__main").isotope({
            sortBy: value,
            sortAscending: false
        });
    });

    // Isotope - default
    $("#default").click(function () {
        let type = $(this).attr("data-filter");

        $(".watch__option-size-number").removeClass("watch__option-size--chose");

        $(".watch__main").isotope({
            filter: type,
            sortBy: 'original-order',
            sortAscending: true
        });
    });

    // Isotope - filter--size
    $(".watch__option-size-number").click(function () {
        let str = "";
        let type;
        let arr = $(".watch__option-size-number");

        arr.each(function () {
            if ($(this).hasClass("watch__option-size--chose")) {
                let x = $(this).attr("data-size");
                str += x + ",";
            }
        })

        type = str.slice(0, -1);

        $(".watch__main").isotope({
            filter: type
        });
    });

    // Pagination
    $(".page__number-button").click(function () {
        $(".page__number-button ").removeClass("page--active");
        $(this).addClass("page--active");
    });

    $("#page-prev").click(function () {
        let prev = $(".page--active").prev();

        if (prev.length == 0) {
            return
        } else {
            $(".page--active").removeClass("page--active").prev().addClass("page--active");
        }
    });

    $("#page-next").click(function () {
        let next = $(".page--active").next();

        if (next.length == 0) {
            return
        } else {
            $(".page--active").removeClass("page--active").next().addClass("page--active");
        }
    });
});