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
                        <a href="category.html">Sản phẩm</a>
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

let showItemMain = $('#main-product');
let productsMain = [
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
        id: 4,
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
    },
    {
        id: 9,
        img: '../image/product-8.jpg',
        miniTitle: 'Hoa quả',
        nameProduct: 'Bí Ngô',
        price: 17000,
        discount: '10%',
        isHightlight: false,
        isSelling: true,
        isNew: false,
        imgs: ['../image/product-8.jpg', '../image/product-8.jpg', '../image/product-8.jpg', '../image/product-8.jpg'],
        img_extra: ['../image/product-8.jpg', '../image/product-8.jpg', '../image/product-8.jpg', '../image/product-8.jpg']
    }
]


const setLocal = (index) =>{
    console.log('index :>> ', index);
    console.log('productsMain :>> ', productsMain[index]);
    let item = productsMain[index];
    let data = {...item, name: item.nameProduct, title: item.miniTitle};
    localStorage.setItem('detail-data', JSON.stringify(data))
}

let filters = {
    category: -1,
    price: -1,
    other: -1,
}

var formatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: "VND",
});

const paging_dom = $('#paging');

let perPage = 6;
let currentPage = 1;
let totalItem = productsMain.length;
let totalPage = totalItem % perPage > 0 ? Math.floor(totalItem/perPage) + 1 : Math.floor(totalItem/perPage);

const changePage = (page) =>{
    currentPage = page;;
    filterList(productsMain);
}

const renderPage = () =>{
    let str = '';
    for(let i=1; i<= totalPage; i++){
        str+= `<li onclick="changePage(${i})" class="page-item"><a class="page-link" href="#">${i}</a></li>`;
    }
    return str;
}


const renderList = (list) =>{
    let str = "";
    let lastIndex = perPage*currentPage-1;
    let firstIndex = lastIndex -5;
    let currentList = [...list].splice(firstIndex, 6)
    currentList.forEach((item, index)=>{
        str += `
        <div class="mini-product">
            <div class="img-product">
                <img src="${item.img}" alt="">
                <div onclick = "setLocal(${index})" class="info"><a href= "../product/product.html">Xem chi tiết</a></div>
            </div>
            <div class="product-txt">
                <p class="mini-title">${item.miniTitle}</p>
                <p class="name-product">${item.nameProduct}</p>
                <p class="price">${formatter.format(item.price)} đ</p>
                <div class="discount">${item.discount}</div>
            </div>
        </div>
        `;
    })
    return str;
}

const filterList = (list) =>{
    let els = renderList(list);
    showItemMain.html("");

    showItemMain.append(`
        ${els}
    `)
}
filterList(productsMain);


const handleFilterByCategory = (data, order)=>{
    let newData;
    if(order === 1){
        newData = data.filter((item) =>{
            return item.miniTitle === "Rau hữu cơ";
        })
    }
    if(order === 2){
        newData = data.filter((item) =>{
            return item.miniTitle === "Hoa quả";
        })
    }
    if(order ===3){
        newData = data.filter((item) =>{
            return item.miniTitle === "Thực phẩm khô";
        })
    }
    return newData;
}

const handleFilterByPrice = (data, order)=>{
    // console.log('data :>> ', data);
    // console.log('order :>> ', order);
    let newData;
    if(order === 1){
        newData = data.filter((item) =>{
            return item.price < 10000;
        })
    }
    if(order === 2){
        newData = data.filter((item) =>{
            return item.price >= 10000 && item.price < 20000;
        })
    }
    if(order ===3){
        newData = data.filter((item) =>{
            return item.price >= 20000 && item.price < 30000;
        })
    }
    if(order ===4){
        newData = data.filter((item) =>{
            return item.price >= 30000;
        })
    }
    // console.log('newData :>> ', newData);
    return newData;
}

const handleFilterByOther = (data, order)=>{
    let newData;
    if(order === 1){
        newData = data.filter((item) =>{
            return item.isHightlight === true;
        })
    }
    if(order === 2){
        newData = data.filter((item) =>{
            return item.isSelling === true;
        })
    }
    if(order ===3){
        newData = data.filter((item) =>{
            return item.isNew == true;
        })
    }
    return newData;
}

const filterByCategory = (order) =>{
    filters.category = order;
    handleFilter();
}

const filterByPrice = (order) =>{
    filters.price = order;
    handleFilter();
}

const filterByOther = (order) =>{
    filters.other = order;
    handleFilter();
}

const handleFilter = ()=>{
    // console.log('filters :>> ', filters);
    let newData = [...productsMain];
    for(let f in filters){
        if(filters[f] === -1){
            delete filters[f];
        }
    }
    for(let f in filters){
        if(f === 'price'){
            newData = handleFilterByPrice(newData, filters[f])
        }
        if(f === 'category'){
            newData = handleFilterByCategory(newData, filters[f])
        }
        if(f === 'other'){
            newData = handleFilterByOther(newData, filters[f])
        }
    }
    filterList(newData);
}

const updatePaging = () =>{
    paging_dom.append(`
        <nav aria-label="Page navigation example">
            <ul class="pagination">         
            ${renderPage()}   
            </ul>
        </nav>
    `)
}
updatePaging();


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

