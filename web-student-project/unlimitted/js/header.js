

/*--------------------------------check tai khoan---------------------------------*/

var user=[{name:'phantri@gmail.com', password:"12345"},{name:'phantri2@gmail.com', password:"12345"},{name:'phantri3@gmail.com', password:"12345"}];
localStorage.setItem("user", JSON.stringify(user));
obj=JSON.parse(localStorage.getItem("user"));
var userLogin=JSON.parse(localStorage.getItem("userLogin"))
let formEle = document.getElementById('login-click');
let userName;
let userPassword;
let userNumber;
if (userLogin){
    userName=userLogin.name;
    userNumber=userLogin.number;
    document.querySelector(".nav-login-button").style.display="none";
}
formEle.addEventListener('submit', function(e) {
    e.preventDefault()
    userName=document.getElementById("name").value;
    userPassword=document.getElementById("pass").value;
    console.log(userName);
    console.log(userPassword);
    userNumber = checkTaiKhoan(userName, userPassword, obj)
    var userLogin={
        name:userName,
        number:userNumber,
    }
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
})

function checkTaiKhoan(userName, userPassword, obj){
    if(userName==obj[0]['name']&&userPassword==obj[0]['password']){
        userNumber = 1;
        $('#exampleModal').modal('hide');
        $('.modal-backdrop').css('display','none');
        $(".yeu-cau-box2").css("display","block");
        $(".nav-profile").css("display","block"); 
        document.querySelector(".nav-login-button").style.display="none";
    }
    else if(userName==obj[1]['name']&&userPassword==obj[1]['password']){
        userNumber=2;
        $('#exampleModal').modal('hide')
        $('.modal-backdrop').css('display','none')
        $(".nav-profile").css("display","block"); 
        document.querySelector(".nav-login-button").style.display="none";
    }
    else if(userName==obj[2]['name']&&userPassword==obj[2]['password']){
        userNumber=3;
        $('#exampleModal').modal('hide')
        $('.modal-backdrop').css('display','none')
        $(".nav-profile").css("display","block"); 
        document.querySelector(".nav-login-button").style.display="none";      
    }
    else {
        userNumber=4;
        $('#login-miss').text("Tài khoản hoặc mật khẩu không đúng")
    }       
    return userNumber 
}
/*--------------------------------check profile---------------------------------*/
$('.nav-profile').on("click", showProfile);
function showProfile(){
    if(userNumber==1){
        if ($('#profile1').hasClass('profileb')) {
            $('#profile1').removeClass('profileb');
        } 
        else {
            $('#profile1').addClass('profileb');
        }
    }
    else if(userNumber==2){
        if ($('#profile2').hasClass('profileb')) {
            $('#profile2').removeClass('profileb');
        } 
        else {
            $('#profile2').addClass('profileb');
        }
    }
    else if(userNumber==3){
        if ($('#profile3').hasClass('profileb')) {
            $('#profile3').removeClass('profileb');
        } 
        else {
            $('#profile3').addClass('profileb');
        }
    }
}
$('#dang-xuat-btn1').on("click", dangXuat);
$('#dang-xuat-btn2').on("click", dangXuat);
$('#dang-xuat-btn3').on("click", dangXuat);
function dangXuat(){
    localStorage.clear('userLogin');
    window.location.reload();
}
/*--------------------------------link mua vip svip---------------------------------*/

$('#close-tab').on("click", closeFilter);
function closeFilter(){
        $('.filter-box').addClass('filter-box-a');
}
$('.search-button').on("click", closeFilter);
$('#filter-on-off').on("click", closeFilter2);
function closeFilter2(){
    if ($('.filter-box').hasClass('filter-box-a')) {
        $('.filter-box').removeClass('filter-box-a');
        $('.filter-box').addClass('filter-box-b');
    } 
    else {
        $('.filter-box').removeClass('filter-box-b');
        $('.filter-box').addClass('filter-box-a');
    }
}
$('.phan-loai-box-1').on("click", phanLoaiCheck1);
function phanLoaiCheck1(){
    $(".filter-check-1").css("display", "block");
}
$('.phan-loai-box-2').on("click", phanLoaiCheck2);
function phanLoaiCheck2(){
    $(".filter-check-2").css("display", "block");
}
$('.phan-loai-box-3').on("click", phanLoaiCheck3);
function phanLoaiCheck3(){
    $(".filter-check-3").css("display", "block");
}
$('.phan-loai-box-4').on("click", phanLoaiCheck4);
function phanLoaiCheck4(){
    $(".filter-check-4").css("display", "block");
}



