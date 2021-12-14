let button_header = $('.button-header > i');
let close_header = $('.button-after');
button_header.click(function () {
	$('.menu-mobile').addClass('translate-menu');
	$('.after').removeClass('hide');
});
$('.after').click(function () {
	$('.menu-mobile').removeClass('translate-menu');
	$('.after').addClass('hide');
})

let search_mobile = $('.search-right > i');
let close_search = $('.close-search');
search_mobile.click(function () {
	if ($('.search-container').hasClass('hide')) {
		$('.search-container').removeClass('hide');
	}
	else {
		$('.search-container').addClass('hide');
	}
})
close_search.click(function(){
	if (!$('.search-container').hasClass('hide')){
		$('.search-container').addClass('hide');
	}
})

var lastScrollTop = 0;
var header_top = document.getElementById("header");
var item_header_top = document.querySelector("#header a");
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		header_top.style.background = "white";
        item_header_top.style.color = "black";
	} else {
		header_top.style.background = "none";
	}
	// lastScrollTop = scrollTop;
})