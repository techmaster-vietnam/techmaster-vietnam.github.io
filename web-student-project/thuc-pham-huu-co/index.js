$('#header').append(`
<div class="container">
<div class="logo">
	<a href="index.html"><img src="image/lightlogo.png" alt=""></a>
</div>
<div class="menu">
	<ul class="menu-item">
		<li class="item">
			<a href="index.html">Trang chủ</a>
		</li>
		<li class="item">
			<a href="category/category.html">Sản phẩm</a>
		</li>
        <li class="item">
			<span>Xem thêm&nbsp;&nbsp;<i class="far fa-angle-down"></i></span>
            <ul class="sub-menu">
                <div class="arrow-up pos-1"></div>
                <li class= "sub-item"><a href="">Giới thiệu</></li>
                <li class= "sub-item"><a href="">Trang tin tức</></li>
                <li class= "sub-item"><a href="">Liên hệ</></li>
            </ul>
		</li>
		<li class="item">
			<a href="">
				Giới thiệu&nbsp;&nbsp;
				<i class="far fa-angle-down"></i>
			</a>
			<ul class="sub-menu">
				<div class="arrow-up pos-1"></div>
				<li class="sub-item"><a href="">Lịch sử phát triển</a></li>
				<li class="sub-item"><a href="">Thành tựu</a></li>
				<li class="sub-item"><a href="">Tầm nhìn sứ mệnh</a></li>
			</ul>
		</li>
		<li class="item">
			<a href="">
				Trang tin tức&nbsp;&nbsp;
				<i class="far fa-angle-down"></i>
			</a>
			<ul class="sub-menu">
				<div class="arrow-up pos-2"></div>
				<li class="sub-item"><a href="">Góc báo chí</a></li>
				<li class="sub-item"><a href="">Thông tin thị trường</a></li>
				<li class="sub-item"><a href="">Tin tức</a></li>
			</ul>
		</li>
		<li class="item">
			<a href="">Liên hệ</a>
		</li>
	</ul>
</div>
<div class="search">
	<input type="text" placeholder="Tìm kiếm...">
	<a href=""><i class="fas fa-search"></i></a>
</div>
<div class="cart">
	<a href="./cart/cart.html"><span>Giỏ hàng</span><i class="fas fa-cart-plus"></i></a>
</div>
</div>

<div class="container-mobile">
<div class="container-mobile1">
	<div class="button-header">
		<i class="far fa-bars"></i>
	</div>
	<div class="logo-header">
		<img src="image/darklogo.png" alt="">
	</div>
	<div class="search-right">
		<i class="fas fa-search"></i>
		<div class="search-container hide">
			<input type="text" placeholder="Tìm kiếm...">
			<div class="arrow-up pos-3"></div>
			<div class="close-search">x</div>
			<a href=""><i class="fas fa-search"></i></a>
		</div>
	</div>
</div>
<div class="navigation-mobile">
	<ul class="menu-mobile">
		<li class="item-mobile"><a href="index.html">Trang chủ</a></li>
		<li class="item-mobile"><a href="category/category.html">Sản phẩm</a></li>
		<li class="item-mobile">
			<a class="text-mobile-item1" href="">Giới thiệu</a>
			<i class="far fa-angle-down mobile-icon1"></i>
			<ul class="sub-menu-mobile1 hide">
				<li class="sub-item-mobile"><a href="">Lịch sử phát triển</a></li>
				<li class="sub-item-mobile"><a href="">Thành tựu</a></li>
				<li class="sub-item-mobile"><a href="">Tầm nhìn sứ mệnh</a></li>
			</ul>
		</li>
		<li class="item-mobile">
			<a class="text-mobile-item2" href="">Trang tin tức</a>
			<i class="far fa-angle-down mobile-icon2"></i>
			<ul class="sub-menu-mobile2 hide">
				<li class="sub-item-mobile"><a href="">Góc báo chí</a></li>
				<li class="sub-item-mobile"><a href="">Thông tin thị trường</a></li>
				<li class="sub-item-mobile"><a href="">Tin tức</a></li>
			</ul>
		</li>
		<li class="item-mobile"><a href="">Liên hệ</a></li>
	</ul>
	<div class="after hide">
		<div class="button-after">
			<i class="far fa-times"></i>
		</div>
	</div>
</div>
</div>
`)
let button_header = $('.button-header > i');
let close_header = $('.button-after');
button_header.click(function () {
	$('.menu-mobile').addClass('translate-menu');
	$('.after').removeClass('hide');
});
$('.after').click(function () {
	$('.menu-mobile').removeClass('translate-menu');
	$('.after').addClass('hide');
})

