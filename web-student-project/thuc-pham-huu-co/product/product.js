$('#header').append(`
<div class="container">
            <div class="logo">
                <a href="../index.html"><img src="../image/darklogo.png" alt=""></a>
            </div>
            <div class="menu">
                <ul class="menu-item">
                    <li class="item">
                        <a href="../index.html">Trang chủ</a>
                    </li>
                    <li class="item">
                        <a href="../category/category.html">Sản phẩm</a>
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
                <a href="../cart/cart.html"><span>Giỏ hàng</span><i class="fas fa-cart-plus"></i></a>
            </div>
        </div>
        
        <div class="container-mobile">
            <div class="container-mobile1">
                <div class="button-header">
                    <i class="far fa-bars"></i>
                </div>
                <div class="logo-header">
                   <a href="../index.html"><img src="../image/darklogo.png" alt=""></a>
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
                    <li class="item-mobile"><a href="../index.html">Trang chủ</a></li>
                    <li class="item-mobile"><a href="../category/category.html">Sản phẩm</a></li>
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
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
        header_top.style.boxShadow = "0 0 10px #cccccc";
	} else {
        header_top.style.boxShadow = "none";
	}
})

let default_data ={
    id:1,
    name: 'Rau bắp cải',
    title: 'Rau hữu cơ',
    price: '12,000 đ',
    imgs: ['../image/product-main.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg'],
    img_extra: ['../image/product-9.png', '../image/product-99.jpg', '../image/product-999.jpg', '../image/product-9999.jpg']
}
let data_detail = JSON.parse(localStorage.getItem('detail-data')) || default_data
let product_detail = $('#show-product');
const renderImage = () => {
    let str = "";
    if(data_detail.imgs.length > 0){
        data_detail.imgs.forEach(item => {
            str +=`
            <img src="${item}" alt="">
            `
        });
    }
    return str;
}

var formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "VND",
});

const renderImageExtra = () => {
    let str = "";
    let indexExtra = 1;
    if(data_detail.img_extra.length > 0){
        data_detail.img_extra.forEach(item => {
            str +=`
            <img class="op-05" onclick="currentSlide(${indexExtra})" src="${item}" alt="">
            `
            indexExtra++;
        });
    }
    return str;
}

let data_cart = () => {
    return JSON.parse(localStorage.getItem("data-cart")) || [];
};

const addToCart = () =>{
    let new_data_cart = [...data_cart()];
    new_data_cart.push(data_detail);
    localStorage.setItem('data-cart',JSON.stringify(new_data_cart));
    alert('Thêm vào giỏ hàng thành công')
}



product_detail.append(`
    <div class="show-left">
        <div class="img-main-big">
            <div class="img-main">
                ${renderImage()}
            </div>
            <div class="button-slide">
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
        </div>
        <div class="img-extra">
            ${renderImageExtra()}
        </div>
    </div>
    <div class="show-right">
        <h4><a href="../index.html">Trang chủ</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a>${data_detail.miniTitle}</a></h4>
        <p class="product-name">${data_detail.nameProduct}</p>
        <p class="product-price">${formatter.format(data_detail.price)} đ</p>
        <p class="status">Còn hàng</p>
        <div class="quantity-card">
            <div class="add-to-card">
                <a onclick="addToCart()"><h4>Thêm vào giỏ hàng</h4></a>
            </div>
        </div>
        <div class="product-info">
            <span class="title">Danh mục:</span>
            <span class="title-name">HOA QUẢ, RAU HỮU CƠ, THỰC PHẨM KHÔ</span>
        </div>
    </div>
`)

const mySlide = document.querySelectorAll('.img-main img'),
	dot = document.querySelectorAll('.img-extra img');
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
		dot[i].className = dot[i].className.replace(' border1', '');
	}
	if (n > mySlide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = mySlide.length;
	}
	mySlide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
	dot[counter - 1].className += " border1";
}

let product_info = {...data_detail};


const setLocal = (index) =>{
    console.log('index :>> ', index);
    console.log('defa :>> ', product_info.product_same[index]);
    let item = product_info.product_same[index];
    let data = {...item, name: item.nameProduct, title: item.miniTitle, imgs: [item.img, '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'], img_extra: [item.img, '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
    };
    localStorage.setItem('detail-data', JSON.stringify(data))
}

let list_product_same = $('#list-product-same');


let info_description = $('#info-description-mini')
info_description.append(`
    <p class="upper">NHỮNG CÔNG DỤNG CỰC KỲ QUÝ CỦA ${data_detail.name}</p>
    <p>Vào mùa đông, loại rau xanh được các gia đình hay sử dụng nhất, có lẽ là ${data_detail.name}. ${data_detail.name} không những là một loại rau bổ dưỡng mà còn là vị thuốc quý được sử dụng nhiều trong dân gian.</p>
    <p>Công dụng chữa bệnh của ${data_detail.name}:</p>
    <p>+${data_detail.name} là loại thuốc trị giun tốt: Dùng đắp ngoài để tẩy uế và làm liền sẹo các vết thương, mụn nhọt, các vết thương độc, đồng thời là loại thuốc trừ sâu bọ đốt (ong, ong vò vẽ, nhện…).</p>
    <p>+${data_detail.name} còn là loại thuốc dịu đau trong bệnh thấp khớp, thống phong, đau dây thần kinh hông (lấy các lá ${data_detail.name} rồi dùng bàn là ủi cho mềm, sau đó đắp lên các phần bị đau). ${data_detail.name} làm sạch đường hô hấp bằng cách hoặc dùng đắp (trị viêm họng khản tiếng) hoặc uống trong (ho, viêm sưng phổi).</p>
    <p> +${data_detail.name} cũng là thuốc chống hoại huyết, trị lỵ và cung cấp cho cơ thể một yếu tố quan trọng là lưu huỳnh (S). Nước ${data_detail.name} dùng lọc máu.</p>
    <p>Cuối cùng, ${data_detail.name} là loại thuốc mạnh để chống kích thích thần kinh và chứng mất ngủ. Những người hay lo âu, các thí sinh đi thi, các người bị suy nhược thần kinh, những người mệt mỏi liên miên nên dùng ${data_detail.name} thường xuyên.</p>
    <p class="upper">NHỮNG CÔNG DỤNG CỰC KỲ QUÝ CỦA ${data_detail.name}</p>
    <p>Vào mùa đông, loại rau xanh được các gia đình hay sử dụng nhất, có lẽ là ${data_detail.name}. ${data_detail.name} không những là một loại rau bổ dưỡng mà còn là vị thuốc quý được sử dụng nhiều trong dân gian.</p>
    <p>Công dụng chữa bệnh của ${data_detail.name}:</p>
    <p>+${data_detail.name} là loại thuốc trị giun tốt: Dùng đắp ngoài để tẩy uế và làm liền sẹo các vết thương, mụn nhọt, các vết thương độc, đồng thời là loại thuốc trừ sâu bọ đốt (ong, ong vò vẽ, nhện…).</p>
    <p>+${data_detail.name} còn là loại thuốc dịu đau trong bệnh thấp khớp, thống phong, đau dây thần kinh hông (lấy các lá ${data_detail.name} rồi dùng bàn là ủi cho mềm, sau đó đắp lên các phần bị đau). ${data_detail.name} làm sạch đường hô hấp bằng cách hoặc dùng đắp (trị viêm họng khản tiếng) hoặc uống trong (ho, viêm sưng phổi).</p>
    <p>+${data_detail.name} cũng là thuốc chống hoại huyết, trị lỵ và cung cấp cho cơ thể một yếu tố quan trọng là lưu huỳnh (S). Nước ${data_detail.name} dùng lọc máu.</p>
    <p>Cuối cùng, ${data_detail.name} là loại thuốc mạnh để chống kích thích thần kinh và chứng mất ngủ. Những người hay lo âu, các thí sinh đi thi, các người bị suy nhược thần kinh, những người mệt mỏi liên miên nên dùng bắp cải thường xuyên.</p>
`);
let info_uses = $('#info-uses');
info_uses.append(`
<p>${data_detail.name} hữu cơ (Brassica oleracea nhóm Capitata) là loại rau chủ lực trong họ Cải (còn gọi là họ Thập tự – Brassicaceae/Cruciferae),có xuất xứ từ vùng Địa Trung Hải. Nó là cây thân thảo, sống hai năm, và là một thực vật có hoa thuộc nhóm hai lá mầm với các lá tạo thành một cụm đặc hình gần như hình cầu.Là một loại rau hữu cơ rất dễ nhận biết,khó có thể nhầm lẫn</p>
`)
let info_characteristics = $('#info-characteristics');
info_characteristics.append(`
<p>+${data_detail.name} là loại thuốc trị giun tốt: Dùng đắp ngoài để tẩy uế và làm liền sẹo các vết thương, mụn nhọt, các vết thương độc, đồng thời là loại thuốc trừ sâu bọ đốt (ong, ong vò vẽ, nhện…).</p>
<p>+${data_detail.name} còn là loại thuốc dịu đau trong bệnh thấp khớp, thống phong, đau dây thần kinh hông (lấy các lá ${data_detail.name} rồi dùng bàn là ủi cho mềm, sau đó đắp lên các phần bị đau). ${data_detail.name} làm sạch đường hô hấp bằng cách hoặc dùng đắp (trị viêm họng khản tiếng) hoặc uống trong (ho, viêm sưng phổi).</p>
<p>+${data_detail.name} cũng là thuốc chống hoại huyết, trị lỵ và cung cấp cho cơ thể một yếu tố quan trọng là lưu huỳnh (S). Nước bắp cải dùng lọc máu.</p>
`)
$('#footer').append(`
<div class="footer-mini">
            <div class="logo-footer">
                <img src="../image/footer_logo.png" alt="">
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

let hightlight_button = $('.product-hightlight-mobile > span');
let hightlight_mobile = $('.left-hightlight');
let hightlight_mobile_close = $('.close-hightlight > i')
hightlight_button.click(()=>{
    $('.left-hightlight').css("transform", "translateX(280px)");
    $('.after1').removeClass('hide');
})
// hightlight_mobile_close.click(()=>{
//     $('.left-hightlight').css("transform", "translateX(-280px)");
//     $('.after1').addClass('hide');
// })
$('.after1').click(()=>{
    $('.left-hightlight').css("transform", "translateX(-280px)");
    $('.after1').addClass('hide');
})


// function wcqib_refresh_quantity_increments() {
//     jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
//         var c = jQuery(b);
//         c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
//     })
// }
// String.prototype.getDecimals || (String.prototype.getDecimals = function() {
//     var a = this,
//         b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
//     return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
// }), jQuery(document).ready(function() {
//     wcqib_refresh_quantity_increments()
// }), jQuery(document).on("updated_wc_div", function() {
//     wcqib_refresh_quantity_increments()
// }), jQuery(document).on("click", ".plus, .minus", function() {
//     var a = jQuery(this).closest(".quantity").find(".qty"),
//         b = parseFloat(a.val()),
//         c = parseFloat(a.attr("max")),
//         d = parseFloat(a.attr("min")),
//         e = a.attr("step");
//     b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
// });

var description_mini = $('.description-mini');
var uses = $('.uses');
var characteristics = $('.characteristics');
description_mini.click(()=>{
    if(!description_mini.hasClass('hover-active')){
        description_mini.addClass('hover-active');
        uses.removeClass('hover-active');
        characteristics.removeClass('hover-active');
        $('.info-uses').addClass('hide');
        $('.info-characteristics').addClass('hide');
        $('.info-description-mini').removeClass('hide');
    }
})
uses.click(()=>{
    if(!uses.hasClass('hover-active')){
        uses.addClass('hover-active');
        description_mini.removeClass('hover-active');
        characteristics.removeClass('hover-active');
        $('.info-description-mini').addClass('hide');
        $('.info-characteristics').addClass('hide');
        $('.info-uses').removeClass('hide');
    }
})
characteristics.click(()=>{
    if(!characteristics.hasClass('hover-active')){
        characteristics.addClass('hover-active');
        description_mini.removeClass('hover-active');
        uses.removeClass('hover-active');
        $('.info-description-mini').addClass('hide');
        $('.info-uses').addClass('hide');
        $('.info-characteristics').removeClass('hide');
    }
})

