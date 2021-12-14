let data_detail = JSON.parse(localStorage.getItem('detail-data')) || default_data;
let addProducts = $('#add-products')

addProducts.append(`
<div class="product">
<div class="product-image">
    <img src="${data_detail.imgs.big[0]}">
</div>
<div class="product-details">
    <div class="product-title">${data_detail.name}</div>
    <p class="product-description">Color:${data_detail.description.color}</p>
    <p class="product-description">Size:${data_detail.description.size}</p>
</div>
<div class="product-price price-size">${data_detail.price}</div>
<div class="product-quantity">
    <input type="number" value="1" min="1">
</div>
<div class="product-removal">
    <button class="remove-product">
        <svg width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2084 5.83366C10.2084 4.22283 11.5143 2.91699 13.1251 2.91699H21.8751C23.4859 2.91699 24.7917 4.22283 24.7917 5.83366V8.75033H27.6934C27.7024 8.75024 27.7114 8.75024 27.7205 8.75033H30.6251C31.4305 8.75033 32.0834 9.40324 32.0834 10.2087C32.0834 11.0141 31.4305 11.667 30.6251 11.667H29.0663L27.8015 29.3748C27.6924 30.9011 26.4224 32.0837 24.8922 32.0837H10.108C8.57777 32.0837 7.30773 30.9011 7.19871 29.3748L5.93387 11.667H4.37508C3.56967 11.667 2.91675 11.0141 2.91675 10.2087C2.91675 9.40324 3.56967 8.75033 4.37508 8.75033H7.27971C7.28876 8.75024 7.29779 8.75024 7.3068 8.75033H10.2084V5.83366ZM13.1251 8.75033H21.8751V5.83366H13.1251V8.75033ZM8.85796 11.667L10.108 29.167H24.8922L26.1422 11.667H8.85796Z" fill="#0D0D0D"/>
        </svg>
    </button>
</div>
<div class="product-line-price price-size">25.98</div>
</div>
`)




/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change(function() {
    updateQuantity(this);
});

$('.product-removal button').click(function() {
    removeItem(this);
});


/* Recalculate cart */
function recalculateCart() {
    var subtotal = 0;

    /* Sum up row totals */
    $('.product').each(function() {
        subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;

    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if (total == 0) {
            $('.checkout').fadeOut(fadeTime);
        } else {
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });
}


/* Update quantity */
function updateQuantity(quantityInput) {
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Update line price display and recalc cart totals */
    productRow.children('.product-line-price').each(function() {
        $(this).fadeOut(fadeTime, function() {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}


/* Remove item from cart */
function removeItem(removeButton) {
    /* Remove row from DOM and recalc cart total */
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
    });
}