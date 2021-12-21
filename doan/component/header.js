document.getElementById("header").innerHTML = 
'<button class="bar-item button show-mobile" id="openMenu" onclick="showHideMenu(this,true)" style="display: block;">'+
            '<i class="fas fa-bars"></i>'+
        '</button>'+
        '<div class="dropdown-hover show-mobile left" id="showHideMenu" style="display: none;">'+
            '<button class="button" onclick="showHideMenu(this,false)">'+
                '<i class="fas fa-times"></i>'+
            '</button>'+
            '<div class="dropdown-content bar-block card-4 animate-left" style="display: block;width:50%;height:100%">'+
                '<a class="button bar-item" href="#">Giới thiệu</a>'+
                '<a class="button bar-item" href="/doan/page/shop/index.html">Menu nước</a>'+
                '<a class="button bar-item" href="#">Hệ thống cửa hàng</a>'+
                '<a class="button bar-item" href="#">Nhượng quyền</a>'+
                '<a class="button bar-item" href="#">Tuyển dụng</a><a class="button bar-item" href="#">Liên hệ</a>'+
            '</div>'+
        '</div>'+
        '<a class="bar-item" href="https://tuanit1997.github.io/doan/">'+
            '<img class="image logo" src="/doan/img/—Pngtree—coffee_3626459.png" alt=""style="height: 20px;transform: scale(1.5);">'+
        '</a>'+
        '<a class="bar-item button hide-mobile">Giới thiệu</a>'+
        '<a class="bar-item button hide-mobile" href="/doan/page/shop/index.html">Menu nước</a>'+
        '<a class="bar-item button hide-ipad">Hệ thống cửa hàng</a><a class="bar-item button hide-ipad">Nhượng quyền</a>'+
        '<a class="bar-item button hide-ipad">Tuyển dụng</a><a class="bar-item button hide-ipad">Liên hệ</a>'+
        '<div class="dropdown-hover hide-mobile show-ipad">'+
            '<button class="button">More &nbsp; <i class="fas fa-caret-down"></i></button>'+
            '<div class="dropdown-content bar-block card-4">'+
                '<a class="bar-item button" href="#">Hệ thống cửa hàng</a>'+
                '<a class="bar-item button" href="#">Nhượng quyền</a>'+
                '<a class="bar-item button" href="#">Tuyển dụng</a>'+
                '<a class="bar-item button" href="#">Liên hệ</a>'+
            '</div>'+
        '</div>'+
        '<div class="right bar-item button text-green display-container hana-cart">'+
            '<img class="circle" src="https://thumbs.dreamstime.com/b/shopping-cart-pixel-perfect-vector-thin-line-icon-simple-minimal-pictogram-ready-grid-web-graphics-apps-editable-105308524.jpg" alt="" style="height: 20px; transform: scale(1.8);">'+
           '<span class="display-middle small" style="top:45%; left:55%"><b class="total-soluong">6</b></span>'+
        '</div>'+
        '<a class="bar-item button right">'+
            '<img class="image circle" src="https://www.w3schools.com/w3images/avatar2.png" alt=""style="height: 20px;transform: scale(1.5);width: 100%;">'+
        '</a>'
function showHideMenu(event,exam){
    if(exam==true){
        event.style.display = "none";
        document.getElementById("showHideMenu").style.display = "block";
    } else{
        document.getElementById("showHideMenu").style.display = "none";
        document.getElementById("openMenu").style.display = "block";
    }
}
document.getElementsByClassName("hana-cart")[0].addEventListener("click",function(){
    window.open('/doan/page/giohang/index.html','_self');
})
