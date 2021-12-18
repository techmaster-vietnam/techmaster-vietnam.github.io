$('input[type="checkbox"]').click(function () {
    var $checked = $('input[type="checkbox"]:checked');
    var $productItem = $('.productItem');

    if ($checked.length > 0) {
        $productItem.hide();

        $checked.each(function () {
            $('.productItem[data-level=' + this.value + ']').show();
            $('.productItem[data-price=' + this.value + ']').show();
            $('.productItem[data-kindhouse=' + this.value + ']').show();
        });
    } else {
        $productItem.show();
    }
});
function anNoidung() {
    let x = document.getElementById("noidung-an");
    let y = document.getElementById("btn-hide");
    let hr = document.getElementById("hr");
    x.style.display = "block";
    y.style.display = "none";
    hr.style.display = "none";
}
function sortPriceLowHigh() {
    let divList = $(".productItem");
    divList.sort(function (a, b) { return $(a).data("popularity") - $(b).data("popularity") });
    $(".products").html(divList);
}
function sortPriceHighLow() {
    let divList = $(".productItem");
    divList.sort(function (a, b) { return $(b).data("popularity") - $(a).data("popularity") });
    $(".products").html(divList);
}
function sortDanhgia() {
    let divList = $(".productItem");
    divList.sort(function (a, b) { return $(b).data("comment") - $(a).data("comment") });
    $(".products").html(divList);
}
function sortDanhgiaThap() {
    let divList = $(".productItem");
    divList.sort(function (a, b) { return $(a).data("comment") - $(b).data("comment") });
    $(".products").html(divList);
}
function searchName() {
    var input, filter, cards, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("productItem");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector("b");
        if (title.innerText.toUpperCase().search(filter) > -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}


//document.getElementById("check").innerHTML = decodeURIComponent(window.location.href);
let str=decodeURIComponent(window.location.href);
let n = str.slice(str.indexOf("?")+1);//link.split('?')[1]:(split:cắt chuỗi thành mảng(số phần tử của mảng tương ứng vs số "?"))
let y = n.replace(/&/g, "<br>");//dùng thay nhiều '&',//gi: k phân biệt hoa thường
let x= y.replace(/=/g, ": ")
let q = x.split('+').join(' ');
let z=q.split('<br>')
let f=[];
for(i=0;i<z.length;i++){
let e=z[i].slice(0,z[i].indexOf(':'))+'<i>'+z[i].slice(z[i].indexOf(':'))+'</i>';
f.push(e)
}//let b=[];
//b.push(f(0).charAt(0).toUpperCase());
document.getElementById("check1").innerHTML = f.join('<br>');


