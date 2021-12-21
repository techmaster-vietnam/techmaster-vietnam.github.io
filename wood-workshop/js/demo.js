function layDanhSachDuoiLocalStorage(){
    let jsonDanhSachSanPham = localStorage.getItem("danhsachitemGiohang");

    let danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    console.log(danhSachSanPham);
    let html ='';
    for(let i = 0;i < danhSachSanPham.length;i++){
       html += '                            <div class="order-info">\n'+
       '                                <div class="row align-items-center">\n'+
       '                                    <div class="col-3"><img src="'+danhSachSanPham[i].img+'" alt=""></div>\n'+
       '                                    <div class="col-9">'+danhSachSanPham[i].name+'</div>\n'+
       '                                </div>\n'+
       '                            </div>\n'+
       '                            <div class="price">\n'+
       '                                <div class="row">\n'+
       '                                    <div class="col-4">Giá:</div>\n'+
       '                                    <div class="col-8 text-end">'+danhSachSanPham[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'+'</div>\n'+
       '                                </div>\n'+
       '                            </div>\n'+
       '                            <div class="soluong">\n'+
       '                                <div class="row">\n'+
       '                                    <div class="col-4">Số lượng:</div>\n'+
       '                                    <div class="col-8 text-end">'+danhSachSanPham[i].soluong+'</div>\n'+
       '                                </div>\n'+
       '                            </div>\n'+
       '                            <div class="discount">\n'+
       '                                <div class="row">\n'+
       '                                    <div class="col-4">Khuyến mại:</div>\n'+
       '                                    <div class="col-8 text-end">'+danhSachSanPham[i].giamgia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'+'</div>\n'+
       '                                </div>\n'+
       '                            </div>    \n'+
       '                            <div class="tamtinh">\n'+
       '                                <div class="row">\n'+
       '                                    <div class="col-4">Tạm tính:</div>\n'+
       '                                    <div class="col-8 text-end order-price">'+((danhSachSanPham[i].price-danhSachSanPham[i].giamgia)*danhSachSanPham[i].soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ'+'</div>\n'+
       '                                </div>\n'+
       '                            </div>  ';
    }
    document.querySelector(".order-intro").innerHTML = html;
}
layDanhSachDuoiLocalStorage();

let tongtien = document.querySelectorAll(".order-price");
let tong = 0 ;
tongtien.forEach(function(el){
    tong += Number(el.textContent.replace('.','').replace('.','').replace('đ',''));
})
document.querySelector(".tongtatca").textContent = tong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'đ';

//reponsive
document.querySelector('.navbar-toggler').addEventListener('click',()=>{
    document.querySelector('.responsive-navbar').classList.toggle('hide')
  })
  console.log(document.querySelector('.navbar-toggler'));

//transport
