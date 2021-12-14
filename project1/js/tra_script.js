$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            },
            
        }
    })
});

$(document).ready(function(){
    var new_cart_data;
    var quantity_prod = 1;
    var all_cart;
    var id_cart;
    var content_cart;
    var price_cart;

    var getSourceImg = function(){
        var pathname = window.location.pathname;
        console.log(111,pathname);
        if(pathname == "/project1/chitiet.html") {
            return "img/banhngot/1.png";
        }
        else if (pathname == "/project1/chitietnuocep.html") {
            return "img/nuocep/4.png";
        }
        else if (pathname == "/project1/chitiettra.html") {
            return "img/tra/12.png";
        }
        else if (pathname == "/project1/chitietsinhto.html") {
            return "img/sinhto/1.png";
        }
        else {
            return "img/coffee/1.png";
        }
    }

    $('#btn').click(function() {
        id_cart = 1;
        quantity_cart = $("#quantity_prod").val();
        price_cart = 39000 * quantity_cart;
        content_cart = getSourceImg();
        $("#giohang_link a span").text(quantity_cart);
    });
    

    $("#btn").one("click", function() {

        // var win = window.open("http://127.0.0.1:5500/giohang.html?id_cart=" + id_cart + "&quantity_cart=" + quantity_cart + "&price_cart=" + price_cart.toString());
    });

    $('#btn1').click(function() {
        id_cart = 1;
        quantity_cart = $("#quantity_prod").val();
        price_cart = 39000 * quantity_cart;
        content_cart = getSourceImg();
        console.log(222, content_cart);
        var win = window.open("https://cuongpc206.github.io/project1/thanhtoan.html?id_cart=" + id_cart + "&quantity_cart=" + quantity_cart + "&price_cart=" + price_cart.toString() + "&content_cart=" + content_cart);
    });

    $("#plus_prod").click(function(){
        quantity_prod += 1;
        $("#quantity_prod").val(quantity_prod.toString());
        
    });

    $("#minus_prod").click(function(){
        quantity_prod -= 1;
        if(quantity_prod < 0) {
            quantity_prod = 0;
        }
        $("#quantity_prod").val(quantity_prod.toString());
    });

    $("#giohang_link a").click(function(){
        var win = window.open("https://cuongpc206.github.io/project1/giohang.html?id_cart=" + id_cart + "&quantity_cart=" + quantity_cart + "&price_cart=" + price_cart.toString() + "&content_cart=" + content_cart);
    });

});