$('.color-box1').on("click", colorCheck1);
function colorCheck1(){
    $(".color-check-1").css("display", "block");
}
$('.color-box2').on("click", colorCheck2);
function colorCheck2(){
    $(".color-check-2").css("display", "block");
}
$('.color-box3').on("click", colorCheck3);
function colorCheck3(){
    $(".color-check-3").css("display", "block");
}
$('.color-box4').on("click", colorCheck4);
function colorCheck4(){
    $(".color-check-4").css("display", "block");
}
$('.color-box5').on("click", colorCheck5);
function colorCheck5(){
    $(".color-check-5").css("display", "block");
}
$('.color-box6').on("click", colorCheck6);
function colorCheck6(){
    $(".color-check-6").css("display", "block");
}
$('.color-box7').on("click", colorCheck7);
function colorCheck7(){
    $(".color-check-7").css("display", "block");
}
$('.color-box8').on("click", colorCheck8);
function colorCheck8(){
    $(".color-check-8").css("display", "block");
}
$('.color-box9').on("click", colorCheck9);
function colorCheck9(){
    $(".color-check-9").css("display", "block");
}
$('.color-box10').on("click", colorCheck10);
function colorCheck10(){
    $(".color-check-10").css("display", "block");
}



$('.ty-le-check1').on("click", tyLeCheck1);
$('.ty-le-check-text1').on("click", tyLeCheck1);
function tyLeCheck1(){
    $(".ty-le-check-icon-1").css("display", "block");
}
$('.ty-le-check2').on("click", tyLeCheck2);
$('.ty-le-check-text2').on("click", tyLeCheck2);
function tyLeCheck2(){
    $(".ty-le-check-icon-2").css("display", "block");
}
$('.ty-le-check3').on("click", tyLeCheck3);
$('.ty-le-check-text3').on("click", tyLeCheck3);
function tyLeCheck3(){
    $(".ty-le-check-icon-3").css("display", "block");
}
$('.ty-le-check4').on("click", tyLeCheck4);
$('.ty-le-check-text4').on("click", tyLeCheck4);
function tyLeCheck4(){
    $(".ty-le-check-icon-4").css("display", "block");
}


$('.filter-bo-loc').on("click", xoaBoLoc);
function xoaBoLoc(){
    $(".filter-check").css("display", "none"); 
    $(".ty-le-check ").css("display", "none");  
    
}

$('.dong-y-dang-nhap').on("click", showDangnhap);
function showDangnhap(){
    $('#exampleModal').modal('show');
    $(".yeu-cau-box").css("display","none");     
}
$('.tai-ve-mien-phi').on("click", yeuCauDangnhap);
function yeuCauDangnhap(){
    if(userNumber==1||userNumber==2||userNumber==3){
        $(".tai-xuong-thanh-cong").css("display","block");        
    }
    else{
        $(".yeu-cau-box").css("display","block");     
    }  
}

$('.link-toi-dang-nhap').on("click", linkDangnhap);
function linkDangnhap(){
    if(userNumber==1){
        $("html, body").animate({scrollTop: 0}, 1000);
        if ($('#profile1').hasClass('profileb')) {
            $('#profile1').removeClass('profileb');
        } 
        else {
            $('#profile1').addClass('profileb');
        }
    }
    else if(userNumber==2){
        $("html, body").animate({scrollTop: 0}, 1000);
        if ($('#profile2').hasClass('profileb')) {
            $('#profile2').removeClass('profileb');
        } 
        else {
            $('#profile2').addClass('profileb');
        }
    }
    else if(userNumber==3){
        $("html, body").animate({scrollTop: 0}, 1000);
        if ($('#profile3').hasClass('profileb')) {
            $('#profile3').removeClass('profileb');
        } 
        else {
            $('#profile3').addClass('profileb');            
        }
    }
    else{
        $('#exampleModal').modal('show');
    }

}


/*----------------------login-vip--------------------*/

$('.tai-ve-mien-phi2').on("click", yeuCauDangnhap2);
function yeuCauDangnhap2(){
    if(userNumber==2||userNumber==3){
        $(".tai-xuong-thanh-cong").css("display","block");        
    }
    else if(userNumber==1){
        $(".yeu-cau-box2").css("display","block");
    }
    else{
        $(".yeu-cau-box1").css("display","block");
        
    }  
}
$('.dong-y-dang-nhap1').on("click", showDangnhap1);
function showDangnhap1(){
    $('#exampleModal').modal('show');
    $(".yeu-cau-box1").css("display","none");     
}

$('.thanh-toan-button').on("click", thanhToan);
function thanhToan(){
    if(userNumber==1||userNumber==2||userNumber==3){
        $('.tai-khoan-ngan-hang').html('<div><p class="small chuc-mung">Chúc mừng bạn đã thanh toán thành công!</p>')       
    }
    else{
        $('#exampleModal').modal('show');
    }
}


if(userNumber!=1&userNumber!=2&userNumber!=3){
    $(".nav-profile").css("display","none");  
}






















