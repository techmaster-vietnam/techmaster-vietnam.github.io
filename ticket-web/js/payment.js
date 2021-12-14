$( document ).ready(function() {
    $(".cardnumber").on("focus", function(){
        $(this).on("keyup", function(){
            if ( $(this).val().length == 4 ) {
                $(this).blur();
                $(this).next().focus()
            }
        })
    })
});