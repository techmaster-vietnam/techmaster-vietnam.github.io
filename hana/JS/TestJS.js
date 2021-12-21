function homeBest(){
    let el =  document.getElementById("home-best");
    let text = "";
    let count = 0;
    let listMenu = [];
    for (let i = 0; i < menu.length; i++) {
        if(menu[i].best == true) {
            listMenu[listMenu.length] = menu[i];
        }    
    }
    for (let i = 0; i < menu.length; i++) {
        if (count == 8){break;}
        if(menu[i].best == true) {
        count++;
        text += 
        '<div class="container margin-bottom col s12 m6 l3">'+
            '<div class="card center" style="cursor: pointer;">'+
                '<img class="image" style="width: 100%;" src="/doan/DATA/IMG/'+ menu[i].name +'.jpg" alt="">'+
                '<h5>'+ menu[i].name+'</h5>'+
                '<h6 class="text-green" style="padding-bottom: 16px;">'+menu[i].money+'.000đ</h6>'+
            '</div>'+
        '</div>';
        }
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
}
window.onload = homeBest();