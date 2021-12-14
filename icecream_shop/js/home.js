const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/438afc40/icecream_shop/json/personal.json";
var personal_info = {};
fetch(endpoint) 
.then(obj => obj.json())
.then(data => personal_info = data);

window.onload = function() {
	$('#name').text(personal_info.name);
	$('#email').text(personal_info.email);
	$('#phone').text(personal_info.phone);
	$('#address').text( personal_info.address);
	var history = personal_info.history;
	history.forEach(function(item, i) {
		$('.table-history').append('<tr>' +
			'<td>' + item.date + '</td>' +
			'<td>' + item.total + ' VND</td>' +
			'<td>' + item.state + '</td>' +
			'<td title="See detail"><button class="see-btn"><i class="fas fa-eye" onclick="showHistory(' + i + ')"></i></button></td>' +
			'</tr>');
	})
}

function showInfo() {
	$('#name_input').val($('#name').text());
	$('#email_input').val($('#email').text());
	$('#phone_input').val($('#phone').text());
	$('#address_input').val($('#address').text());
	$('#myinfo').modal();
}

function showHistory(i) {
	var products = personal_info.history[i].detail;
	var order = document.querySelector('.products .left'); 
	var cost = document.querySelector('.products .right'); 
	var leftHtml = '';
	var rightHtml = '';
	products.forEach(function(product) {
		leftHtml += '<p>' + product.name + ' x ' + product.count + '</p>';
		rightHtml += '<p>' +product.total+ ' VND</p>';
	});
	order.innerHTML = leftHtml;
	cost.innerHTML = rightHtml;
	$('#total').text(personal_info.history[i].total + " VND");
	$('#subtotal').text(personal_info.history[i].subtotal + " VND");
	$('#ship-fee').text(personal_info.history[i].shipping + " VND");
	$('#bill').modal();
}