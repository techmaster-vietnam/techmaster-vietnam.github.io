let a = '';
for (i = 1; i <= 6; i++) {

    a += `<div class="col-lg-4 col-sm-6" id="sanpham">
    <div class="product">
        <div class="imgbox">
            <a href ="tacpham${i}.html"><img src="images/tác phẩm ${i}.jpg" alt="">


        </div>

        <div class="info">
            <div  style="padding-bottom: 15px">
                <h2 style="color: orangered";>Tác phẩm để đời<br></h2>
            </div>
        </div>
    </div>
</div>`
}

document.getElementById('item').innerHTML = a;

// /Load Image/ 


let gallery = '';
for (i = 1; i <= 6; i++) {

    gallery += `<div class="col-lg-4 col-sm-6" id="sanpham">
    <div class="product">
        <div class="imgbox">
        <a href ="bosuutap${i}.html"><img src="images/bộ sưu tập ${i}.jpg" alt="">
            </div>
        </div>

        <div class="info">
            <div style="padding-bottom: 15px">
                <h2 style="color: blue";>Tác phẩm để đời</h2>
            </div>
        </div>
    </div>
</div>`
}

function loadImages() {
    document.getElementById("other_item").innerHTML = gallery;

    $("#e").remove();
}









