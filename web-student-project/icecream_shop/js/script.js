window.addEventListener('scroll', scrollPage);
var nav = document.querySelector('nav');
var menu_content = document.querySelector('.menu-content');
var menu2 = document.querySelector('.menu2');
var shopping_cart = document.querySelector('.shopping-cart');

var DB = {
	getData: function(name) {
		var data;
		if (typeof(Storage) !== "undefined") {
			try {
				data = JSON.parse(localStorage.getItem(name)) || {};
			} catch(error) {
				data = {};
			}
		} else {
			data = {};
			alert('Sorry! No Web Storage support..');
		}
		return data;
	},

	setData: function(name, data) {
		localStorage.setItem(name, JSON.stringify(data));
	}
}

var info_customer = DB.getData("info_customer");

$(function() { 
	info_customer.cart = info_customer.cart || [];
	info_customer.compare = info_customer.compare || [];
	info_customer.total = info_customer.total || 0;
	info_customer.subtotal = info_customer.subtotal || 0;
	document.querySelector('.count-item').innerHTML = info_customer.cart.length;
});

function scrollPage(e) {
	var last_menu_item = document.querySelector('#last-menu-item');
	if ((window.scrollY - menu_content.clientHeight) > nav.offsetTop) {
		last_menu_item.classList.add('dropdown');
		last_menu_item.innerHTML = '<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
		'<i class="fas fa-user-circle"></i> <span class="caret"></span>' + 
		'</a> <ul class="dropdown-menu"> '+
		'<li><a href="#signup" data-toggle="modal" data-target=".log-sign">Login</a></li>' + 
		'<li><a href="#signup" data-toggle="modal" data-target=".log-sign">Sign up</a></li>' + 
		'</ul>';		
		menu2.classList.add('container-fluid');
		nav.classList.add('container', 'fixed-navbar');
		shopping_cart.style.visibility = 'visible';
		shopping_cart.style.opacity = 1;
	} else {
		last_menu_item.classList.remove('dropdown');
		last_menu_item.innerHTML = '<a href="cart.html"><i class="fas fa-shopping-cart"></i></a>';		
		menu2.classList.remove('container-fluid');
		nav.classList.remove('container','fixed-navbar');
		shopping_cart.style.visibility = "hidden";
		shopping_cart.style.opacity = 0;
	}
}

function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}

function getList(infos) {
	var list_icecreams = document.querySelector('.list-icecreams');
	var html = '';
	infos.forEach(function(info) {
		html += '<div class="col-md-4 col-sm-6">' + 
		'<div class="thumbnail">' +
		createTag(info.tag, info.discount) +
		'<img src="' + info.img + '" alt="' + info.name + '" class="img-responsive">' +
		'<div class="info-icecream text-center">' +
		'<div class="star-grp">' + createStarGrp(info.rating) + '</div>' +
		'<div class="name-icecream">' + info.name +  '</div>' +
		'<div class="price">' + info.price + ' VND </div>' +
		'</div> <div class="hover-ice"><div class="hover-ice-div">' + 
		'<div class="btn-grp">' + 
		'<a href="detail_product.html?id=' + info.id + '"><button class="btn-icon"><i class="fas fa-eye" title="See detail"></i></button></a>' + 
		' <button class="btn-icon" data-id="' + info.id + '" onclick="addToCart(this, 1)"><i class="fas fa-shopping-cart" title="Add to card"></i></button>' +
		' <button onclick="openCompare(this)" data-id=' + info.id + ' class="btn-icon"><i class="fas fa-sliders-h" title="Compare product"></i> </button></div></div></div></div></div>';
	})
	list_icecreams.innerHTML = html;
}

function createStarGrp (nums) {
	var darks = Math.floor(nums);
	var half = Math.round(nums%darks);
	var empty = 5 - darks - half;
	var result = '';
	for (var i = 0; i<darks; i++) {
		result += '<i class="fas fa-star"></i> ';
	}
	for (var i = 0; i<half; i++) {
		result += '<i class="fas fa-star-half-alt"></i> ';
	}
	for (var i = 0; i<empty; i++) {
		result += '<i class="far fa-star"></i> ';
	}
	return result;
}

function createTag(tag, discount) {
	var result = '';
	if (tag != undefined) {
		result = tag;
	}
	if (discount != undefined) {
		result += ' -' + discount + '%';
	}
	if (result != '') {
		result = '<div class="new-tag"> ' + result + ' </div>';
	}
	return result;
}

