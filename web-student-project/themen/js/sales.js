$(document).ready(function (e) {
	$('.has-sub').click(function () {
		$(this).toggleClass('tap');
	});
});



//  filter




$(function () {

	// Filter
	$("li a[cs-filter]").click(function () {
		var t = $(this).attr('cs-filter');
		$("li a[cs-filter]").removeClass('btn-active');
		$(this).addClass('btn-active');
		if (t == "*") {
			$("div.items[cs-category]").show("fast");
		} else {
			$.each($("div.items[cs-category]"), function (index, value) {
				if (!$(this).attr('cs-category').match(new RegExp(t))) {
					$(this).hide("fast");
				} else {
					$(this).show("fast");
				}
			});
		}
	});
});


// component alert

$(document).ready(function () {

	$(".componentalert").hide()
	$(".cart_3").click(function () {
		$(".componentalert").toggle();
	});
})

$(document).ready(function () {


	$(".closecart").click(function () {
		$(".componentalert").hide();
	});
})


// vest công sở

$(document).ready(function () {

	$(".vestnamsale").click(function () {
		$(".spkhuyenmai").show();
	});

	$(".vestnamsale").click(function () {
		$(".spvestcongso").hide();
	});

	$(".vestnamsale").click(function () {
		$(".spgiaynangcc").hide();
	});

	$(".vestnamsale").click(function () {
		$(".spcaravat").hide();
	});



	$(".giaysale").click(function () {
		$(".spkhuyenmai").show();
	});

	$(".giaysale").click(function () {
		$(".spvestcongso").hide();
	});

	$(".giaysale").click(function () {
		$(".spgiaynangcc").hide();
	});

	$(".giaysale").click(function () {
		$(".spcaravat").hide();
	});




	$(".phukiensale").click(function () {
		$(".spkhuyenmai").show();
	});

	$(".phukiensale").click(function () {
		$(".spvestcongso").hide();
	});

	$(".phukiensale").click(function () {
		$(".spgiaynangcc").hide();
	});

	$(".phukiensale").click(function () {
		$(".spcaravat").hide();
	});




	$(".vestcongsosale").click(function () {
		$(".spkhuyenmai").hide();
	});

	$(".vestcongsosale").click(function () {
		$(".spgiaynangcc").hide();
	});

	$(".vestcongsosale").click(function () {
		$(".spvestcongso").show();
	});

	$(".vestcongsosale").click(function () {
		$(".spcaravat").hide();
	});



	$(".caravatsale").click(function () {
		$(".spkhuyenmai").hide();
	});

	$(".caravatsale").click(function () {
		$(".spgiaynangcc").hide();
	});

	$(".caravatsale").click(function () {
		$(".spvestcongso").hide();
	});

	$(".caravatsale").click(function () {
		$(".spcaravat").show();
	});



	$(".vestnam").click(function () {
		$(".spsuits").show();
	});

	$(".vestnam").click(function () {
		$(".spvestcongso").hide();
	});

	$(".vestcongso").click(function () {
		$(".spvestcongso").show();
	});



	$(".vestcongso").click(function () {
		$(".spsuits").hide();
	});

	$(".giay").click(function () {
		$(".spgiaytay").show();
	});

	$(".giay").click(function () {
		$(".spgiaynangcc").hide();
	});

	$(".giaynangcc").click(function () {
		$(".spgiaynangcc").show();
	});

	$(".giaynangcc").click(function () {
		$(".spgiaytay").hide();
	});

	$(".giaynangccsale").click(function () {
		$(".spgiaynangcc").show();
	});

	$(".giaynangccsale").click(function () {
		$(".spvestcongso").hide();
	});

	$(".giaynangccsale").click(function () {
		$(".spkhuyenmai").hide();
	});

	$(".giaynangccsale").click(function () {
		$(".spcaravat").hide();
	});


	$(".phukien").click(function () {
		$(".spphukien").show();
	});

	$(".phukien").click(function () {
		$(".spcaravat").hide();
	});

	$(".caravat").click(function () {
		$(".spcaravat").show();
	});

	$(".caravat").click(function () {
		$(".spphukien").hide();
	});
})
