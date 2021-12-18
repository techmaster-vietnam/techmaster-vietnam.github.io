
var url_string = window.location.href;
var url = new URL(url_string);
var donatorURL = url.searchParams.get("donator");
var partnerURL = url.searchParams.get("partner");
var moneyURL = url.searchParams.get("amount");
var moneypartner;
var moneydonator;
console.log(donatorURL,partnerURL,moneyURL);
if(donatorURL==='true'){
    moneydonator=moneyURL;
    localStorage.setItem('moneydonator',JSON.stringify(moneydonator));
    console.log(moneydonator);
}


if(partnerURL==='true'){
    moneypartner=moneyURL;
    localStorage.setItem('moneypartner',JSON.stringify(moneypartner));
}


function changeBorder1(){
    $('.visa-container').toggleClass('visa-container-origin').toggleClass('visa-container-change');
}
function changeBorder2(){
    $('.mastercard-container').toggleClass('mastercard-container-origin').toggleClass('mastercard-container-change');
}
function changeBorder3(){
    $('.paypal-container').toggleClass('paypal-container-origin').toggleClass('paypal-container-change');
}