/**
 * Created by I_am_Po on 7/7/2016.
 */
$(document).ready(function() {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
            // duration: 300, // don't foget to change the duration also in CSS
            // opener: function(element) {
            //     return element.find('img');
            // }
        }

    });
});