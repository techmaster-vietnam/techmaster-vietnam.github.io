
// ------------------

$(document).ready(function () {
    $('.featured-links').each(function () {
      const navSlides = $(this).find('.featured-tabs--slider')
      const contentSlides = $(this).find('.tab-content--slider')
  
      contentSlides.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: false,
        asNavFor: navSlides
      });
  
      navSlides.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: contentSlides,
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true
      });
    });
  });
// -----------------------------------------


var swiper = new Swiper(".banner-slide", {
  
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
});




var swiper = new Swiper(".pk-slider", {
  slidesPerView: 4,
  
  spaceBetween: 16,
  freeMode: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    450:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 3,
      
    },
    1200:{
      slidesPerView: 4,
      
    },
  }
});





var swiper = new Swiper(".banner-store-slider", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
  centeredSlides: true,
  loop: true,
});
// -----------------------------------------------------------------------------------------------

$('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))
  if (min == 0) {
    var d = 0
  } else d = min
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1
      if (x <= max) d += 1
    }
    $this.attr('value', d).val(d)
  })
})
     









var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
 



// 
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()




// // form danh gia chi tiet san pham
let commentBtn= document.querySelector('#comment-btn')
let formReview = document.querySelector('.form-review');
let formClose= document.querySelector('#form-close')

commentBtn.addEventListener('click', ()=>{
  formReview.classList.add('active');
})

formClose.addEventListener('click', ()=>{
  formReview.classList.remove('active');
})
































































