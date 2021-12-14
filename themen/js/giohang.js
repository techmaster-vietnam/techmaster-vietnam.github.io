// owl caruosel

$(document).ready(function () {
    //default settings:
    autoplay: false
    autoplayTimeout: 5000
    autoplayHoverPause: false




    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,

        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            300: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            700: {
                items: 3,
                nav: true
            },
            800: {
                items: 3,
                nav: true
            },
            900: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [3000]);
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay');
    })




    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:true
    //         },
    //         600:{
    //             items:3,
    //             nav:false
    //         },
    //         1000:{
    //             items:5,
    //             nav:true,
    //             loop:false
    //         }
    //     }
    // })

    $(".btndathang").click(function () {
        $(".xacnhandonhang").toggle();
    });


});


//   giỏ hàng
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready();
}


function ready() {

    let removerCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removerCartItemButtons.length; i++) {
        let button = removerCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }


    

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

}






function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
}




function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}


function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, imageSrc);
    
}


function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('ttgiohang_1tinh');
    let cartItems = document.getElementsByClassName('contaittgiohangtinh')[0];
    let cartRowContents = ` <div class="col-sm-4 colboder">

    <div class="card mb-3 cardcart">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${imageSrc}" class="card-img img-fluid" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body cardtextgiohang">
                    <h5 class="card-title">${title}</h5>
                </div>
            </div>
        </div>
    </div>

</div>

<div class="col-sm-3 colboder">

    <p class="monney dongia">${price}</p>

</div>

<div class="col-sm-1 colboder sl">

    <input class="cart-quantity-input" type="number" value="1" style="width: 100% !important;">

    

</div>

<div class="col-sm-1 colboder">

    <p>
        <a class="btn-danger"><i class="fa fa-trash"></i></a>
    </p>

</div>



<div class="col-sm-3 colboder">

    <p class="monney  thanhtien">1.950.000 đ</p>

</div>`
    
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    
}


function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('contaittgiohangtinh')[0];
    let cartRows = cartItemContainer.getElementsByClassName('ttgiohang_1tinh');

    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('dongia')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace(' ', 'đ'));
        let quantity = quantityElement.value;

        total = total + (price * quantity);

    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('thanhtien')[0].innerText = total + ' đ';
    let tamtinh = document.getElementsByClassName('tamtinh')[0].innerText;
    let tong = document.getElementsByClassName('tong')[0].innerText;
    let chietkhau = document.getElementsByClassName('chietkhau')[0];
    tamtinh = total + ' đ';
    let ck = chietkhau.value;

    tong = total * (100 - ck) / 100;

    document.getElementsByClassName('tamtinh')[0].innerText = tamtinh;
    document.getElementsByClassName('tong')[0].innerText = tong + ' đ';
}

// updateCartTotal();








