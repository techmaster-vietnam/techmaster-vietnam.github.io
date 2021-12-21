let gioHangJSON = localStorage.getItem("gioHang") || [];
if (Array.isArray(gioHangJSON) == false){
    gioHang = JSON.parse(gioHangJSON);
}
else{
    gioHang = [];
}
let elSoluong = document.getElementsByClassName('total-soluong');
let tongSoLuong = 0;
for (let i = 0; i < gioHang.length; i++) {
    tongSoLuong += Number(gioHang[i].soLuong);
}
for (let i = 0; i < elSoluong.length; i++) {
    elSoluong[i].innerHTML = tongSoLuong;
}
let listValueDefault = "best";
let sortValueDefault = "0";
function menuShop(){
    let sortEl = document.getElementById("sort");
    let sortValue = localStorage.getItem("localSortValue") || sortValueDefault;
    sortEl.children[sortValue].selected = "true";
    let el =  document.getElementById("menu");
    let listValue = localStorage.getItem("localListValue") || listValueDefault;
    let text = "";
    let listMenu = [];
    for (let i = 0; i < menu.length; i++) {
        if(menu[i][listValue] == true) {
            listMenu[listMenu.length] = menu[i];
        }    
    }
    switch (sortValue) {
        case "0":
            listMenu.sort(function(a, b){return a.sale - b.sale})
            break;
        case  "1":
            listMenu.sort(function(a, b){return a.money - b.money})
            break;
        case "2":
            listMenu.sort(function(a, b){return b.money - a.money})
            break;
        case "4":
            listMenu.reverse();
            break;
        case "5":
            listMenu.sort(function(a, b){return b.years - a.years})
            break;
        case "6":
            listMenu.sort(function(a, b){return a.years - b.years})
            break;
        case "7":
            listMenu.sort(function(a, b){return b.users - a.users})
            break;
        default:
            break;
    }
    for (let i = 0; i < listMenu.length; i++) {
        text += 
        '<div class="container margin-bottom col s12 m6 l3">'+
            '<div class="card center"  style="cursor: pointer;">'+
                '<img class="image" style="width: 100%;" src="/doan/DATA/IMG/'+ listMenu[i].name +'.jpg" alt="">'+
                '<h5>'+ listMenu[i].name+'</h5>'+
                '<h6 class="text-green" style="padding-bottom: 16px;">'+listMenu[i].money+'.000đ</h6>'+
            '</div>'+
        '</div>';
    }
    el.innerHTML = text;
    let listMenuEl = document.getElementsByClassName("card center");
    for (let i = 0; i < listMenuEl.length; i++) {
        listMenuEl[i].addEventListener("click",function(){
            localStorage.setItem("localSanPham",listMenu[i].name);
            localStorage.setItem("giaSanPham",listMenu[i].money)
            window.open("/doan/page/sanpham/index.html","_self")
        })
    }
    let listText;
    switch (listValue) {
        case "best":
            listText = "BEST SELLER";
            break;
        case  "flav":
            listText = "FLAVORED TEA";
            break;
        case "brew":
            listText = "BREWED TEA";
            break;
        case "milk":
            listText = "MILK TEA";
            break;
        case "latte":
            listText = "LATTE";
            break;
        case "other":
            listText = "OTHER BEVERAGES";
            break;
        default:
            break;
    }
    document.getElementsByClassName("listValue")[0].innerHTML = listText;
    document.getElementsByClassName("listValue")[1].innerHTML = listText;
    let tabEl = document.getElementsByClassName("tablink");
    for (let i = 0; i < tabEl.length; i++) {
        tabEl[i].classList.remove("text-green");
    }
    switch (listValue) {
        case "best":
            tabEl[0].classList.add("text-green")
            break;
        case  "flav":
            tabEl[1].classList.add("text-green")
            break;
        case "brew":
            tabEl[2].classList.add("text-green")
            break;
        case "milk":
            tabEl[3].classList.add("text-green")
            break;
        case "latte":
            tabEl[4].classList.add("text-green")
            break;
        case "other":
            tabEl[5].classList.add("text-green")
            break;
        default:
            break;
    }
}
window.onload = menuShop();
let tabEl = document.getElementsByClassName("tablink");
for (let i = 0; i < tabEl.length; i++) {
    tabEl[i].addEventListener("click",function(){
        switch (i) {
            case 0:
                localStorage.setItem("localListValue", "best");
                break;
            case 1:
                localStorage.setItem("localListValue", "flav");
                break;
            case 2:
                localStorage.setItem("localListValue", "brew");
                break;
            case 3:
                localStorage.setItem("localListValue", "milk");
                break;
            case 4:
                localStorage.setItem("localListValue", "latte");

                break;
            case 5:
                localStorage.setItem("localListValue", "other");

                break;
            default:
                break;
        }
        menuShop();
    });
}
function updateListValue(el){
    let options = el.children;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected){
            localStorage.setItem("localListValue",options[i].value);
            menuShop();
            return;
        }
    }
}
function sapXep(el){
    let options = el.children;
    for (let i = 0; i < options.length; i++) {
        if(options[i].selected){
            localStorage.setItem("localSortValue",i);
            menuShop();
        }
    }
}
