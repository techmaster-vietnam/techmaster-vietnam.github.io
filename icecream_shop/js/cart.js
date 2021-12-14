const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/3342a96d/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint) 
.then(obj => obj.json())
.then(data => infos.push(...data));

$(function() { 
	products = document.querySelector('.products');
	var html = products.innerHTML;
	info_customer.cart.forEach(function(product) {
		html += '<li class="product" data-id="' + product.id + '"> <div class="col info-product">' +
		'<div class="img-product"><img src="' + product.img + '" alt="' + product.name + '" class="img-responsive"></div>' +
		'<div class="info-detail">' + product.name + '</div></div>' +
		'<div class="col col-price"><span class="price">' + (product.total/product.count) + '</span> VND </div>' + 
		'<div class="col"><input type="number" class="form-control" name="quantity" value="' + product.count + '" min="0" title="Quantity" onChange="changeCount(this)"></div>' +
		'<div class="col"><span class="total">' + product.total + '</span> VND</div>' +
		'<div class="remove"><button onclick="removeProduct(this)" class="btn btn-remove"><i class="fas fa-times"></i></button></div></li>';
	});
	products.innerHTML = html;
	document.getElementById('subtotal').innerHTML = info_customer.subtotal;
	document.getElementById('total').innerHTML = info_customer.total;
});

function removeProduct(button) {
	var id = button.parentNode.parentNode.dataset.id;
	var total = info_customer.total;
	info_customer.cart.forEach(function(product, i) {
		if (product.id == id) {
			total -= product.total;
			var delete_item = document.querySelector(`li[data-id="${id}"]`);
			delete_item.parentNode.removeChild(delete_item);
			info_customer.cart.splice(i, 1);
			info_customer.subtotal = total;
			info_customer.total = total;
			document.getElementById('subtotal').innerHTML = total;
			document.getElementById('total').innerHTML = total;
			DB.setData("info_customer", info_customer);
			document.querySelector('.count-item').innerHTML = info_customer.cart.length;
		}
	});
}

function changeCount(input) {
	var id = input.parentNode.parentNode.dataset.id;
	var total = info_customer.total;
	info_customer.cart.forEach(function(product, i) {
		if (product.id == id) {
			total -= product.total;
			if (input.value != 0) {
				product.total = (product.total/product.count) * input.value;
				total += product.total;
				console.log(total);
				product.count = input.value;
				input.parentNode.parentNode.querySelector('.total').innerHTML = product.total;
			} else {
				removeProduct(input.parentNode.parentNode.querySelector('.btn-remove'));
				return;
			}
			document.getElementById('subtotal').innerHTML = total;
			document.getElementById('total').innerHTML = total;
			info_customer.subtotal = total;
			info_customer.total = total;
			DB.setData("info_customer", info_customer);
		}
	});
}
