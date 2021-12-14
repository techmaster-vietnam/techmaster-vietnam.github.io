function MyFooter(){
    return(
<footer>
  <div className="row footer">
    <div className="col-sm-4 map diachi1">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237668.46215686825!2d105.60187001338616!3d21.446113474791144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134e87a32044fcb%3A0xcb6b2ad2ed13ec5a!2zVGFtIMSQ4bqjbywgVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1562607171383!5m2!1svi!2s" width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
    </div>
    <div className="col-sm-6 map diachi">
      <p className="text-footer"><b style={{paddingRight: '1rem'}}>Địa chỉ:</b>Thị Trấn Tam Đảo-Hợp Châu-Vĩnh Phúc</p>
      <p className="text-footer"><b style={{paddingRight: '1rem'}}>Website:</b>http://tamdao.vinhphuc.vn</p>
      <p className="text-footer"><b style={{paddingRight: '1rem'}}>Điện thoại:</b>0211.3853831</p>
      <p className="text-footer"><b style={{paddingRight: '1rem'}}>Fax:</b>0211.3853831</p>
      <p className="text-footer"><b style={{paddingRight: '1rem'}}>Email:</b>ubndtamdao@vinhphuc.vn</p>
    </div>
    <div className="col-sm-2 p-0 icon-media">
      <a className="nav-link link-media" href="#"><img src="../img/facebook.png" className="icon-media" /><img src="../img/instagram.png" className="icon-media" /><img src="../img/twitter.png" className="icon-media" /></a>
    </div>
  </div>
</footer>

    )
}