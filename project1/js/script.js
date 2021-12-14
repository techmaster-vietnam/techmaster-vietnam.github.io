var new_cart_data;
var quantity_cart;
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

// giỏ hàng

$(document).ready(function() {
    var quantity_prod = 1;
    var all_cart;
    var id_cart;
    var content_cart;
    var price_cart;

    var getSourceImg = function(){
        var pathname = window.location.pathname;
        console.log(pathname);
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

    $("#cart_body").append(new_cart_data);

    $("#btn").one("click", function() {
        id_cart = 1;
        quantity_cart = $("#quantity_prod").val();
        price_cart = 39000 * quantity_cart;
        content_cart = getSourceImg();

        // var win = window.open("http://127.0.0.1:5500/giohang.html?id_cart=" + id_cart + "&quantity_cart=" + quantity_cart + "&price_cart=" + price_cart.toString());
    });

    $('#btn1').click(function() {
        id_cart = 1;
        quantity_cart = $("#quantity_prod").val();
        price_cart = 39000 * quantity_cart;
        content_cart = getSourceImg();
        var win = window.open("https://cuongpc206.github.io/project1/thanhtoan.html?id_cart=" + id_cart + "&quantity_cart=" + quantity_cart + "&price_cart=" + price_cart.toString() + "&content_cart=" + content_cart);
    });

    $("#giohang_link a").click(function(){
        var win = window.open("https://cuongpc206.github.io/project1/giohang.html?id_cart=" + id_cart + "&quantity_cart=" + quantity_cart + "&price_cart=" + price_cart.toString() + "&content_cart=" + content_cart);
    });

    
    $("#back_to_main_dashboard").click(function(){
        window.open("https://cuongpc206.github.io/project1/index.html", "_self");
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

    var prnum = $('.num').text();
    $('.inc').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num').text(prnum);
            $('.cart .fa').attr('data-before', prnum);
        }

    });
    $('.dec').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num').text(prnum);
            $('.cart .fa').attr('data-before', prnum);
        }

    });

});

// mua ngay

$(document).ready(function() {

    var prnum = $('.num1').text();
    $('.inc1').click(function() {
        if (prnum > 0) {
            prnum++;
            $('.num1').text(prnum);
            $('.cart1 .fa1').attr('data-before1', prnum);
        }

    });
    $('.dec1').click(function() {
        if (prnum > 1) {
            prnum--;
            $('.num1').text(prnum);
            $('.cart1 .fa1').attr('data-before1', prnum);
        }

    });

});

$(document).ready(function(){
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var id_cart_c = getUrlParameter("id_cart");
    var quantity_cart_c = getUrlParameter("quantity_cart");
    var price_cart_c = numberWithCommas(getUrlParameter("price_cart"));
    var content_cart_c = getUrlParameter("content_cart");
    if(quantity_cart == 0){
        new_cart_data = undefined;
    }else {
        new_cart_data = "<tr><th scope=\"row\">" + id_cart_c + "</th><td><img src=\"" + content_cart_c + "\" class=\"img-fluid\" alt=\"1\"></td><td>" + quantity_cart_c + 
        "</td><td>" + price_cart_c + "</td></tr>";
    }
    
    $("#cart_body").append(new_cart_data);

    $("#deal_action").click(function(){
        var win = window.open("https://cuongpc206.github.io/project1/thanhtoan.html?id_cart=" + id_cart_c + "&quantity_cart=" + quantity_cart_c + "&price_cart=" + price_cart_c.toString() + "&content_cart=" + content_cart_c);
    }); 

    var new_deal = "<tr><th scope=\"row\">" + id_cart_c + "</th><td><img src=\"" + content_cart_c + "\" class=\"img-fluid\" alt=\"1\"></td><td>" + quantity_cart_c + 
    "</td><td>" + price_cart_c + "</td></tr>";

    $("#deal_body").append(new_deal);
});



