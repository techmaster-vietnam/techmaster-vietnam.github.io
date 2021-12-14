(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// details
var Chef = {
    init: function() {
        this.productImagePreview();
        this.menuToggle();
        this.misc();
    },
    
    productImagePreview: function() {
        $(document).on('click', '.product-images li', function() {
            if (!$(this).hasClass('preview')) {
                var src = $(this).find('img').attr('src');
                $('.product-images .preview img').attr('src', src);
            }
        });
    },
    
    menuToggle: function() {
        $(document).on('click', '#menu .trigger', function() {
            // Toggle open and close icons
            $(this).find('img').each(function() {
                if ($(this).hasClass('hidden')) {
                    $(this).removeClass('hidden');
                } else {
                    $(this).addClass('hidden');
                }
            });
            
            // Toggle menu links
            $(this).siblings('.links').stop(true, true).slideToggle(200);
            
            // Toggle open class
            $('#menu').toggleClass('open');
        });
    },
    
    misc: function() {
        // Misc stuff
        
        for (var i = 1; i <= 3; i++) {if (window.CP.shouldStopExecution(1)){break;}
            $('.product').parent().eq(0).clone().appendTo('.product-list');
    }
    window.CP.exitedLoop(1);

}
};

$(function() {
    Chef.init();
});

// same items
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// contdown
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date('AUG 10, 2019 00:00:00').getTime(),
x = setInterval(function() {

  let now = new Date().getTime(),
  distance = countDown - now;

  document.getElementById('days').innerText = Math.floor(distance / (day)),
  document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

  }, second)


// // login
// // Get the modal
// var modal = document.getElementById('id01');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
