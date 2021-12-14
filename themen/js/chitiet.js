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


// component alert

$(document).ready(function() {

    $(".componentalert").hide()
    $(".cart_2").click(function(){
        $(".componentalert").toggle();
      });
})

$(document).ready(function() {

    
    $(".closecart").click(function(){
        $(".componentalert").hide();
      });
})

