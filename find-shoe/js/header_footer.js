// Plugin ChatBox

window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v3.3'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));




// 










// Fix-Header

let nav=document.getElementById('header_responsive');
let backtotop=document.getElementById('backtotop');

window.onscroll=function(){

    if(window.pageYOffset>1000){
        backtotop.style.display='block';
    }
    else{
        backtotop.style.display='none';
    }


    if(window.pageYOffset>200){
        nav.style.position="fixed";
        nav.style.top=0;
        nav.style.zIndex=1000;
        nav.style.background="#ce2a2a";
        


    }

    else{
        nav.style.position="relative";
        nav.style.zIndex="unset";
        nav.style.background="";

    }
}





// 





// Search 

function search_responsive() {
    let x = document.getElementById('input_search');

    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }



}

// 




// Modal

$('.message a').click(function () {
    $('.form_1').animate({
        height: "toggle",
        opacity: "toggle"
    }, "slow");
});


function login() {

    let a = document.getElementById('login-page');

    if (a.style.display === 'block') {
        a.style.display = 'none'
    } else {
        a.style.display = 'block';
    }
    document.getElementById('fullscreen').style.visibility = 'visible';
    document.getElementById('fullscreen').style.opacity = 1;
    document.getElementById('fullscreen').style.zIndex = 1000;

}


function off() {
    let a = document.getElementById('login-page');

    if (a.style.display === 'block') {
        a.style.display = 'none'
    }

    document.getElementById('fullscreen').style.visibility = 'hidden';
    document.getElementById('fullscreen').style.opacity = 0;
    document.getElementById('fullscreen').style.zIndex = -1000;

}





// 



























