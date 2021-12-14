function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
function initMenu() {
    $('.overlay-content-menu ul').hide(); 
    $('.overlay-content-menu > li > a').on('click', function() {
        $('.overlay-content-menu ul').slideUp();
        $(this).next().slideDown();
    });
}
$(document).ready(initMenu);