let search_mobile = $('.search-right > i');
let close_search = $('.close-search');
search_mobile.click(function () {
	if ($('.search-container').hasClass('hide')) {
		$('.search-container').removeClass('hide');
	}
	else {
		$('.search-container').addClass('hide');
	}
})
close_search.click(function(){
	if (!$('.search-container').hasClass('hide')){
		$('.search-container').addClass('hide');
	}
})

var lastScrollTop = 0;
var header_top = document.getElementById("header");
var item_header_top = document.querySelectorAll("#header a");
var item_special = document.querySelector(".menu-item span")
var item_length = item_header_top.length;
var item_logo = document.querySelector(".logo img");
var sub_item = document.querySelectorAll(".sub-menu .sub-item a"); 
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		header_top.style.background = "white";
        header_top.style.borderBottom = "1px solid #888888";
        header_top.style.boxShadow = "0 0 10px #888888";
        item_special.style.color = "#905d2f";
        for(let index=0; index < item_length; index++){
            item_header_top[index].style.color = "#905d2f";
        }
        item_header_top[1].style.color = "#70C130";
        document.querySelector(".search input").classList.add("my-class");
        document.querySelector(".search input").style.borderColor = "#905d2f";
        item_logo.src = "image/darklogo.png";
	} else {
		header_top.style.background = "none";
        header_top.style.borderBottom = "none";
        header_top.style.boxShadow = "none";
        for(let index=0; index < item_length; index++){
            item_header_top[index].style.color = "white";
        }
        for(let index=0; index < sub_item.length; index++){
            sub_item[index].style.color = "#121212";
        }
        document.querySelector(".search input").classList.remove("my-class");
        document.querySelector(".search input").style.borderColor = "rgba(255,255,255,0.09)";
        item_logo.src = "image/lightlogo.png";
        item_special.style.color = "white";
	}
	// lastScrollTop = scrollTop;
})

const mySlide = document.querySelectorAll('.slide'),
	dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 3000);
}

function slidefun(n) {

	let i;
	for (i = 0; i < mySlide.length; i++) {
		mySlide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if (n > mySlide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = mySlide.length;
	}
	mySlide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}

$('.title-product').click(function () {
	$('.title-product').removeClass('active-title');
	$(this).addClass('active-title');
})

const carouselSlide = document.querySelector('.hightlight-slide');
const carouselImages = document.querySelectorAll('.hightlight-slide img');

const prevBtn = document.querySelector('.prev1');
const nextBtn = document.querySelector('.next1');

let counter1 = 1;
const size = carouselSlide.clientWidth;
console.log('size :>> ', size);

nextBtn.addEventListener('click', () => {
	if (counter1 >= carouselImages.length / 3) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';
	counter1++;
	// console.log('counter1 :>> ', counter1);
});
prevBtn.addEventListener('click', () => {
	if (counter1 <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter1--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';
	// console.log('counter1 :>> ', counter1);
});
carouselSlide.addEventListener('transitionend', () => {
	// console.log('counter1 :>> ', counter1);
	// console.log('carouselImages[counter1].id :>> ', carouselImages[counter1].id);
	if (carouselImages[counter1].id === "lastClone") {
		carouselSlide.style.transition = "none";
		counter1 = carouselImages.length / 3 - 2;
		// console.log('counter1 :>> ', counter1);
		carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';
	}
});
carouselSlide.addEventListener('transitionend', () => {
	console.log('counter1 :>> ', counter1);
	console.log('carouselImages[counter1*3-1].id :>> ', carouselImages[counter1 * 3 - 1].id);
	if (carouselImages[counter1 * 3 - 1].id === 'firstClone') {
		carouselSlide.style.transition = "none";
		counter1 = carouselImages.length / 3 - counter1;
		console.log('counter1 :>> ', counter1);
		carouselSlide.style.transform = 'translateX(' + (-size * counter1) + 'px)';
	}
});

let products1 = [
	{
        id: 1,
        img: '../image/product-3.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Dứa',
        price: 19000,
        discount: '30%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg']
    },
    {
        id: 2,
        img: '../image/product-1.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Nho xanh',
        price: 40000,
        discount: '10%',
        isHightlight: true,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-1.jpg', '../image/product-11.jpg', '../image/product-111.jpg', '../image/product-1111.jpg'],
        img_extra: ['../image/product-1.jpg', '../image/product-11.jpg', '../image/product-111.jpg', '../image/product-1111.jpg']
    },
    {
        id: 3,
        img: '../image/product-3.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Dứa',
        price: 19000,
        discount: '30%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg']
    },
    {
        id: 4,
        img: '../image/product-5.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Cam cao phong',
        price: 18000,
        discount: '15%',
        isHightlight: true,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg'],
        img_extra: ['../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg']
    },
    {
        id: 5,
        img: '../image/product-3.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Dứa',
        price: 19000,
        discount: '30%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg']
    },
    {
        id: 6,
        img: '../image/product-5.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Cam cao phong',
        price: 18000,
        discount: '15%',
        isHightlight: true,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg'],
        img_extra: ['../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg']
    },
    {
        id: 7,
        img: '../image/product-3.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Dứa',
        price: 19000,
        discount: '30%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg', '../image/product-3.jpg']
    },
    {
        id: 8,
        img: '../image/product-5.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Cam cao phong',
        price: 18000,
        discount: '15%',
        isHightlight: true,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg'],
        img_extra: ['../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg', '../image/product-5.jpg']
    },
]

