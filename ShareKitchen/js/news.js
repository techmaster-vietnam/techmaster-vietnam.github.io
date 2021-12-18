// Lấy phần Modal
var modal = document.getElementById('myModal-1');
 
// Lấy đường dẫn của hình ảnh và gán vào trong phần Modal
//image1
var img = document.getElementsByClassName('image-box-1')[0];
var caption = document.getElementsByClassName('ingredient')[0];
var caption1 = document.getElementsByClassName('how-to')[0];
//image2
var img1 = document.getElementsByClassName('image-box-2')[0];
var caption2 = document.getElementsByClassName('ingredient-1')[0];
var caption3 = document.getElementsByClassName('how-to-1')[0];
//image 3
var img2 = document.getElementsByClassName('image-box-1')[1];
var caption4 = document.getElementsByClassName('news-1')[0];
//image 4
var img3 = document.getElementsByClassName('image-box-3')[0];
var caption5 = document.getElementsByClassName('news-2')[0];
//image 5
var img4 = document.getElementsByClassName('image-box-1')[2];
var caption6 = document.getElementsByClassName('ingredient-2')[0];
var caption7 = document.getElementsByClassName('how-to-2')[0];
//image 6
var img5 = document.getElementsByClassName('image-box-4')[0];
var caption8 = document.getElementsByClassName('ingredient-3')[0];
var caption9 = document.getElementsByClassName('how-to-3')[0];

var modalCaption = document.getElementById("caption-1"); // modal
var modalImg = document.getElementById("img01"); // modal
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML= caption.innerHTML +'<br>'+'<br>'+ caption1.innerHTML;
}
img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML= caption2.innerHTML +'<br>'+'<br>'+ caption3.innerHTML;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML= caption4.innerHTML;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML= caption5.innerHTML;
}
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML= caption6.innerHTML +'<br>'+'<br>'+ caption7.innerHTML;
}
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "img/keo-ku-do-ha-tinh.jpg";
    modalCaption.innerHTML= caption8.innerHTML +'<br>'+'<br>'+ caption9.innerHTML;
}

// lấy button span có chức năng đóng Modal
var span = document.getElementsByClassName("close")[0];

//Khi button được click, đóng modal
span.onclick = function() { 
    modal.style.display = "none";
}
