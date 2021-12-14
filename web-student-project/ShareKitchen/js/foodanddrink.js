$('.addtocart-button-container').each(function(){
    $(this).hover(function(){
        $(this).css('background-color','red');
        $(this).css('border','none');
        $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
    },function(){
        $(this).css('background-color','white');
        $(this).css('border','1px dashed black');
        $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
    });
    
});
$('.filter-image').click(function(){
    $('.filter-box').toggle();
});
$('.sort-image').click(function(){
    $('.sort-box').toggle();
});
var products=[];
(function($) {
    $('.shop-items').each(function(){
        let productObject={
            imageURL:'',
            price:'',
            title:'',
        }
        if($(this).parent().parent().parent().is($('.foodanddrink-desktop'))){
            productObject.imageURL=$(this).find('.product-image-1').attr('src');
            productObject.price=parseInt($(this).find('.shop-item-price').data('value'));
            productObject.title=$(this).find('.shop-item-title').text();
            products.push(productObject);
        }else{
            console.log('Fail :(');
        }
    });
    localStorage.setItem("products", JSON.stringify(products));
})(jQuery);
function filterFood(){
    $('.food').show();
    $('.drink').hide();
    $('.foodanddrink-desktop').children().find('.row').removeClass('row');
    $('.foodanddrink-tablet').children().find('.row').removeClass('row');
    $('.foodanddrink-desktop').children().addClass('flex-row');
    $('.foodanddrink-tablet').children().addClass('flex-row');
    $('.bunbo-desktop').removeClass('two');
    $('.bunbo-desktop').css('border-right-width','0');
    $('.hamburger-desktop').removeClass('two');
    $('.garan-desktop').removeClass('one');
    $('.friedchicken-tablet').css('border-right-width','1px');
    $('.friedchicken-tablet').css('border-bottom-width','0');
    $('.kemoc-desktop').removeClass('one');
    $('.kemoc-desktop').css('border-top-width','0');
    $('.kemoc-desktop').css('border-left-width','0');
    $('.kemoc-desktop').css('border-bottom-width','0');
    $('.kemoc-mobile').removeClass('five');
    $('.kemoc-mobile').css('border-bottom-width','0');
    $('.friedchicken-tablet').removeClass('three');
    $('.bunbo-tablet').removeClass('three');
    $('.bunbo-mobile').removeClass('five');
    $('.bunbo-mobile').css('border-bottom-width','0');
    $('.hamburger-tablet').removeClass('four');
    $('.hamburger-tablet').addClass('three');
    $('.comtam-tablet').css('border-top-width','0');
    $('.foodanddrink-tablet').children().addClass('flex-row');
}
function filterDrink(){
    $('.food').hide();
    $('.foodanddrink-desktop').children().find('.row').removeClass('row');
    $('.foodanddrink-tablet').children().find('.row').removeClass('row');
    $('.foodanddrink-desktop').children().addClass('flex-row');
    $('.foodanddrink-tablet').children().addClass('flex-row');
    $('.drink-1').removeClass('two');
    $('.drink-mobile-1').removeClass('five');
    $('.drink-mobile-2').removeClass('five two');
    $('.drink-mobile-1').css('border-bottom-width','0');
    $('.drink-1').removeClass('one');
    $('.drink-1-1').removeClass('four');
    $('.drink-1-1').css('border-right-width','0');
    $('.drink-1').css('border-right-width','0');
    $('.drink-2').removeClass('one');
    $('.drink-2').removeClass('two');
    $('.drink-2-2').removeClass('four');
    $('.drink').show();
}
var count=false;
var count1=false;
var count2=false;
var count3=false;
function clickCheckBox1(){
    
    let arrOne=[];
    $('.classOne').remove();
    $('.classTwo').remove();
    $('.classThree').remove();
    $('.classFour').remove();
    for(let i=0;i<products.length;i++){
        let productObject={
            imageURL:'',
            price:'',
            title:'',
        }
        if(0<=products[i].price && products[i].price < 15000){
            productObject.imageURL=products[i].imageURL;
            productObject.price=products[i].price;
            productObject.title=products[i].title;
            arrOne.push(productObject);
        }
    }
    $('.foodanddrink-desktop').children().children().toggle();
    if($('.input-price:eq(0)').prop('checked') === true && count===false){
        console.log(arrOne);
        for(let i=0;i<arrOne.length;i++){
            $('.shop-container').append("<div class='row classOne '>"+"<div class='shop-items five food'>"
            +"<img class='nuocchanh-image' src="+arrOne[i].imageURL+">"
            +"<div class='shop-item-details'>"
            +"<span class='shop-item-title'>"
            +arrOne[i].title
            +"</span>"
            +"<span class='shop-item-price' data-value="+arrOne[i].price+">"
            +arrOne[i].price.toLocaleString('de-DE')+'đ'
            +"</span>"
            +"<div class='addtocart-button-container'>"
            +"<img class='addtocart-image' src='img/shopping-cart-1.svg'>"
            +"</div>"
            +"</div>"
            +"</div>"
            +"</div>"
            );
        }
        count=true;
    }else{
        $('.shop-items').show();
    }
   
    $('.addtocart-button-container').each(function(){
        $(this).hover(function(){
            $(this).css('background-color','red');
            $(this).css('border','none');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
        },function(){
            $(this).css('background-color','white');
            $(this).css('border','1px dashed black');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
        });
        
    });
}
var conditionRemove=false;
function clickCheckBox2(){
    let arrOne=[];
    $('.classOne').remove();
    $('.classTwo').remove();
    $('.classThree').remove();
    $('.classFour').remove();
    
    for(let i=0;i<products.length;i++){
        let productObject={
            imageURL:'',
            price:'',
            title:'',
        }
        if(15000<=products[i].price && products[i].price < 30000){
            productObject.imageURL=products[i].imageURL;
            productObject.price=products[i].price;
            productObject.title=products[i].title;
            arrOne.push(productObject);
        }
    }
    $('.foodanddrink-desktop').children().children().toggle();
    if($('.input-price:eq(1)').prop('checked') === true && count1===false){
        console.log(arrOne);
        $('.shop-container').css({
            'display':'grid',
            'grid-template-columns':'repeat(3,400px)',
            'grid-gap':'0',
            'justify-content':'center',  
        });
        
        for(let i=0;i<arrOne.length;i++){
            $('.shop-container').append("<div class='row classTwo tap'>"+"<div class='shop-items five food'>"
            +"<img class=' image-lag' src="+arrOne[i].imageURL+">"
            +"<div class='shop-item-details'>"
            +"<span class='shop-item-title'>"
            +arrOne[i].title
            +"</span>"
            +"<span class='shop-item-price' data-value="+arrOne[i].price+">"
            +arrOne[i].price.toLocaleString('de-DE')+'đ'
            +"</span>"
            +"<div class='addtocart-button-container'>"
            +"<img class='addtocart-image' src='img/shopping-cart-1.svg'>"
            +"</div>"
            +"</div>"
            +"</div>"
            +"</div>"
            );
        }
        count1=true;
        $('.image-lag').each(function(){
            if($(this).attr('src')==='img/to-pho-truyen-thong.jpg'){
                $(this).addClass('pho-image');
            }
            if($(this).attr('src')==='img/nuoc-chanh-tuoi.jpg'){
                $(this).addClass('nuocchanh-image');
            }
            if($(this).attr('src')==='img/tumblr_otkk1qL0P71uyxczto1_500.png'){
                $(this).addClass('bunbo-image');
            }
            if($(this).attr('src')==='img/Tra-Sua-Khoai-Mon.png'){
                $(this).addClass('bunbo-image');
            }
            if($(this).attr('src')==='img/Spaghetti-PNG-Transparent-Image.png'){
                $(this).addClass('spaghetti-image');
            }
            if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
                $(this).addClass('spaghetti-image');
            }
            if($(this).attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
                $(this).addClass('friedchicken-image');
            }
            if($(this).attr('src')==='img/ice_cream_PNG5096.png'){
                $(this).addClass('icecream-image');
            }
            if($(this).attr('src')==='img/comtam.jpg'){
                $(this).addClass('comtam-image');
            }
          });
        
    }else{
        $('.shop-container').css({
            'display':'block',  
            'grid-template-columns':'none',
            'grid-gap':'none',
            'justify-content':'none',
        });
        $('.shop-items').show();
    }

    $('.addtocart-button-container').each(function(){
        $(this).hover(function(){
            $(this).css('background-color','red');
            $(this).css('border','none');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
        },function(){
            $(this).css('background-color','white');
            $(this).css('border','1px dashed black');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
        });
        
    });
}
function clickCheckBox3(){
    
    let arrOne=[];
    $('.classOne').remove();
    $('.classTwo').remove();
    $('.classThree').remove();
    $('.classFour').remove();
    for(let i=0;i<products.length;i++){
        let productObject={
            imageURL:'',
            price:'',
            title:'',
        }
        if(30000<=products[i].price && products[i].price < 50000){
            productObject.imageURL=products[i].imageURL;
            productObject.price=products[i].price;
            productObject.title=products[i].title;
            arrOne.push(productObject);
        }
    }
    $('.foodanddrink-desktop').children().children().toggle();
    if($('.input-price:eq(2)').prop('checked') === true && count2===false){
        console.log(arrOne);
        $('.shop-container').css({
            'display':'grid',
            'grid-template-columns':'repeat(1,400px)',
            'grid-gap':'0',
            'justify-content':'center',  
        });
        for(let i=0;i<arrOne.length;i++){
            $('.shop-container').append("<div class='row classThree tap'>"+"<div class='shop-items five food'>"
            +"<img class='image-lag' src="+arrOne[i].imageURL+">"
            +"<div class='shop-item-details'>"
            +"<span class='shop-item-title'>"
            +arrOne[i].title
            +"</span>"
            +"<span class='shop-item-price' data-value="+arrOne[i].price+">"
            +arrOne[i].price.toLocaleString('de-DE')+'đ'
            +"</span>"
            +"<div class='addtocart-button-container'>"
            +"<img class='addtocart-image' src='img/shopping-cart-1.svg'>"
            +"</div>"
            +"</div>"
            +"</div>"
            +"</div>"
            );
        }
        $('.image-lag').each(function(){
            if($(this).attr('src')==='img/to-pho-truyen-thong.jpg'){
                $(this).addClass('pho-image');
            }
            if($(this).attr('src')==='img/nuoc-chanh-tuoi.jpg'){
                $(this).addClass('nuocchanh-image');
            }
            if($(this).attr('src')==='img/tumblr_otkk1qL0P71uyxczto1_500.png'){
                $(this).addClass('bunbo-image');
            }
            if($(this).attr('src')==='img/Tra-Sua-Khoai-Mon.png'){
                $(this).addClass('bunbo-image');
            }
            if($(this).attr('src')==='img/Spaghetti-PNG-Transparent-Image.png'){
                $(this).addClass('spaghetti-image');
            }
            if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
                $(this).addClass('spaghetti-image');
            }
            if($(this).attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
                $(this).addClass('friedchicken-image');
            }
            if($(this).attr('src')==='img/ice_cream_PNG5096.png'){
                $(this).addClass('icecream-image');
            }
            if($(this).attr('src')==='img/comtam.jpg'){
                $(this).addClass('comtam-image');
            }
          });
        count2=true;
    }else{
        $('.shop-container').css({
            'display':'block',
            'grid-template-columns':'none',
            'grid-gap':'none',
            'justify-content':'none',
        });
        $('.shop-items').show();
    }

    $('.addtocart-button-container').each(function(){
        $(this).hover(function(){
            $(this).css('background-color','red');
            $(this).css('border','none');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
        },function(){
            $(this).css('background-color','white');
            $(this).css('border','1px dashed black');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
        });
        
    });
}
function clickCheckBox4(){
    
    let arrOne=[];
    $('.classOne').remove();
    $('.classTwo').remove();
    $('.classThree').remove();
    $('.classFour').remove();
    for(let i=0;i<products.length;i++){
        let productObject={
            imageURL:'',
            price:'',
            title:'',
        }
        if(50000<=products[i].price && products[i].price < 200000){
            productObject.imageURL=products[i].imageURL;
            productObject.price=products[i].price;
            productObject.title=products[i].title;
            arrOne.push(productObject);
        }
    }
    $('.foodanddrink-desktop').children().children().toggle();
    if($('.input-price:eq(3)').prop('checked') === true && count3===false){
        $('.shop-container').css({
            'display':'grid',
            'grid-template-columns':'repeat(2,400px)',
            'grid-gap':'0',
            'justify-content':'center',  
        });
        console.log(arrOne);
        for(let i=0;i<arrOne.length;i++){
            $('.shop-container').append("<div class='row classFour'>"+"<div class='shop-items five food'>"
            +"<img class='image-lag' src="+arrOne[i].imageURL+">"
            +"<div class='shop-item-details'>"
            +"<span class='shop-item-title'>"
            +arrOne[i].title
            +"</span>"
            +"<span class='shop-item-price' data-value="+arrOne[i].price+">"
            +arrOne[i].price.toLocaleString('de-DE')+'đ'
            +"</span>"
            +"<div class='addtocart-button-container'>"
            +"<img class='addtocart-image' src='img/shopping-cart-1.svg'>"
            +"</div>"
            +"</div>"
            +"</div>"
            +"</div>"
            );
        }
        $('.image-lag').each(function(){
            if($(this).attr('src')==='img/to-pho-truyen-thong.jpg'){
                $(this).addClass('pho-image');
            }
            if($(this).attr('src')==='img/nuoc-chanh-tuoi.jpg'){
                $(this).addClass('nuocchanh-image');
            }
            if($(this).attr('src')==='img/tumblr_otkk1qL0P71uyxczto1_500.png'){
                $(this).addClass('bunbo-image');
            }
            if($(this).attr('src')==='img/Tra-Sua-Khoai-Mon.png'){
                $(this).addClass('bunbo-image');
            }
            if($(this).attr('src')==='img/Spaghetti-PNG-Transparent-Image.png'){
                $(this).addClass('spaghetti-image');
            }
            if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
                $(this).addClass('spaghetti-image');
            }
            if($(this).attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
                $(this).addClass('friedchicken-image');
            }
            if($(this).attr('src')==='img/ice_cream_PNG5096.png'){
                $(this).addClass('icecream-image');
            }
            if($(this).attr('src')==='img/comtam.jpg'){
                $(this).addClass('comtam-image');
            }
          });
        count3=true;
    }else{
        $('.shop-container').css({
            'display':'block',
            'grid-template-columns':'none',
            'grid-gap':'none',
            'justify-content':'none',  
        });
        $('.shop-items').show();
    }

    $('.addtocart-button-container').each(function(){
        $(this).hover(function(){
            $(this).css('background-color','red');
            $(this).css('border','none');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
        },function(){
            $(this).css('background-color','white');
            $(this).css('border','1px dashed black');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
        });
        
    });
}
function sortLowToHigh(){
    $('.foodanddrink-desktop').children().children().children().remove();
    products.sort(function(a,b){
        return parseFloat(a.price) - parseFloat(b.price);
    });
    $('.shop-container').css({
        'display':'grid',
        'grid-template-columns':'repeat(3,400px)',
        'grid-gap':'0',
        'justify-content':'center',  
    });
    for(let i=0;i<products.length;i++){
        $('.shop-container').append("<div class='row'>"+"<div class='shop-items five food'>"
        +"<img class='image-lag' src="+products[i].imageURL+">"
        +"<div class='shop-item-details'>"
        +"<span class='shop-item-title'>"
        +products[i].title
        +"</span>"
        +"<span class='shop-item-price' data-value="+products[i].price+">"
        +products[i].price.toLocaleString('de-DE')+'đ'
        +"</span>"
        +"<div class='addtocart-button-container'>"
        +"<img class='addtocart-image' src='img/shopping-cart-1.svg'>"
        +"</div>"
        +"</div>"
        +"</div>"
        +"</div>"
        );
    }
    $('.image-lag').each(function(){
        if($(this).attr('src')==='img/to-pho-truyen-thong.jpg'){
            $(this).addClass('pho-image');
        }
        if($(this).attr('src')==='img/nuoc-chanh-tuoi.jpg'){
            $(this).addClass('nuocchanh-image');
        }
        if($(this).attr('src')==='img/tumblr_otkk1qL0P71uyxczto1_500.png'){
            $(this).addClass('bunbo-image');
        }
        if($(this).attr('src')==='img/Tra-Sua-Khoai-Mon.png'){
            $(this).addClass('bunbo-image');
        }
        if($(this).attr('src')==='img/Spaghetti-PNG-Transparent-Image.png'){
            $(this).addClass('spaghetti-image');
        }
        if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
            $(this).addClass('spaghetti-image');
        }
        if($(this).attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
            $(this).addClass('friedchicken-image');
        }
        if($(this).attr('src')==='img/ice_cream_PNG5096.png'){
            $(this).addClass('icecream-image');
        }
        if($(this).attr('src')==='img/comtam.jpg'){
            $(this).addClass('comtam-image');
        }
      });
      $('.addtocart-button-container').each(function(){
        $(this).hover(function(){
            $(this).css('background-color','red');
            $(this).css('border','none');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
        },function(){
            $(this).css('background-color','white');
            $(this).css('border','1px dashed black');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
        });
        
    });
}
function sortHighToLow(){
    $('.foodanddrink-desktop').children().children().children().remove();
    products.sort(function(a,b){
        return parseFloat(b.price) - parseFloat(a.price);
    });
    $('.shop-container').css({
        'display':'grid',
        'grid-template-columns':'repeat(3,400px)',
        'grid-gap':'0',
        'justify-content':'center',  
    });
    for(let i=0;i<products.length;i++){
        $('.shop-container').append("<div class='row'>"+"<div class='shop-items five food'>"
        +"<img class='image-lag' src="+products[i].imageURL+">"
        +"<div class='shop-item-details'>"
        +"<span class='shop-item-title'>"
        +products[i].title
        +"</span>"
        +"<span class='shop-item-price' data-value="+products[i].price+">"
        +products[i].price.toLocaleString('de-DE')+'đ'
        +"</span>"
        +"<div class='addtocart-button-container'>"
        +"<img class='addtocart-image' src='img/shopping-cart-1.svg'>"
        +"</div>"
        +"</div>"
        +"</div>"
        +"</div>"
        );
    }
    $('.image-lag').each(function(){
        if($(this).attr('src')==='img/to-pho-truyen-thong.jpg'){
            $(this).addClass('pho-image');
        }
        if($(this).attr('src')==='img/nuoc-chanh-tuoi.jpg'){
            $(this).addClass('nuocchanh-image');
        }
        if($(this).attr('src')==='img/tumblr_otkk1qL0P71uyxczto1_500.png'){
            $(this).addClass('bunbo-image');
        }
        if($(this).attr('src')==='img/Tra-Sua-Khoai-Mon.png'){
            $(this).addClass('bunbo-image');
        }
        if($(this).attr('src')==='img/Spaghetti-PNG-Transparent-Image.png'){
            $(this).addClass('spaghetti-image');
        }
        if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
            $(this).addClass('spaghetti-image');
        }
        if($(this).attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
            $(this).addClass('friedchicken-image');
        }
        if($(this).attr('src')==='img/ice_cream_PNG5096.png'){
            $(this).addClass('icecream-image');
        }
        if($(this).attr('src')==='img/comtam.jpg'){
            $(this).addClass('comtam-image');
        }
      });
      $('.addtocart-button-container').each(function(){
        $(this).hover(function(){
            $(this).css('background-color','red');
            $(this).css('border','none');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-2.svg'); // this is the current parent div that i am reference to, using to find the chidlden div
        },function(){
            $(this).css('background-color','white');
            $(this).css('border','1px dashed black');
            $(this).find('.addtocart-image').attr('src','img/shopping-cart-1.svg');
        });
        
    });
}
var addToCartProducts=[];
var productCounts=0;
$('.addtocart-button-container').one('click',function(event){
    productCounts++;
    if(productCounts===0){
        console.log(':(');
    }else{
        $('.addToCart').find('.productCount').html(productCounts);
    }
  
    let e = $(event.target);
    let addToCartObject={
        imageURL:'',
        price:'',
        title:'',
        productCount:'',
        amount:1,
    }
    if(e != null){
        addToCartObject.price=parseInt(e.parent().parent().find('.shop-item-price').data('value'));
        addToCartObject.title=e.parent().parent().find('.shop-item-title').text();
        addToCartObject.imageURL=e.parent().parent().parent().find('.product-image-1').attr('src');
        console.log(e.parent().parent().parent().find('.product-image-1'));
        addToCartObject.productCount=productCounts;
        console.log(addToCartObject);
        addToCartProducts.push(addToCartObject);
    }
    localStorage.setItem("addToCartProducts", JSON.stringify(addToCartProducts));
});
var detailsProductTitle=[];
$('.product-image').click(function(){
    e= $(event.target);
    let title;
    if(e!=null){
        title= e.parent().parent().find('.shop-item-title').text();
        detailsProductTitle.push(title);
        localStorage.setItem("detailsProductTitle", JSON.stringify(detailsProductTitle));
    }
});







