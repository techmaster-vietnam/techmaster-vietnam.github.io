
$('.register-form').on('submit',function(){
   
    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test($('#email').val())===false){
        $('#email').next('span').text('Email không hợp lệ');
        isValid=false;
        console.log(1);
    }else{
        $('#email').next('span').text('');
    }
    const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(passwordRegex.test($('#password').val())===false){
        $('#password').next('span').text('Password nên có 1 chữ số, 1 chữ thường, 1 chữ hoa, 8 kí tự');
        isValid=false;
    }else{
        $('#password').next('span').text('');
    }
    return isValid;
});