$(function () {
    $('#btn-header-user').click(function () {
        $('.signin-signup-area').slideToggle('slow');
    });

    $('#btn-header-user-left').click(function() {
        $('.signin-signup-area').slideToggle('slow');
    })

    $('.btn-exit-signin-signup').click(function () {
        $('.signin-signup-area').slideToggle('slow');
    })

    $('.turn-signup').click(function () {
        $('.signup').show();
        $('.signin').hide();
        $('.signin-signup-area input:text').val('');
    })

    $('.turn-signin').click(function () {
        $('.signin').show();
        $('.signup').hide();
        $('.signin-signup-area input:text').val('');
    })

    $('#header-hamburger').click(function() {
        $('.header-left').addClass('dp-block');
        $('.header-cover-screen').show();
    })
    $('.header-cover-screen').click(function() {
        $('.header-cover-screen').hide();
        $('.header-left').removeClass('dp-block');
    })
});

$('#submit-signin').click(function() {
    var unSignin = document.getElementById('username-signin');
    var pwSignin = document.getElementById('password-signin');
    console.log(pwSignin.validity);

    if(unSignin.validity.valueMissing) {
        unSignin.setCustomValidity('Vui lòng điền Email/SĐT.');
        unSignin.reportValidity();
    }
    else {
        unSignin.setCustomValidity('');
        unSignin.reportValidity();
    }
    if(pwSignin.validity.valueMissing) {
        pwSignin.setCustomValidity('Vui lòng điền Mật khẩu.');
        pwSignin.reportValidity();
    }
    else if (pwSignin.validity.tooShort || pwSignin.validity.tooLong) {
        pwSignin.setCustomValidity('Vui lòng điền đúng Mật khẩu (6~15 ký tự).');
        pwSignin.reportValidity();
    }
    else {
        pwSignin.setCustomValidity('');
        pwSignin.reportValidity();
    }
})

$('#submit-signup').click(function() {
    var unSignup = document.getElementById('username-signup');
    var pwSignup = document.getElementById('password-signup');

    if(unSignup.validity.valueMissing) {
        unSignup.setCustomValidity('Vui lòng điền Email/SĐT.');
        unSignup.reportValidity();
    }
    else {
        unSignup.setCustomValidity('');
        unSignup.reportValidity();
    }
    if(pwSignup.validity.valueMissing) {
        pwSignup.setCustomValidity('Vui lòng điền Mật khẩu.');
        pwSignup.reportValidity();
    }
    else if (pwSignup.validity.tooShort || pwSignup.validity.tooLong) {
        pwSignup.setCustomValidity('Vui lòng điền đúng Mật khẩu (6~15 ký tự).');
        pwSignup.reportValidity();
    }
    else {
        pwSignup.setCustomValidity('');
        pwSignup.reportValidity();
    }

    if(!$('#checkbox-signup').checked) {
        console.log('error');
        $('#checkbox-checkmark').css('background','red');
    }
})