let products2 = [
	{
        id: 1,
        img: '../image/product-4.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Củ dền',
        price: 23000,
        discount: '20%',
        isHightlight: true,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg'],
        img_extra: ['../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg']
    },
    {
        id: 2,
        img: '../image/product-6.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Cà chua',
        price: 8000,
        discount: '15%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg'],
        img_extra: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg']
    },
    {
        id: 3,
        img: '../image/product-4.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Củ dền',
        price: 23000,
        discount: '20%',
        isHightlight: true,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg'],
        img_extra: ['../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg']
    },
    {
        id: 4,
        img: '../image/product-6.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Cà chua',
        price: 8000,
        discount: '15%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg'],
        img_extra: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg']
    },
    {
        id: 5,
        img: '../image/product-4.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Củ dền',
        price: 23000,
        discount: '20%',
        isHightlight: true,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg'],
        img_extra: ['../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg', '../image/product-4.jpg']
    },
    {
        id: 6,
        img: '../image/product-6.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Cà chua',
        price: 8000,
        discount: '15%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg'],
        img_extra: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg']
    },
    {
        id: 7,
        img: '../image/product-6.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Cà chua',
        price: 8000,
        discount: '15%',
        isHightlight: false,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg'],
        img_extra: ['../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg', '../image/product-6.jpg']
    },
    {
        id: 8,
        img: '../image/product-7.jpg',
        miniTitle: 'Thực phẩm khô',
        nameProduct: 'Bơ Đăk Lăk',
        price: 30000,
        discount: '25%',
        isHightlight: true,
        isSelling: false,
        isNew: false,
        imgs: ['../image/product-7.jpg', '../image/product-7.jpg', '../image/product-7.jpg', '../image/product-7.jpg'],
        img_extra: ['../image/product-7.jpg', '../image/product-7.jpg', '../image/product-7.jpg', '../image/product-7.jpg']
    }
]

let products3 = [
	{
        id: 1,
        img: '../image/product-9.png',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Bắp cải xanh',
        price: 12000,
        discount: '20%',
        isHightlight: true,
        isSelling: false,
        isNew: false,
        imgs: ['../image/product-main.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg'],
        img_extra: ['../image/product-9.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg']
    },
    {
        id: 2,
        img: '../image/product-2.jpg',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Mùng tơi',
        price: 10000,
        discount: '5%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg']
    },
    {
        id: 3,
        img: '../image/product-9.png',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Bắp cải xanh',
        price: 12000,
        discount: '20%',
        isHightlight: true,
        isSelling: false,
        isNew: false,
        imgs: ['../image/product-main.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg'],
        img_extra: ['../image/product-9.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg']
    },
    {
        id: 4,
        img: '../image/product-2.jpg',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Mùng tơi',
        price: 10000,
        discount: '5%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg']
    },
    {
        id: 5,
        img: '../image/product-9.png',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Bắp cải xanh',
        price: 12000,
        discount: '20%',
        isHightlight: true,
        isSelling: false,
        isNew: false,
        imgs: ['../image/product-main.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg'],
        img_extra: ['../image/product-9.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg']
    },
    {
        id: 6,
        img: '../image/product-2.jpg',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Mùng tơi',
        price: 10000,
        discount: '5%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg']
    },
    {
        id: 7,
        img: '../image/product-9.png',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Bắp cải xanh',
        price: 12000,
        discount: '20%',
        isHightlight: true,
        isSelling: false,
        isNew: false,
        imgs: ['../image/product-main.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg'],
        img_extra: ['../image/product-9.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg']
    },
    {
        id: 8,
        img: '../image/product-2.jpg',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Mùng tơi',
        price: 10000,
        discount: '5%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg', '../image/product-2.jpg']
    },
]

