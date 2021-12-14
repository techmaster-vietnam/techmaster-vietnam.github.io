const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/25b87e86/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint) 
.then(obj => obj.json())
.then(data => infos.push(...data));

$(function() { 
	var url_string = window.location.href;
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	for (var i=0; i<infos.length; i++) {
		if (infos[i].id == id) {
			document.querySelector('.big-img img').src = infos[i].img;
			document.querySelector('.big-img img').alt = infos[i].name;
			var imgs = document.querySelectorAll('.img-card img');
			imgs.forEach(function(img) {
				img.src = infos[i].img;
				img.alt = infos[i].name;
			});
			document.querySelector('#description').innerHTML = infos[i].description;
			document.querySelector('.infos .price').innerHTML = infos[i].price + " VND";
			document.querySelector('.infos .name-icecream').innerHTML = infos[i].name;
			document.querySelector('.infos .intro').innerHTML = infos[i].sumary;
			document.querySelector('.btn-compare').dataset.id = infos[i].id;
			document.querySelector('.btn-cart').dataset.id = infos[i].id;
			document.querySelector('.infos .star-grp').innerHTML = createStarGrp(infos[i].rating);
			getRelatedProduct(infos[i].related);
			getReview(infos[i].review);
			break;
		}
	}
});

function getRelatedProduct(arr) {
	if (arr != undefined) {
		var relatedProducts = document.querySelector('.related-products');
		arr.forEach(function(id) {
			var item = findItem(id);
			relatedProducts.innerHTML += '<div class="related-item">' +
			'<img src="' +item.img+ '" alt="' + item.name + '" class="img-responsive">' +
			'<div class="info-icecream text-center"><div class="star-grp">' + createStarGrp(item.rating) + '</div>' +
			'<div class="name-icecream">' + item.name + '</div>' +
			'<div class="price">' + item .price + ' VND </div></div>' +
			'<div class="hover-ice"><div class="hover-ice-div">' +
			'<div class="btn-grp">' +
			'<a href="detail_product.html?id=' + item.id + '"><button class="btn-icon"><i class="fas fa-eye" title="See detail"></i></button></a>' +
			' <button data-id=' + item.id + ' onclick="addToCart(this, 1)" class="btn-icon"><i class="fas fa-shopping-cart" title="Add to card" onclick=""></i></button>' +
			' <button onclick="openCompare(this)" data-id=' + item.id + ' class="btn-icon"><i class="fas fa-sliders-h" title="Compare product"></i></button></div></div></div></div>';		
		});
	}
}

function getReview(arr) {
	var reviews = document.querySelector('.reviews');
	if (arr != undefined) {
		arr.forEach(function(user) {
			reviews.innerHTML += '<div class="review-item">' +
			'<div class="avatar"><img src="images/user.png" alt="avatar" class="img-responsive"> </div>' +
			'<div class="review-space"></div>' +
			'<div class="review-text">' +
			'<div class="name-reviewer">' + user.user + '</div>' +
			'<div class="stars"><div class="star-grp">' + createStarGrp(user.rating) +'</div></div>' +
			'<div class="review-content">' + user.comment + '</div></div></div>';
		});
	} else {
		reviews.innerHTML = '<div class="alert alert-success">There are no review. Let be the first person!</div>';
	}
}

function addProduct(button) {
	var input = document.querySelector('#quantity');
	if (input.value == 0) {
		alert("Please choose quantity before add to cart!");
	} else {
		addToCart(button, Number(input.value));
	}
}

function star(pos) {
	console.log(pos);
	var stars = document.querySelectorAll('.star-rating > i');
	for (var i=0; i<pos; i++) {
		console.log(stars[i])
		stars[i].classList.remove('far');
		stars[i].classList.add('fas');
	}
	for (var i=pos; i<stars.length; i++) {
		stars[i].classList.remove('fas');
		stars[i].classList.add('far');
	}
}

function clickimg(img) {
	console.log("swap img")
	var tmp = document.querySelector('.big-img > img').src;
	document.querySelector('.big-img > img').src = img.querySelector('img').src;
	img.querySelector('img').src = tmp;
}