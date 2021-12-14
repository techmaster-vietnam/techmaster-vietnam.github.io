
(function($) {
    $.fn.WimmViewer = function (options) {

        var self = this;

        //Style
        $(self).addClass('wimm_carousel');
        options = options || {};

        options.miniatureWidth = options.miniatureWidth || 200;
        options.miniatureHeight = options.miniatureHeight || 150;
        options.miniatureSpace = options.miniatureSpace || 5;
        options.nextText = options.nextText || 'NEXT <span class="fa fa-caret-right"></span>';
        options.prevText = options.prevText || '<span class="fa fa-caret-left"></span> PREV';
        options.onImgChange = typeof options.onImgChange === 'function' ? options.onImgChange : function(){};
        options.onNext = typeof options.onNext === 'function' ? options.onNext : function(){};
        options.onPrev = typeof options.onPrev === 'function' ? options.onPrev : function(){};

        var MAX_CAROUSEL_WIDTH = (options.miniatureSpace+options.miniatureWidth) * $(self).find('.item').length,

            cursor = 0,

            carousel = $(self).find('.carousel'),
            carouselInner = $(self).find('.carousel_inner'),
            firstMiniature = $($(self).find('.item')[0]);

        $(self).append('<div class="mainImg"></div>');

        var mainPicture = $(self).find('.mainImg');

        $(carousel).append(
            '<div class="next">'+options.nextText +'</div>'+
            '<div class="prev">'+options.prevText +'</div>'
        );

        var  nextButton = $(self).find('.next'),
            prevButton = $(self).find('.prev');

        $(prevButton).hide();

        //Init first picture
        $(firstMiniature).addClass('active');
        var firstImageUrl = $(firstMiniature).attr('data-url');
        $(mainPicture).append('<img src='+firstImageUrl+' />');

        $(self).find('.item').each(function(){
            $(this).click(function(){
                options.onImgChange();
                var imageUrl = $(this).attr('data-url');
                $(mainPicture).find('img').attr('src',imageUrl);
                $(self).find('.active').removeClass('active');
                $(this).addClass('active');
            });
            $(this).css({
                width: options.miniatureWidth+'px',
                height: options.miniatureHeight+'px',
                marginRight: options.miniatureSpace+'px',
                marginLeft: options.miniatureSpace+'px'

            });
        });
        $(carouselInner).css({
            marginLeft: -options.miniatureSpace+'px',
            marginRight: -options.miniatureSpace+'px'

        });


        $(nextButton).click(function(){

            if ( $(carouselInner).width() + cursor  <= MAX_CAROUSEL_WIDTH) {
                cursor += options.miniatureSpace*2 + options.miniatureWidth;
                $(carouselInner).css('left',-cursor+'px');
                options.onNext();
                if (!( $(carouselInner).width() + cursor  <= MAX_CAROUSEL_WIDTH)) {
                    $(nextButton).hide();
                }
                $(prevButton).show();
            }
        });

        $(prevButton).click(function(){

            if ( cursor  > 0) {
                cursor -= options.miniatureSpace*2 + options.miniatureWidth;
                $(carouselInner).css('left',-cursor+'px');
                options.onPrev();
                if (cursor <= 0){
                    $(prevButton).hide();
                }
                $(nextButton).show();


            }
        })
    }
})(jQuery);