let list_product1 = $('.list-product .list-product1');
let list_product2 = $('.list-product .list-product2');
let list_product3 = $('.list-product .list-product3');

const setLocal1 = (index) =>{
  
    let item = products1[index];
    localStorage.setItem('detail-data', JSON.stringify(item))
}
const setLocal2 = (index) =>{
   
    let item = products2[index];
    localStorage.setItem('detail-data', JSON.stringify(item))
}
const setLocal3 = (index) =>{

    let item = products3[index];
    localStorage.setItem('detail-data', JSON.stringify(item))
}

var formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "VND",
});

products1.forEach((item, index)=>{
	list_product1.append(`
		<div class="mini-product">
			<div class="img-product">
				<img src=${item.img} alt="">
				<div onclick = "setLocal1(${index})" class="info"><a href= "./product/product.html">Xem chi tiết</a></div>
			</div>
			<div class="product-txt">
				<p class="mini-title">${item.miniTitle}</p>
				<p class="name-product">${item.nameProduct}</p>
				<p class="price">${formatter.format(item.price)} đ</p>
				<div class="discount">${item.discount}</div>
			</div>
		</div>
	`)
})

products2.forEach((item, index)=>{
	list_product2.append(`
		<div class="mini-product">
			<div class="img-product">
				<img src=${item.img} alt="">
				<div onclick = "setLocal2(${index})" class="info"><a href= "./product/product.html">Xem chi tiết</a></div>
			</div>
			<div class="product-txt">
				<p class="mini-title">${item.miniTitle}</p>
				<p class="name-product">${item.nameProduct}</p>
				<p class="price">${formatter.format(item.price)} đ</p>
				<div class="discount">${item.discount}</div>
			</div>
		</div>
	`)
})

products3.forEach((item, index)=>{
	list_product3.append(`
		<div class="mini-product">
			<div class="img-product">
				<img src=${item.img} alt="">
				<div onclick = "setLocal3(${index})" class="info"><a href= "./product/product.html">Xem chi tiết</a></div>
			</div>
			<div class="product-txt">
				<p class="mini-title">${item.miniTitle}</p>
				<p class="name-product">${item.nameProduct}</p>
				<p class="price">${formatter.format(item.price)} đ</p>
				<div class="discount">${item.discount}</div>
			</div>
		</div>
	`)
})


let title_product1 = $('.title .title-product1');
let title_product2 = $('.title .title-product2');
let title_product3 = $('.title .title-product3');

title_product1.click(()=>{
	if(title_product1.hasClass('active-title')){
		list_product1.removeClass('hide');
		list_product2.addClass('hide');
		list_product3.addClass('hide');
	}
})
title_product2.click(()=>{
	if(title_product2.hasClass('active-title')){
		list_product2.removeClass('hide');
		list_product1.addClass('hide');
		list_product3.addClass('hide');
	}
})
title_product3.click(()=>{
	if(title_product3.hasClass('active-title')){
		list_product3.removeClass('hide');
		list_product1.addClass('hide');
		list_product2.addClass('hide');
	}
})