function addToCart(button, count) {
	var flag = false;
	for (var i=0; i<info_customer.cart.length; i++) {
		if (info_customer.cart[i].id == button.dataset.id) {		
			info_customer.total = info_customer.total + (info_customer.cart[i].total / info_customer.cart[i].count)*count;
			info_customer.cart[i].total = (info_customer.cart[i].total / info_customer.cart[i].count)*count + info_customer.cart[i].total;
			info_customer.subtotal = info_customer.total;
			info_customer.cart[i].count = info_customer.cart[i].count + count;	
			flag = true;
			break;
		}
	}
	if (flag == false) {
		var item = findItem(button.dataset.id);
		var product = {
			"id": item.id,
			"img": item.img,
			"name": item.name,
			"count": count,
			"total": item.price*count
		}
		info_customer.cart.push(product);
		info_customer.total = info_customer.total + product.total;
		info_customer.subtotal = info_customer.total;
		document.querySelector('.count-item').innerHTML = info_customer.cart.length;
	}
	DB.setData("info_customer", info_customer);
	alert('Successfully add to cart!');
}

function addToCompareTable(button) {
	var id = button.dataset.id;
	for (var i=0; i<info_customer.compare.length; i++) {
		if (info_customer.compare[i] == id) {
			return;
		}
	}
	info_customer.compare.push(id);
	DB.setData("info_customer", info_customer);
}

function findItem(id) {
	for (var i=0; i<infos.length; i++) {
		if (infos[i].id == id) return infos[i];
	}
}

function openCompare(button) {
	addToCompareTable(button);
	createCompareTable();
	document.getElementById("compare-table").style.display = "block";
}

function closeCompare() {
	document.getElementById("compare-table").style.display = "none";
}

function removeCompare(button) {
	var id = button.dataset.id;
	for (var i=0; i<info_customer.compare.length; i++) {
		if (info_customer.compare[i] == id) {
			info_customer.compare.splice(i, 1);
			break;
		}
	}
	DB.setData("info_customer", info_customer);
	createCompareTable();
	document.getElementById("compare-table").style.display = "block";
}

function createCompareTable() {
	var trs = document.querySelectorAll('.compare-tr');
	trs[0].innerHTML = '<td></td>';
	trs[1].innerHTML = '<td></td>';
	trs[2].innerHTML = '<td>Sumary</td>';
	trs[3].innerHTML = '<td>Price</td>';
	trs[4].innerHTML = '<td>Rating</td>';
	trs[5].innerHTML = '<td></td>';
	info_customer.compare.forEach(function(compare_item) {
		var tmp = findItem(compare_item);
		trs[0].innerHTML += '<td><button class="btn-delete" onclick="removeCompare(this)" data-id="' + tmp.id + '"><i class="fas fa-trash-alt"></i></button></td>';
		trs[1].innerHTML += '<td><img src="' + tmp.img + '" alt="' + tmp.name + '"></td>';
		trs[2].innerHTML += '<td>' + tmp.sumary + '</td>';
		trs[3].innerHTML += '<td>' + tmp.price + ' VND</td>';
		trs[4].innerHTML += '<td><div class="star-grp">' + createStarGrp(tmp.rating) + '</div></td>';
		trs[5].innerHTML += '<td><button data-id="' + tmp.id + '" class="btn btn-buy" onclick="addToCart(this, 1)">BUY</button></td>';
	});
}

$('.input').blur(function() {
	var $this = $(this);
	if ($this.val())
		$this.addClass('used');
	else
		$this.removeClass('used');
});

$('#tab1').on('click' , function(){
	$('#tab1').addClass('login-shadow');
	$('#tab2').removeClass('signup-shadow');
});

$('#tab2').on('click' , function(){
	$('#tab2').addClass('signup-shadow');
	$('#tab1').removeClass('login-shadow');
});

const endpoint3 = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/25b87e86/icecream_shop/json/icecreams.json";
var ices = [];
fetch(endpoint3) 
.then(obj => obj.json())
.then(data => ices.push(...data));

let input = document.getElementById('search');
let suggestion = document.querySelector('.suggestion');

input.addEventListener('change', displayInfo);
input.addEventListener('keyup', displayInfo);

function matchInfo(findContent) {
	let regex = new RegExp(findContent,'gi');
	let result = ices.filter(info => info.name.match(regex));
	return result;
}

function displayInfo() {
	let results = matchInfo(this.value);
	let html = '';
	if (results.length != 0 && input.value != '') {
		results.forEach(result => {
			html += '<li><a href="detail_product.html?id='+result.id+'" class="sug-item"><div class="img-search"><img class="img-responsive" src="'+result.img+'"/></div><div class="name-item">'+result.name+'</div></div></a></li>';
		});
	} else {
		if (results.length == 0) {
			html += '<li class="no-result"><a href="shop.html">No result! Click here to see more products</a></li>';
		}
	}
	suggestion.innerHTML = html;
}

