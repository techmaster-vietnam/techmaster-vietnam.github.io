var account=[];
var url_string = window.location.href;
var url = new URL(url_string);
var emailURL = url.searchParams.get("email");
var passwordURL = url.searchParams.get("password");
var donatorURL = url.searchParams.get("Tài trợ");
var partnerURL = url.searchParams.get("Đối tác");
getAcc();
function getAcc(){
let accountObject={
    email:'',
    password:'',
    donator:'',
    partner:'',
};
accountObject.email= emailURL;
accountObject.password=passwordURL;
if(donatorURL==='on'){
    accountObject.donator='Tài trợ'
}
if(partnerURL==='on'){
    accountObject.donator='Đối tác'
}
account.push(accountObject);
localStorage.setItem("account", JSON.stringify(account));
}