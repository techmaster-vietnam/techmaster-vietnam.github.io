$(function() { 
	document.getElementById('subtotal').innerHTML = info_customer.subtotal + " VND";
	document.getElementById('total').innerHTML = info_customer.total + " VND";
	var order = document.querySelector('.products .left'); 
	var cost = document.querySelector('.products .right'); 
	var leftHtml = '';
	var rightHtml = '';
	info_customer.cart.forEach(function(product) {
		leftHtml += '<p>' + product.name + ' x ' + product.count + '</p>';
		rightHtml += '<p>' +product.total+ ' VND</p>';
	});
	order.innerHTML = leftHtml;
	cost.innerHTML = rightHtml;
});