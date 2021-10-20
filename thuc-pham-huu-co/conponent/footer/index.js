$('.link-item > .icon-1').click(() => {
	if($('.link-item-sub1').hasClass('hide')){
		$('.link-item-sub1').removeClass('hide');
		$('.icon-1').css('transform',"rotate(180deg)");
		$('.icon-1').css('transition',"0.5s");
	}else{
		$('.link-item-sub1').addClass('hide');
		$('.icon-1').css('transform',"rotate(360deg)");
		$('.icon-1').css('transition',"0.5s");
	}
});


$('.link-item > .icon-2').click(() => {
	if($('.link-item-sub2').hasClass('hide')){
		$('.link-item-sub2').removeClass('hide');
		$('.icon-2').css('transform',"rotate(180deg)");
		$('.icon-2').css('transition',"0.5s");
	}else{
		$('.link-item-sub2').addClass('hide');
		$('.icon-2').css('transform',"rotate(360deg)");
		$('.icon-2').css('transition',"0.5s");
	}
});

$('.mobile-icon1').click(()=>{
	if($('.sub-menu-mobile1').hasClass('hide')){
		$('.text-mobile-item1').css('color','black');
		$('.sub-menu-mobile1').removeClass('hide');
		$('.mobile-icon1').css('transform',"rotate(180deg)");
		$('.mobile-icon1').css('transition',"0.5s");
	}else{
		$('.text-mobile-item1').css('color','rgba(102,102,102,0.85)');
		$('.sub-menu-mobile1').addClass('hide');
		$('.mobile-icon1').css('transform',"rotate(360deg)");
		$('.mobile-icon1').css('transition',"0.5s");
	}
})

$('.mobile-icon2').click(()=>{
	if($('.sub-menu-mobile2').hasClass('hide')){
		$('.text-mobile-item2').css('color','black');
		$('.sub-menu-mobile2').removeClass('hide');
		$('.mobile-icon2').css('transform',"rotate(180deg)");
		$('.mobile-icon2').css('transition',"0.5s");
	}else{
		$('.text-mobile-item2').css('color','rgba(102,102,102,0.85)');
		$('.sub-menu-mobile2').addClass('hide');
		$('.mobile-icon2').css('transform',"rotate(360deg)");
		$('.mobile-icon2').css('transition',"0.5s");
	}
})