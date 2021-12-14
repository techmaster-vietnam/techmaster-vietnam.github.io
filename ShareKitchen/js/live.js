var indexVariable=0;

function increaseNumber(){
    indexVariable++;
    var span= document.getElementsByClassName('word-live-2')[0];
    span.innerHTML='Đơn hàng số : '+indexVariable;

}
setInterval('increaseNumber()', 10000);