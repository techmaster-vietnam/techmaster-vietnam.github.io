

// $('.click-here').click(function(){
// 	alert("dsad");

// 			$('div.text-content').addClass('show');

// 		})

function show(){
  $('div.text-content').addClass('show');
}

$(window).scroll(function () {
  var top=$(window).scrollTop();
  if (top > 100) {
   $("#back-to-top").addClass('active');
 } else {
   $("#back-to-top").removeClass('active');
 }
});

$(document).ready(function(){
 $("#back-to-top").click(function () {
   $("html, body").animate({ scrollTop: 0 }, "slow");
   return false;
 });
});

$('.openmaps').click(function(){

 $('.maps').addClass('maps2');

});


// Lấy phần Modal


      // Lấy đường dẫn của hình ảnh và gán vào trong phần Modal
      var img = $('.myImg');
      var modalImg = document.getElementsByClassName("img01");
      img.each(function(){
        var _this = $(this);
        var modal = $(this).children(".modal"); 
        $(this).on('click',function(){                         
          modal.css('display','block');
          modal.children('.modal-content').attr("src",_this.children('img').src) ;
        })
        
      });

      // lấy button span có chức năng đóng Modal
      var span = document.getElementsByClassName("close")[0];

      //Khi button được click, đóng modal
      span.onclick = function() { 
        modal.style.display = "none";
      }



 


