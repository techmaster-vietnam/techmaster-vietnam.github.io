function writeReview(){
    
}
var storeddetailsProductTitle= localStorage.getItem('detailsProductTitle');
var storedproducts= localStorage.getItem('products');
var detailsProductTitle=[];
var products=[];
if(storeddetailsProductTitle){
    detailsProductTitle = JSON.parse(storeddetailsProductTitle);
    console.log(detailsProductTitle);
}else{
    console.log("null");
}
if(storedproducts){
    products = JSON.parse(storedproducts);
    console.log(storedproducts);
}else{
    console.log("null");
}
renderThisPage();
function renderThisPage(){
    for(let i=0;i<products.length;i++){
        for(let j=0;j<detailsProductTitle.length;j++){
            if(detailsProductTitle[j]===products[i].title){
                console.log(1);
                $('.navigation-detailsproduct-1').html(products[i].title.toUpperCase());
                $('.left-detailsproduct-word').html(products[i].title);
                $('.left-detailsproduct-price').attr('data-value',products[i].price);
                $('.left-detailsproduct-price').html(products[i].price.toLocaleString('de-DE')+'đ');
                $('.right-detailsproduct-image').attr('src',products[i].imageURL);

            }
        }   
    }
   
        if(  $('.right-detailsproduct-image').attr('src')==='img/to-pho-truyen-thong.jpg'){
            $('.right-detailsproduct-image').addClass('pho-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/nuoc-chanh-tuoi.jpg'){
            $('.right-detailsproduct-image').addClass('nuocchanh-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/tumblr_otkk1qL0P71uyxczto1_500.png'){
            $('.right-detailsproduct-image').addClass('bunbo-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/Tra-Sua-Khoai-Mon.png'){
            $('.right-detailsproduct-image').addClass('bunbo-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/Spaghetti-PNG-Transparent-Image.png'){
            $('.right-detailsproduct-image').addClass('spaghetti-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
            $('.right-detailsproduct-image').addClass('friedchicken-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/ice_cream_PNG5096.png'){
            $('.right-detailsproduct-image').addClass('icecream-image');
        }
        if($('.right-detailsproduct-image').attr('src')==='img/comtam.jpg'){
            $('.right-detailsproduct-image').addClass('comtam-image');
        }
    
}

var addToCartProducts=[];
var storedaddToCartProducts= localStorage.getItem('addToCartProducts');
if(storedaddToCartProducts){
    addToCartProducts = JSON.parse(storedaddToCartProducts);
    console.log(addToCartProducts);
}else{
    console.log("null");
}
$('.right-detailsproduct-addtocart').one('click',function(){
    let check=false;
    let addToCartObject={
        imageURL:'',
        price:'',
        title:'',
        productCount:1,
        amount:1,
    }
    for(let i=0;i<addToCartProducts.length;i++){
        if( $('.left-detailsproduct-word').text()===addToCartProducts[i].title){
            check=true;
            break;
        }
    }   
    if(check===false){
        addToCartObject.imageURL=  $('.right-detailsproduct-image').attr('src');
        addToCartObject.price=   $('.left-detailsproduct-price').data('value');
        addToCartObject.title=  $('.left-detailsproduct-word').text();
        addToCartProducts.push(addToCartObject);
        localStorage.setItem("addToCartProducts", JSON.stringify(addToCartProducts));
    }
    
});