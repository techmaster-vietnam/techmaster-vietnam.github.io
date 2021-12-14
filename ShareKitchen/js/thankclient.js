
var addToCartProducts=[];
var storedaddToCartProducts= localStorage.getItem('addToCartProducts');
if(storedaddToCartProducts){
    addToCartProducts = JSON.parse(storedaddToCartProducts);
    console.log(addToCartProducts);
}else{
    console.log("null");
}
renderThankClient();
function renderThankClient(){
    $('.form-thank-content-1').css('height','100%');
    for(let i=0;i<addToCartProducts.length;i++){
        $('.table-thankclient-desktop').append(
        '<tr>'
        +'<th class="image-1">'   +"<img src="+addToCartProducts[i].imageURL+" class='image-lag'>"+'</th>'
        +'<th>'+'x'+'</th>'
        +'<th>'+addToCartProducts[i].amount+'</th>'
        +'</tr>'
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
        }  if($(this).attr('src')==='img/Download-Hamburger-Transparent-Background.png'){
          $(this).addClass('spaghetti-image');
      }
      });
}