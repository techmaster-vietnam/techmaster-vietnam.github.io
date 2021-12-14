$('#content-message').on('submit', function () {
    let isValid = true;
    if ($('#fullname').val().match(/^([ \u00c0-\u01ffa-zA-Z'])+$/) == null || $('#fullname').val().length <= 1) {
        $('#fullname').next('span').text("Bạn cần phải điền tên");
        isValid = false;
    } else {
        $('#fullname').next('span').text("");
    }
    if (
        $('#phonenumber').val().match(/[0-9]{10,10}/g) == null || $('#phonenumber').val()[0] !== "0") {
        $('#phonenumber').next('span').text("Số điện thoại bạn nhập chưa đúng");
        isValid = false;
    } else {
        $('#phonenumber').next('span').text("");
    }
    if ($('#email').val().match(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/) == null) {
        $('#email').next('span').text("Email có dạng abc@gmail.com");
        isValid = false;
    } else {
        $('#email').next('span').text("");
    }
    if ($('#content').val().length <= 1) {
        $('#content').next('span').text("Bạn chưa để lại tin nhắn");
        isValid = false;
    } else {
        $('#content').next('span').text("");
    }
    return isValid;
})