$(()=>{
    $(`.slider-range`).slider({
        range: true,
        min: 0,
        max: 3500000,
        step: 100000,
        values: [ 0, 3500000 ],
        slide: function( event, ui ) {
            let max = ui.values[ 1 ].toLocaleString('vi-VN');
            let min = ui.values[ 0 ].toLocaleString('vi-VN');
            let price = ( min + "đ" + " - " + max + "đ")
            $(".max" ).text( price );
        }
    })
    let number = 0
    let page = Array.from($(".link-page"))
    $(`.prev`).on("click",()=>{
        if(page.length <= 0)
        number = page.length
        number--
        if(number <= 0){
            number =0
            $(".prev .bi-chevron-left").css({
                color:"#cacaca"
            })
            $(".next .bi-chevron-right").css({
                color:"#494949"
            })
        }else{
            $(".prev .bi-chevron-left").css({
                color:"#494949"
            })
            $(".next .bi-chevron-right").css({
                color:"#494949"
            })
        }
        $(".link-page").removeClass("active-page")
        $(page[number]).addClass("active-page")
        console.log("lol");
    })
    $(`.next`).on("click",()=>{
        if(number >= page.length-1) 
        number = 3
        number++
        if(number >= 3){
            number = 3
            $(".prev .bi-chevron-left").css({
                color:"#494949"
            })
            $(".next .bi-chevron-right").css({
                color:"#cacaca"
            })
        }else{
            $(".prev .bi-chevron-left").css({
                color:"#494949"
            })
            $(".next .bi-chevron-right").css({
                color:"#494949"
            })
        }
        $(".link-page").removeClass("active-page")
        $(page[number]).addClass("active-page")
        console.log(number);
    })
    let arrPage = Array.from($(".direct-page"))
    let url = new URLSearchParams(window.location.search);
        let numberPage1 = url.get("_page") || 1;
        for(let i = 0;i < numberPage1;i++){
            $(".link-page").removeClass("active-page")
            $(page[i]).addClass("active-page")
            $(arrPage[numberPage1 - 1]).css({
                opacity:0.2
            })
        }
})