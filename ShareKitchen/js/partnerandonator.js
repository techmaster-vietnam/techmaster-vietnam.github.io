
var account=[];
var storedaccount= localStorage.getItem('account');
if(storedaccount){
    account = JSON.parse(storedaccount);
    console.log(account);
}else{
    console.log("null");
}
$('.button-a').click(function(){
    if (account === undefined || account.length == 0) {
        $(this).attr('href','register.html');
    }
});