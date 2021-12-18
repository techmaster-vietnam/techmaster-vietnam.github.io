
var addToCartProducts=[];
var storedaddToCartProducts= localStorage.getItem('addToCartProducts');
if(storedaddToCartProducts){
    addToCartProducts = JSON.parse(storedaddToCartProducts);
    console.log(addToCartProducts);
}else{
    console.log("null");
}
function renderaddToCartProducts(){
    for(let i=0;i<addToCartProducts.length;i++){
        $('.addtocart-container').append("<div class='addtocart-container-content'>"
        +"<div class='image-container'>"
        +"<img src="+addToCartProducts[i].imageURL+" class='image-lag'>"
        +"</div>"
        +"<span class='chicken-word'>"+addToCartProducts[i].title
        +"</span>"
        +"<span class='price-chicken'>"+addToCartProducts[i].price.toLocaleString('de-DE')+'đ'
        +"</span>"
        +"<div class='quantity'>"
        +"<input type='number' min='1' max='9' step='1' value='1'>"
        +"</div>"
        +"<img class='bin' src='img/rubbish-bin.svg' onclick='deleteProduct(\"" +addToCartProducts[i].title+"\")'>"
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
      if($(this).attr('src')==='img/fried-chicken-png-11552945573sn657hxomw.png'){
          $(this).addClass('friedchicken-image');
      }
      if($(this).attr('src')==='img/ice_cream_PNG5096.png'){
          $(this).addClass('icecream-image');
      }
      if($(this).attr('src')==='img/comtam.jpg'){
          $(this).addClass('comtam-image');
      }  
      if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
        $(this).addClass('spaghetti-image');
    }
    });
    
  
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
        for(let i=0;i<addToCartProducts.length;i++){
            addToCartProducts[i].amount=$(':input[type="number"]').eq(i).val();
        }
        localStorage.setItem("addToCartProducts", JSON.stringify(addToCartProducts));  
        renderPrice();
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
        for(let i=0;i<addToCartProducts.length;i++){
            addToCartProducts[i].amount=$(':input[type="number"]').eq(i).val();
        }
        localStorage.setItem("addToCartProducts", JSON.stringify(addToCartProducts));  
        renderPrice(); 
      });
      
    });  
    
}
renderaddToCartProducts();
function deleteProduct(title){
    let e= $(event.target);
    for(let i=0;i<addToCartProducts.length;i++){
        if(addToCartProducts[i].title===title){
            addToCartProducts.splice(i,1);
            i--;
        }
    }
    if(e!= null){
        e.parent().remove();
        renderPrice();
    }
    localStorage.setItem("addToCartProducts", JSON.stringify(addToCartProducts));   
   
}
renderPrice();
function renderPrice(){
    let totalPrice=0;
    let realPrice=0;
    let tax=0;
    let deliveryFee=0;
    let coupon=0;
    for(let i=0;i<addToCartProducts.length;i++){
        realPrice+=addToCartProducts[i].price*addToCartProducts[i].amount;
    }
    tax= realPrice*0.05;
    $('.realPrice').html(realPrice.toLocaleString('de-DE')+'đ');
    $('.realtax').html(tax.toLocaleString('de-DE')+'đ');
    deliveryFee=$('.realpriceforDelivery').data('value');
    totalPrice=realPrice+tax+deliveryFee-coupon;
    $('.realtotalprice').html(totalPrice.toLocaleString('de-DE')+'đ');
}
