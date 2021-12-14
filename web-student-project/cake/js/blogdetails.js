

$(window).ready(function(){
let blogName = $("#name")
let blogEmail = $("#email")
let blogTitle = $("#title")
let blogNote = $("#note")
let blogSubmit = $("#blogSubmit")

let blogSubmitSuccess = $("button ~ .success")

let errblogName = $("#name ~ .error")
let errblogEmail = $("#email ~ .error")
let errblogTitle = $("#title ~ .error")
let errblogNote = $("#note ~ .error")

let errblogNameBool = true;
let errblogEmailBool = true;
let errblogTitleBool = true;
let errblogNoteBool = true;


blogSubmitSuccess.hide()
errblogName.hide()
errblogEmail.hide()
errblogTitle.hide()
errblogNote.hide()


blogName.focusout(function() {
    let str = $(this).val().trim();
    if(str.length < 1){
        errblogName.show();
        return errblogNameBool = true
    }

    errblogName.hide();
    errblogNameBool = false
})

blogEmail.focusout(function() {
    let str = $(this).val().trim();
    if(str.length < 1){
        errblogEmail.show();
        return errblogEmailBool = true
    }

    errblogEmail.hide();
    errblogEmailBool = false
})

blogTitle.focusout(function() {
    let str = $(this).val().trim();
    if(str.length < 1){
        errblogTitle.show();
        return errblogTitleBool= true
    }

    errblogTitle.hide();
    errblogTitleBool = false
})

blogNote.focusout(function() {
    let str = $(this).val().trim();
    if(str.length < 1){
        errblogNote.show();
        return errblogNoteBool = true
    }

    errblogNote.hide();
    errblogNoteBool = false
})

blogSubmit.submit(function(){
    return false
})

})