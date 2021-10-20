jQuery(document).ready(function($) {
		$('.error').css("opacity","0");
		$('.success').css("opacity","0");
		$('.error2').css("opacity","0");
		$('.success2').css("opacity","0");
		$('.error3').css("opacity","0");
		$('.success3').css("opacity","0");
	$('form').on('submit',function(){
		var isValid = true;
		if(!/^\s*[a-zA-Z,\s]+\s*$/.test($('.name').val())){
			$('.error').css("opacity","1");
			$('.name').css("border-bottom","1px solid red");
			isValid = false;
			event.preventDefault();
		}else {
			$('.success').css({"color":"green","opacity":"1"});
			$('.error').css("display","none");
			$('.name').css("border-bottom","1px solid green");
		}

		if(!/[0-9]{10,11}/.test($('.phone').val())){
			$('.error2').css("opacity","1");
			$('.phone').css("border-bottom","1px solid red");
			isValid = false;
			event.preventDefault();
		}else {
			$('.success2').css({"color":"green","opacity":"1"});
			$('.error2').css("display","none");
			$('.phone').css("border-bottom","1px solid green");
		}

		if($('.email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
			$('.error3').css("opacity","1");
			$('.email').css("border-bottom","1px solid red");
			isValid = false;
			event.preventDefault();
		}
		else {
			$('.success3').css({"color":"green","opacity":"1"});
			$('.error3').css("display","none");
			$('.email').css("border-bottom","1px solid green");
		}
		
		if(isValid) alert('Your answer has been recored');
		
	});


	
	$('.name').keyup(function(event) {
		if(!/^\s*[a-zA-Z,\s]+\s*$/.test($('.name').val())){
			$('.error').css("opacity","1");
			$('.name').css("border-bottom","1px solid red");
			$('.success').css("opacity","0");
		}else {
			$('.success').css({"color":"green","opacity":"1"});
			$('.error').css("opacity","0");
			$('.name').css("border-bottom","1px solid green");
		}
	});

	$('.phone').keyup(function(event) {
		if(!/[0-9]{10,11}/.test($('.phone').val())){
			$('.error2').css("opacity","1");
			$('.phone').css("border-bottom","1px solid red");
			$('.success2').css("opacity","0");
		}else {
			$('.success2').css({"color":"green","opacity":"1"});
			$('.error2').css("opacity","0");
			$('.phone').css("border-bottom","1px solid green");
		}
	});

	$('.email').keyup(function(event) {
		if($('.email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
			$('.error3').css("opacity","1");
			$('.email').css("border-bottom","1px solid red");
			$('.success3').css("opacity","0");
		}
		else {
			$('.success3').css({"color":"green","opacity":"1"});
			$('.error3').css("opacity","0");
			$('.email').css("border-bottom","1px solid green");
		}
	});

	$(".comment").keyup(function(event) {
		if($('.comment').val().length >= 100) alert('Text must be under 100 symbols');
		$('.count').text(100 - $('.comment').val().length);
	});

});