$('#footer').append(`
<div class="footer-mini">
            <div class="logo-footer">
                <img src="../../image/footer_logo.png" alt="">
            </div>
            <div class="footer-navigation">
                <div class="contact">
                    <div>
                        <h3>Liên hệ</h3>
                        <div class="contact-mini">
                            <ul>
                                <li><i class="fa fa-home"></i>&nbsp;&nbsp;25A Trần Nguyên Hãn – Nha Trang</li>
                                <li><i class="fa fa-phone"></i>&nbsp;&nbsp;Hotline: 091 353 3457 – 09 1425 2542</li>
                                <li><i class="far fa-envelope"></i>&nbsp;&nbsp;Email : zinzinfood@gmail.com</li>
                                <li><i class="fab fa-facebook-square"></i>&nbsp;&nbsp;Facebook : fb.com/zinzinfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="link">
                   <div>
                        <h3>Liên kết</h3>
                        <div class="link-mini">
                            <ul>
                                <li class="link-item"><a href="">Trang chủ</a></li>
                                <li class="link-item"><a href="">Sản phẩm</a></li>
                                <li class="link-item">
                                    <a href="">Giới thiệu</a>&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-angle-down icon-1"></i>
                                    <ul class="link-item-sub1 hide">
                                        <li class="sub-item"><a href="">Lịch sử phát triển</a></li>
                                        <li class="sub-item"><a href="">Thành tựu</a></li>
                                        <li class="sub-item"><a href="">Tầm nhìn sứ mệnh</a></li>
                                    </ul>
                                </li>
                                <li class="link-item">
                                    <a href="">Trang tin tức</a>&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-angle-down icon-2"></i>
                                    <ul class="link-item-sub2 hide">
                                        <li class="sub-item"><a href="">Góc báo chí</a></li>
                                        <li class="sub-item"><a href="">Thông tin thị trường</a></li>
                                        <li class="sub-item"><a href="">Tin tức</a></li>
                                    </ul>
                                </li>
                                <li class="link-item">Liên hệ</li>
                            </ul>
                        </div>
                   </div>
                </div>
                <div class="category">
                    <div>
                        <h3>Danh mục</h3>
                        <div class="category-mini">
                            <ul>
                                <li class="category-item"><a href="">Giới thiệu</a></li>
                                <li class="category-item"><a href="">Lịch sử phát triển</a></li>
                                <li class="category-item"><a href="">Thành tựu</a></li>
                                <li class="category-item"><a href="">Tầm nhìn sứ mệnh</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                Copyright 2021 © Công Ty Cổ Phần Xuất Nhập Khẩu Bến Tre      
            </div>
        </div>
`)
$('.link-item > .icon-1').click(() => {
	if($('.link-item-sub1').hasClass('hide')){
		$('.link-item-sub1').removeClass('hide');
		$('.icon-1').css('transform',"rotate(180deg)");
		$('.icon-1').css('transition',"0.5s");
	}else{
		$('.link-item-sub1').addClass('hide');
		$('.icon-1').css('transform',"rotate(360deg)");
		$('.icon-1').css('transition',"0.5s");
	}
});


$('.link-item > .icon-2').click(() => {
	if($('.link-item-sub2').hasClass('hide')){
		$('.link-item-sub2').removeClass('hide');
		$('.icon-2').css('transform',"rotate(180deg)");
		$('.icon-2').css('transition',"0.5s");
	}else{
		$('.link-item-sub2').addClass('hide');
		$('.icon-2').css('transform',"rotate(360deg)");
		$('.icon-2').css('transition',"0.5s");
	}
});

$('.mobile-icon1').click(()=>{
	if($('.sub-menu-mobile1').hasClass('hide')){
		$('.text-mobile-item1').css('color','black');
		$('.sub-menu-mobile1').removeClass('hide');
		$('.mobile-icon1').css('transform',"rotate(180deg)");
		$('.mobile-icon1').css('transition',"0.5s");
	}else{
		$('.text-mobile-item1').css('color','rgba(102,102,102,0.85)');
		$('.sub-menu-mobile1').addClass('hide');
		$('.mobile-icon1').css('transform',"rotate(360deg)");
		$('.mobile-icon1').css('transition',"0.5s");
	}
})

$('.mobile-icon2').click(()=>{
	if($('.sub-menu-mobile2').hasClass('hide')){
		$('.text-mobile-item2').css('color','black');
		$('.sub-menu-mobile2').removeClass('hide');
		$('.mobile-icon2').css('transform',"rotate(180deg)");
		$('.mobile-icon2').css('transition',"0.5s");
	}else{
		$('.text-mobile-item2').css('color','rgba(102,102,102,0.85)');
		$('.sub-menu-mobile2').addClass('hide');
		$('.mobile-icon2').css('transform',"rotate(360deg)");
		$('.mobile-icon2').css('transition',"0.5s");
	}
})