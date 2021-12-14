function isEmail(inputEmail) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([Aa-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(inputEmail);
}

function validatePassword(inputPassword) {
    return inputPassword.length > 4;
}

$(document).ready(function(){
    $('#email').change(function(){
        let email = $(this).val().trim();
        if(!isEmail(email)) {

            $(".emailError").html("Email is not valid format");

        }else {
            $(".emailError").html("");
        }
    });

    $('#password').change(function(){

        let password = $(this).val();
        if(!validatePassword(password)) {

            $(".passwordError").html("Password must be at least 5 characters");

        }else {
            $(".passwordError").html("");
        }
        
    });

});


