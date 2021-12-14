$('#banner #clock').countdown('2019/7/28', function (event) {
    let $this = $(this).html(event.strftime('' +
        
        '<div><span>%d</span><br><span>Ngày</span></div>' +
        '<div><span>%H</span><br><span>Giờ</span></div>' +
        '<div><span>%M</span><br><span>Phút </span></div>' +
        '<div><span>%S</span><br><span>Giây</span></div>'
    ))
});