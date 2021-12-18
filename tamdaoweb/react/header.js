function MyHeader(){
    return(
        <header>
  <ul className="nav justify-content-end">
    <li className="nav-item">
      <a className="nav-link" href="#"><img src="../img/facebook.png" className="icon1" /></a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" href="#"><img src="../img/instagram.png" className="icon1" /></a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" href="#"><img src="../img/twitter.png" className="icon1" /></a>
    </li>
  </ul>
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="index.html">
      <img src="../img/icon-mountain.png" alt="anh logo" />
      <p className="text-menu">Tam Đảo-Travel</p>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link text-menu li-menu" href="index.html">Trang Chủ<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-menu li-menu" href="gioithieu.html">Giới Thiệu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-menu li-menu" href="#" style={{color: '#3dd6ef!important'}}>Dịch Vụ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-menu li-menu" href="tintuc.html">Tin Tức</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-menu li-menu" href="lienhe.html">Liên Hệ</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
    )
}