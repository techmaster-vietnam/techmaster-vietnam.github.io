localStorage.setItem("sizeSanPham","M");
localStorage.setItem("soLuongSanPham",1);
localStorage.setItem("sugar","100%");
localStorage.setItem("ice","100%");
let sanPhamDefault = "Tên sản phẩm";
let sanPhamValue = localStorage.getItem("localSanPham") || sanPhamDefault;
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
let sanPhamEl = document.getElementsByClassName("sanpham");
for (let i = 0; i < sanPhamEl.length; i++) {
    sanPhamEl[i].innerHTML = sanPhamValue;
}
let sanPhamImg = document.getElementsByClassName("sanpham-image");
for (let i = 0; i < sanPhamImg.length; i++) {
    sanPhamImg[i].src = '/doan/DATA/IMG/'+sanPhamValue+'.jpg';
}
function updateTotal(){
    let total = localStorage.getItem("giaSanPham");
    if (localStorage.getItem("sizeSanPham") == "L"){
        total = Number(total) + 15;
    }
    total *= localStorage.getItem("soLuongSanPham");
    document.getElementById("total").innerHTML = total + ".000đ";
}
function size(el){
    let valueEL = el.innerHTML;
    localStorage.setItem("sizeSanPham",valueEL);
    let butonEl = document.getElementsByClassName("badge");
    for (let i = 0; i < butonEl.length; i++) {
        butonEl[i].classList.remove("green");
    }
    el.classList.add("green");
    updateTotal();
}
function soLuong(el){
    let soLuong = document.getElementById("so-luong").value;
    if (el.value == "-"){
        if (soLuong > 1){
            soLuong--;
        }
    }else{
        soLuong++;
    }
    localStorage.setItem("soLuongSanPham",soLuong);
    document.getElementById("so-luong").value = soLuong;
    updateTotal();
}
function ice(el){
    let iceEL = document.getElementsByClassName("ice");
    for (let i = 0; i < iceEL.length; i++) {
        iceEL[i].classList.remove("green"); 
    }
    el.classList.add("green");
    localStorage.setItem("ice",el.innerHTML);
}
function sugar(el){
    let sugarEL = document.getElementsByClassName("sugar");
    for (let i = 0; i < sugarEL.length; i++) {
        sugarEL[i].classList.remove("green"); 
    }
    el.classList.add("green");
    localStorage.setItem("sugar",el.innerHTML);
}
function updateGio(){
    let kiemTra =  false;
    for (let i = 0; i < gioHang.length; i++) {
        if (gioHang[i].name != localStorage.getItem("localSanPham")) continue;
        if (gioHang[i].size != localStorage.getItem("sizeSanPham")) continue;
        if (gioHang[i].ice != localStorage.getItem("ice")) continue;
        if (gioHang[i].sugar != localStorage.getItem("sugar")) continue;
        gioHang[i].soLuong++;
        kiemTra = true;
        break;
    }
    if (kiemTra == false)
    gioHang.push(
        {
            sugar: localStorage.getItem("sugar"),
            ice: localStorage.getItem("ice"),
            size: localStorage.getItem("sizeSanPham"),
            name: localStorage.getItem("localSanPham"),
            soLuong: localStorage.getItem("soLuongSanPham"),
            gia: localStorage.getItem("giaSanPham")
        }
    )
    const myJSON = JSON.stringify(gioHang);
    localStorage.setItem("gioHang", myJSON);
    document.getElementsByClassName("modal")[0].style.display = "block";
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
}