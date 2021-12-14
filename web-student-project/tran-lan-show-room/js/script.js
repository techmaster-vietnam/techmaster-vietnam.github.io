jQuery(document).ready(function($) {
	var list = [];
	//goi header.html, footer.html
	$('#header').load('header.html');
	$('#footer').load('footer.html');

	//get data
	var index = 0;
	function loadjson(){
		$.get('data.json',function(products){
			for(var i = 0; i < 6; i++){
				index ++;
				if(index >= products.length) break;
				$('#content').append(`
					<div class="col-6 col-lg-4 mb-5 ${products[index-1].class}">
					<div class="card" style="height:100%">
					<a href="details.html#${products[index-1].id}"><img src="${products[index-1].img}" class="card-img-top" alt="..."></a>
					<div class="card-body">
					<p class="card-text sortName">${products[index-1].name}</p>
					<p class="sortPrice">${processMoney(products[index-1].price)}</p> <br> <br>
					<a href="details.html#${products[index-1].id}" class="btn btn-primary muangay" style="position:absolute;bottom :25px">Mua ngay</a>
					</div>
					</div>
					</div>`);
			}
		});
	}

	loadjson();
	$('#xemthem').click(function(event) {
		loadjson();
	});


	// $('.search').focus(function(event) {
	// 	$('body').css({
	// 		"background": 'rgba(0, 0, 0, 0.4)'
	// 	});
	// });
	// $('.search').blur(function(event) {
	// 	$('body').css({
	// 		"background": 'white'
	// 	});
	// });

	$.getJSON('data.json', function(data) {
		$('.search').keyup(function(){
			let searchField = $(this).val().toLowerCase();
			if(searchField ===''  || !$('#content').text().includes(searchField))  {
				$('#results').html('');
				return;
			}

			let regex = new RegExp(searchField, "i");
			let output = `<div class="row pt-4 mx-0">`;
			var find = false;
			$.each(data, function(key, val){
				if ((val.price.search(regex) != -1) || (val.name.search(regex) != -1)) {
					find = true;
					output += `
					<div class="col-md-2 col-6 mb-4 pl-5">
					<a href="details.html#${val.id}"><img src="${val.img}" style="width:100%;"></a>
					</div>
					<div class="col-md-2 col-6">
					<p class="card-text">${val.name}</p>
					<p>${val.price}</p>
					</div>
					`
				}
			});

			output+=`</div>`;
			if(find) $('#results').html(output);
		});
	})

	var id = document.URL.slice(-2);
	$.getJSON('data.json',function(products){
		
		while(id.charAt(0) == '0') id = id.substring(1, id.length);
		var sl = localStorage.getItem(id);
		if(sl==null || isNaN(sl)) sl = 0;
		
		$('#detail').html(`
			<div class="col-7 mt-5 pt-5">
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner">
			<div class="carousel-item active">
			<img src="${products[id-1].img}" style="height:70%" class="d-block w-100" alt="...">
			</div>
			<div class="carousel-item">
			<img src="${products[id-1].img}" style="height:70%" class="d-block w-100" alt="...">
			</div>
			<div class="carousel-item">
			<img src="${products[id-1].img}" style="height:70%" class="d-block w-100" alt="...">
			</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
			</a>
			</div>
			</div>

			<div class="col-5 mt-5 pt-5">
			<p class="detail__p mb-lg-4 pb-lg-4">${products[id-1].name}</p> 
			<p class="detail__p pb-lg-4">${processMoney(products[id-1].price)}</p>
			<div class="buy mt-lg-5 mt-4">
			<span class="substract" onclick="function substract(){
				var i = parseInt($('.quantity').text(),10);
				if (i > 0) {
					i --;
					$('.quantity').text(i);
				};
			}substract()">-</span>
			<span class="quantity" >` + sl + `</span>
			<span class="plus" onclick="function plus()
			{
				var i = parseInt($('.quantity').text(),10);
				if (i < 1000) {
					i ++;
					$('.quantity').text(i);
				};
			}
			plus()">+</span>
			</div>
			<div class="addtocart text-center py-md-3 py-2 mt-lg-5 mt-4" onclick="function add(){
				localStorage.setItem(`+id+`, parseInt($('.quantity').text()));
				
				$.getJSON('data.json', function(data) {
					let count = 0;
					for(var i=0;i<data.length;i++){
						let id = data[i].id;
						while(id.charAt(0) == '0') id = id.substring(1, id.length);
						if(localStorage.getItem(id) > 0){
							count += parseInt(localStorage.getItem(id));
							
						}
					}
					$('#show').text(count);

				})
				
				
			}add()">thêm vào giỏ</div>
			<p class="detail__text mt-lg-5 mt-4">Xuất xứ: Nhật Bản <br><br> Nhà cung cấp: Denso<br><br>Số điện thoại: 0912700469<br><br>Tình trạng: Còn hàng</p>
			<span class="ttmh mt-md-5 mt-4"><a href="products.html" style="color: white">tiếp tục mua hàng</a></span>
			<span class="tt mt-md-5 mt-4"><a href="purchase.html" style="color: black">thanh toán</a></span>
			</div>
			<div class="col-12">
			<p class="detail__text2 mt-lg-5 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
			</div>

			`);
	});

	function showItem(data,id){

		let amount = localStorage.getItem(id);
		let money = calMoney(data);
		giohang+=`
		<tbody>
		<tr>
		<th scope="row"><i class="fas fa-minus-circle" style="cursor:pointer" id=`+id+` onclick="function del(){
			$('#show').text(parseInt($('#show').text())-parseInt(localStorage.getItem(id)));
			localStorage.setItem(id,0);
			$.get('data.json', function(data) {
				function calMoney(data){
					let id = data.id;
					while(id.charAt(0)=='0') id = id.substring(1,id.length);
					return data.price * localStorage.getItem(id);
				}
				function processMoney(money){
					let count = 0;
					let res = '';
					for(let i=money.length-1;i>=0;i--){
						res = money.charAt(i) + res;
						count ++;
						if(count % 3 == 0 && i !=0) res = '.' + res;
					}
					
					return res;
				}
				let tien = 0;
				for(var i=0;i<data.length;i++){
					let id = data[i].id;
					while(id.charAt(0) == '0') id = id.substring(1, id.length);
					if(localStorage.getItem(id) > 0){
						
						tien += calMoney(data[i]);
					}
				}

				$('#money').text(processMoney(tien + ''));
			});

			$('#'+id).parent().parent().parent().hide();
			
		}del()"></i></th>
		<td>`+data.name+`</td>
		<td>`+amount +`</td>
		<td>`+ processMoney(data.price+"")+`</td>
		<td>`+ processMoney(money+"") +`</td>
		</tr>
		</tbody>
		`;
		return parseInt(amount);
	}
	function calMoney(data){
		let id = data.id;
		while(id.charAt(0)=='0') id = id.substring(1,id.length);
		return data.price * localStorage.getItem(id);
	}
	function processMoney(money){
		let count = 0;
		let res = "";
		for(let i=money.length-1;i>=0;i--){
			res = money.charAt(i) + res;
			count ++;
			if(count % 3 == 0 && i !=0) res = "." + res;
		}
		
		return res;
	}
	$.get('data.json', function(data) {

		giohang = `<div class="table-responsive mb-5 pb-md-5 pb-0 text-center">
		<table class="table table-striped">
		<thead class="thead-light">
		<tr>
		<th scope="col">Xoá</th>
		<th scope="col">Sản Phẩm</th>
		<th scope="col">Số Lượng</th>
		<th scope="col">Giá</th>
		<th scope="col">Thanh Toán</th>
		</tr>
		</thead>`;
		let count = 0;
		let money = 0;
		for(var i=0;i<data.length;i++){
			let id = data[i].id;
			while(id.charAt(0) == '0') id = id.substring(1, id.length);
			if(localStorage.getItem(id) > 0){
				count += showItem(data[i],id);
				money += calMoney(data[i]);
			}
		}
		$('#show').text(count);
		giohang += `<tr>
		<th scope="col">Tổng tiền</th>
		<th scope="col"></th>
		<th scope="col"></th>
		<th scope="col"></th>
		<th scope="col" style="color:red" id='money'>`+processMoney(money+"")+`</th>
		</tr>`;
		giohang+=`</table>
		</div>`

		$('#giohang').html(giohang);


	});

	$('.tt').click(function(event) {
		if($('#show').text()==0){
			alert("Bạn chưa có sản phẩm nào trong giỏ hàng, hãy mua thêm nhé!");
			event.preventDefault();
		}
	});


	$('.mid').on( 'click', 'button', function() {
		var sortValue = $(this).attr('data-sort-value');
		$('#content').isotope({
			getSortData: {
				sortPrice: '.sortPrice parseInt',
				sortName: '.sortName',
			}
		}).isotope({ sortBy: sortValue });
	});

	$(".filter").on( 'click', '.filter-press', function() {
		let filterValue = $(this).attr('data-filter');
		$("#content").isotope({ filter: filterValue });
	})


	$('.filter-press').click(function(event) {
		$('.filter-press').css({
			outline: 'none',
			'text-decoration' : 'none'
		});
		$(this).css({
			'text-decoration' : 'underline'
		})
	});

	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 100) { 
			$('.back-to-top').fadeIn(); 
			$('.login').css({
				opacity: 0,
				transition: '.5s',
			});
		} else { 
			$('.back-to-top').fadeOut(); 
			$('.login').css({
				opacity: 1,
				transition: '.5s',
			});
		} 
	}); 

	$('.back-to-top').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600); 
		return false; 
	});

});












