function c() {
  document.getElementById("watch_item").innerHTML = `<img src="../img/sản phẩm 2.jpg" alt="">`
}

function d() {
  document.getElementById("watch_item").innerHTML = `<img src="../img/sản phẩm 6.jpg" alt="">`
}

function e() {
  document.getElementById("watch_item").innerHTML = `<img src="../img/sản phẩm 5.jpg" alt="">`
}

function f() {
  document.getElementById("watch_item").innerHTML = `<img src="../img/sản phẩm 8.jpg" alt="">`
}


let choose_size='';
for(let i=36;i<=44;i++){
  choose_size+=`<div class="col-2.25"><label class="choose_size">
  <input type="radio" name="choose_size" value="${i}">
  <span class="checkmark">${i}</span>
</label></div>`;
}

document.getElementById('choose_area').innerHTML=choose_size;





var input = document.getElementById("input"),
    btn1  = document.getElementById("btn1"),
    btn2  = document.getElementById("btn2");

btn1.onclick = function () {
    
    input.value = +input.value + 1;
    
}

btn2.onclick = function () {
    
    input.value = +input.value - 1;
    if(input.value<=1){
      input.value=1
    }
}

