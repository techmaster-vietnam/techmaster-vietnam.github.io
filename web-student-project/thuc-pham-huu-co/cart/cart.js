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
                <a href=""><span>Giỏ hàng</span><i class="fas fa-cart-plus"></i></a>
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
                    <li class="item-mobile"><a href="category.html">Sản phẩm</a></li>
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

let default_data_cart = [
    {
        id: 1,
        img: '../image/product-8.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Bí Ngô',
        price: 17000,
        discount: '10%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-8.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-8.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
    },
    {
        id: 2,
        img: '../image/product-8.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Bí Ngô',
        price: 17000,
        discount: '10%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-8.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-8.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
    },
    {
        id: 3,
        img: '../image/product-8.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Bí Ngô',
        price: 17000,
        discount: '10%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-8.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-8.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
    },
    {
        id: 4,
        img: '../image/product-1.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Nho xanh',
        price: 40000,
        discount: '10%',
        isHightlight: true,
        isSelling: false,
        isNew: true,
        imgs: ['../image/product-1.jpg', '../image/product-main.png', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-1.jpg', '../image/product-9.png', '../image/product-2.jpg', '../image/product-3.jpg']
    },
    {
        id: 5,
        img: '../image/product-2.jpg',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Mùng tơi',
        price: 10000,
        discount: '5%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-2.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
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
        imgs: ['../image/product-2.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
    },
    {
        id: 7,
        img: '../image/product-2.jpg',
        miniTitle: 'Rau hữu cơ',
        nameProduct: 'Mùng tơi',
        price: 10000,
        discount: '5%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-2.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg'],
        img_extra: ['../image/product-2.jpg', '../image/product-1.jpg', '../image/product-2.jpg', '../image/product-3.jpg']
    }
]

let data_cart = () =>{
    return JSON.parse(localStorage.getItem("data-cart")) || default_data_cart;
}
let main_cart = $('#main');

let list_data_duplicate = [];
let list_no_duplicate = [];
let list_duplicate_render = [];

  
let list_cart = $('#shop-table-tbody');
var formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "VND",
});


const renderCount = (item) =>{
    let count = 0;
    list_data_duplicate.forEach(it =>{
        if(it.id === item.id){
            count ++;
        }
    })
    return count;
}

const totalPrice = () =>{
    let price = 0;
    data_cart().forEach(item =>{
        price += item.price;
    })
    return price;
}

const updateLocal = (data) =>{
    localStorage.setItem('data-cart', JSON.stringify(data));
    updateList();
}

const addProduct = (id) =>{
    // console.log('id :>> ', id);
    let index = data_cart().findIndex(item => item.id === id);
    let item = data_cart()[index]
    let newData = [...data_cart()];
    newData.push(item);
    console.log('newData :>> ', newData);
    updateLocal(newData);
}

const handleDelete = (id) =>{
    // let index = data_cart().findIndex(item => item.id === id);
    let index = -1;
    for(let i = data_cart().length - 1; i>=0; i--){
        if(data_cart()[i].id === id){
            index = i;
            break;
        }
    }
    let newData = [...data_cart()];
    newData.splice(index, 1);
    console.log('newData :>> ', newData);
    return newData;
}

const reduceProduct = (id)=>{
    let newData = handleDelete(id);
    updateLocal(newData);
}

const deleteProduct = (id) =>{
    let data = [...data_cart()];
    let newData = [];
    data.forEach(item => {
        if(+id !== +item.id){
            newData.push(item);
        }
    });
    updateLocal(newData);
}

const append = (item, count) =>{
    list_cart.append(`
        <tr>
            <td onclick = deleteProduct(${item.id }) class="product-delete">
                <i class="far fa-trash-alt"></i>
            </td>
            <td class="product-thumbnail">
                <a href=""><img src="${item.img}" alt=""></a>
            </td>
            <td class="product-name">
                ${item.nameProduct}
            </td>
            <td class="product-price red bold">
                ${formatter.format(item.price)} đ
            </td>
            <td class="product-quantity">
                <button onclick = "addProduct(${item.id})">+</button> <button>${count}</button> <button onclick = "reduceProduct(${item.id})">-</button>
            </td>
            <td class="product-subtotal red bold">
                ${formatter.format(item.price*count)} đ
            </td>
        </tr>
    `)
}

let information_checkout = $('#total-table-tbody');

const updateCheckOut = () =>{
    information_checkout.html('');
    information_checkout.append(`
        <tr>
            <td class="count">Số lượng</td>
            <td class="total-sub-price red bold">${data_cart().length}</td>
        </tr>
        <tr>
            <td class="total-sub">Tổng tiền</td>
            <td class="total-sub-price red bold">${formatter.format(totalPrice())} đ</td>
        </tr>
    `)
}


const updateList = () =>{
    if(data_cart().length === 0){
        main_cart.html('');
        main_cart.append('Không có sản phẩm nào');
    }
    else{
        list_cart.html('');
        let data = data_cart();
        data.forEach((item, index)=>{
            let id = item.id;
            let isExist = false;
            if(index > 0){
                for(let i= index-1; i>=0; i--){
                    if(id === data[i].id){
                        isExist = true;
                    }
                }
            }
            if(!isExist){
                let count = 0;
                for(let i=0; i<data.length; i++){
                    if(data[i].id == id){
                        count++;
                    }
                }
                append(item, count);
            }
        })
        updateCheckOut();
    }
};
updateList();


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
