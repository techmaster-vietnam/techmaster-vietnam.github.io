<?php include "database.php";?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chi Tiêt Sản phẩm</title>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đồ chơi thông minh</title>
    <link href="../include/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/style-sanpham.css" type="text/css"/>
    <link rel="stylesheet" href="../css/style.css" type="text/css"/>
    <!--<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css"/>-->
    <!--<link rel="stylesheet" href="../include/ninja-slider.css" type="text/css"/>-->
    <link rel="stylesheet" href="../include/thumbnail-slider.css" type="text/css"/>
    <link href="../include/jquery.smartmenus.bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../include/magnific-popup.css" type="text/css"/>
    <link rel="stylesheet" href="../include/magnific-popup.css" type="text/css"/>
    <script src="../include/jquery-3.0.0.min.js"></script>
    <script src="../include/bootstrap.min.js"></script>
    <script type="text/javascript" src="../include/jquery.smartmenus.min.js"></script>
    <!--<script src="../include/ninja-slider.js"></script>-->
    <script src="../include/thumbnail-slider.js"></script>
    <script src="../include/jquery.magnific-popup.min.js"></script>

    <script type="text/javascript" src="../include/jquery.smartmenus.bootstrap.min.js"></script>
</head>
<body>
<header>
    <div id="top-nav" class="nav-wrapper container">
        <div class="container-fluid">
            <ul class="nav navbar-nav navbar-right">
                <li><span class="hidden-xs">Chào mừng bạn đến với Toy City</span></li>
                <li>
                    <a href="#login.html">Đăng nhập</a>
                </li>
                <li>
                    <a href="#register.html">Đăng kí</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="main-nav" class="nav-wrapper container">
        <div class="container-fluid">
            <div class="row">
                <div id="logo">
                    <a href="/" class="navbar-brand" style="padding-top:0px;padding-bottom:0px" title="logo">
                        <img src="../img/design/logo2.png" alt="logo" class="img-responsive">
                    </a>
                </div>
                <div class="shopping-cart">
                    <a href="giohang.html"><i  class=" fa fa-2x fa-shopping-cart"
                                               aria-hidden="true"></i></a>
                </div>
                <div class="box-search">
                    <div class="box">
                        <div class="search-box">
                            <button class="icon" id="btn-search"><i class="fa fa-2x fa-search"></i></button>
                            <input type="search" id="search" placeholder="Tìm kiếm"/>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
    <!--main menu-->
    <div class="bottom-nav">
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="container">
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="../index.html">Trang chủ</a></li>
                        <li class="dropdown">
                            <a href="../index.html" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">
                                Sản phẩm<span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="../index.html#sanphamnoibat">SẢN PHẨM NỔI BẬT <i class="fa fa-star-o"
                                                                                           style="color: yellow"
                                                                                           aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="../index.html#sanphamkhuyenmai">SẢN PHẨM KHUYẾN MẠI <i class="fa fa-usd"
                                                                                                 aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="../danhsachsanpham/maybaymohinh.html">MÁY BAY MÔ HÌNH</a>
                                </li>
                                <li>
                                    <a href="../danhsachsanpham/xemohinh.html">XE MÔ HÌNH</a>
                                </li>
                                <li>
                                    <a href="#canomohinh">TÀU CANO MÔ HÌNH</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="gioithieu.html">Giới thiệu</a></li>
                        <li><a href="huongdanmuahang.html">Hướng dẫn mua hàng</a></li>
                    </ul>


                </div>

            </div>
        </nav>
    </div>
</header>

<div class="content">
    <div class="breadcrumb">
        <ul class="breadcrumb">
            <li><a href="../index.html">Trang chủ</a></li>
            <li><a href="../danhsachsanpham/sanpham.html">Sản phẩm</a></li>
            <li><a href="../chitietsanpham/Vua%20Địa%20Hình%20EADGE-3.html">Vua Địa Hình EADGE-3</a></li>
        </ul>
    </div>
    <div id="vuadiahinh_eadge_3">
        <div class="row">
            <div class="col-md-3  col-sm-12  col-xs-12">
                <div class="menu-sidebar">
                    <div>
                        <span>Phân loại theo tuổi:</span>
                    </div>
                    <ul class="box-menu">
                        <li>
                            <input id="tuổi 2-6" type="checkbox" value="2-6 tuổi">
                            <label for="tuổi 2-6">2-6 tuổi</label>
                        </li>
                        <li>
                            <input id="tuổi 12-7" type="checkbox" value="12-7 tuổi">
                            <label for="tuổi 12-7">12-7 tuổi</label>
                        </li>
                        <li>
                            <input id="tuổi 16-12" type="checkbox" value="16-12 tuổi">
                            <label for="tuổi 16-12">16-12 tuổi</label>
                        </li>

                    </ul>
                    <div>
                        <span>Phân loại theo giới tính</span>
                    </div>
                    <ul class="box-menu">
                        <li>
                            <input id="men" type="checkbox" value="men">
                            <label for="men">Nam</label>
                        </li>
                        <li>
                            <input id="women" type="checkbox" value="women">
                            <label for="women">Nữ</label>
                        </li>
                    </ul>

                    <div>
                        <a href="danhsachsanpham/maybaymohinh.html"><span>MÁY BAY MÔ HÌNH</span></a>
                    </div>
                    <ul class="box-menu">
                        <li>
                            <a href="#droneflycam">Drone&Flycam</a>
                        </li>
                        <li>
                            <a href="#helicopers">Máy bay trực thăng</a>
                        </li>
                        <li>
                            <a href="#spare_parts">Linh kiện máy bay</a>
                        </li>
                    </ul>
                    <div >
                        <a href="#xemohinh.html"><span>XE MÔ HÌNH</span></a>
                    </div>
                    <ul class="box-menu">
                        <li>
                            <a href="#xetank">Xe tank</a>
                        </li>
                        <li>
                            <a href="#xeoto">Ô tô</a>
                        </li>
                        <li>
                            <a href="#linkiienoto">Linh kiện</a>
                        </li>
                    </ul>
                    <div >
                        <a href="#canomohinh.html"><span>TÀU CANO MÔ HÌNH</span></a>
                    </div>
                    <ul class="box-menu">
                        <li>
                            <a href="#cano">Cano</a>
                        </li>
                        <li>
                            <a href="#cano_sparepart">Linh kiện Cano</a>
                        </li>
                    </ul>
                    <div >
                        <a href="#canomohinh.html"><span>Sản phẩm bán chạy</span></a>
                    </div>
                    <ul class="box-menu">
                        <div class="row-fluid">
                            <div class="span5">
                                <a href="#cano">
                                    <img src="img/1.jpg" alt="" class="img-responsive">
                                </a>
                            </div>
                            <div class="span7">
                                <div class="san_pham_ban_chay">
                                    <h4 class="title">
                                        <a href="#">máy báy trực thăng</a>
                                    </h4>
                                    <div class="price-block">
                                        <p class="old-price">
                                            <span></span>
                                        </p>
                                    </div>
                                    <div class="price-block">
                                        <p class="new-price">
                                            <span>123.000Đ</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row-fluid">
                            <div class="span5">
                                <a href="#">
                                    <img src="img/sovran-rp-05-vuamohinh-ava.jpg" alt="" class="img-responsive">
                                </a>
                            </div>
                            <div class="span7">
                                <div class="san_pham_ban_chay">
                                    <h4 class="title">
                                        <a href="#">ô tô điều khiển</a>
                                    </h4>
                                    <div class="price-block">
                                        <p class="old-price">
                                            <span></span>
                                        </p>
                                    </div>
                                    <div class="price-block">
                                        <p class="new-price">
                                            <span>450.000Đ</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="col-md-9  col-sm-12   col-xs-12 ">
                <div class="product-detail">
                    <div class="row">
                        <div class="zoom-gallery col-md-6 col-sm-12 col-xs-12">
                            <a href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-7.png"><img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-7.png" alt="" class="img-responsive"></a>
                            <div id="ninja-slider">
                                <div>
                                    <div class="slider-inner"></div>
                                    <div id="thumbnail-slider"  >
                                        <div class="inner">
                                            <ul class="zoom-gallery">
                                                <li>
                                                    <a class="thumb" href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-2-1dd56dcf-14c0-4873-812c-1a9216cac521.jpg">
                                                        <img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-2-1dd56dcf-14c0-4873-812c-1a9216cac521.jpg" alt="" class="img-responsive">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a  class="thumb" href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-4.jpg">
                                                        <img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-4.jpg" alt="" class="img-responsive">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a   class="thumb" href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-5.jpg">
                                                        <img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-5.jpg" alt="" class="img-responsive">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a   class="thumb" href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-6-15f8788e-b3ef-41a6-86de-5941ff391de7.jpg">
                                                        <img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-6-15f8788e-b3ef-41a6-86de-5941ff391de7.jpg" alt="" class="img-responsive">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a  class="thumb" href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-7.png">
                                                        <img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-7.png" alt="" class="img-responsive">
                                                    </a>
                                                </li>
                                                <li>

                                                    <a  class="thumb" href="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-8-be3a7caa-ddeb-4895-ba6c-7272469c245f.jpg">
                                                        <img src="../img/sanphamnoibat/eagle-03-oto-dieu-khien-vuamohinh-com-8-be3a7caa-ddeb-4895-ba6c-7272469c245f.jpg" alt="" class="img-responsive">
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <h1>Vua Địa Hình EADGE-3</h1>
                            <h4>Xe điều khiển 1:12 đa năng tốc độ 45km/h!</h4>
                            <h3 style="color: red">2.450.000 <sup>đ</sup></h3>
                            <span>Tính năng nổi bật: Sóng 2.4G cho tầm controls ~ 100m, k trùng sóng, nhiễu sóng Hệ thống dẫn động 4 bánh giúp xe dễ dàng beyond any địa hình Thiết kế chắc chắn, hầm hố động cơ 390 bền bỉ, tốc độ cao ..</span>
                            <br/>
                            <hr>
                            <label for="quantity">Số lượng:</label>
                            <input type="number" id="quantity"  value="1"/>
                            <br/>
                            <hr>
                            <div id="rating">
                                <div class="add_to-cart">
                                    <a href="#" style="text-decoration: none;color: white">Mua Ngay</a>
                                </div>
                                <fieldset class="rating">
                                    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                                    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                                    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                </fieldset>

                            </div>
                        </div>
                    </div>
                </div>

                <!--tab-->
                <div class="tabPanel-widget">
                    <label for="tab-1" tabindex="0"></label>
                    <input id="tab-1" type="radio" name="tabs" checked aria-hidden="true">
                    <h2>Thông tin chi tiết</h2>
                    <div>
                        <h4  style="text-transform: uppercase;padding-bottom: 30px;">Tính năng nổi bật</h4>
                        <ul style="list-style-type: none;line-height: 20px">
                            <li>
                                Sóng 2.4G cho tầm điều khiển ~100m, không trùng sóng, nhiễu sóng.
                            </li>
                            <li>
                                Hệ thống dẫn động 4 bánh giúp xe dễ dàng vượt mọi địa hình.
                            </li>
                            <li>
                                Thiết kế chắc chắn, hầm hố.
                            </li>
                            <li>
                                Mô tơ 390 bền bỉ, tốc độ cao.
                            </li>
                            <li>
                                Hệ thống giảm sóc dành riêng cho xe địa hình.
                            </li>
                            <li>
                                Có 2 màu sắc xanh và đỏ.
                            </li>
                            <li>
                                Có thêm hệ thống 4 đèn pha cực chất.
                            </li>
                            <li>
                                Tốc độ đạt được 40km/h.
                            </li>
                        </ul>
                    </div>
                    <label for="tab-2" tabindex="0"></label>
                    <input id="tab-2" type="radio" name="tabs" aria-hidden="true">
                    <h2>Video sản phẩm</h2>
                    <div>
                        <iframe allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/JGVm1Xw6SiQ" width="560">

                        </iframe>

                    </div>
                    <label for="tab-3" tabindex="0"></label>
                    <input id="tab-3" type="radio" name="tabs" aria-hidden="true">
                    <h2>Đánh giá</h2>
                    <div>
                        <form action="#" method="post">
                            <div>
                                <textarea name="comments" id="comments" placeholder="Viết bình luận..." ></textarea>
                            </div>
                            <br>
                            <input type="submit" value="Bình luận">
                        </form>
                    </div>
                </div>



            </div>
            </div>
        </div>




</div>


<div class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="detail">
                    <h3 class="header">
                        ToyCity Uy tín- tận tậm
                    </h3>
                    <div class="custom">
                        <span>Chúng tôi chỉ bán hàng chính hãng</span>
                        <div class="about_us">
                            <p class="phone"><span>Hotline: </span><strong>0974053980</strong></p>
                            <p class="phone"><span>Hỗ trợ kỹ thuật: </span><strong>0974053980</strong></p>
                            <p class="email"><span>Hotline: </span><strong>phamhung.bk94@gmail.com</strong></p>
                        </div>
                    </div>
                </div>

                </address>
            </div>
            <div class="col-md-3 ">
                <div class="about_me">
                    <h3 class="header">
                        Về chúng tôi
                    </h3>
                    <ul class="nav">
                        <li>Giới thiệu</li>
                        <li>Khuyến mại</li>
                        <li>Chính sách & quy định</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="support">
                    <h3 class="header">
                        Hỗ trợ
                    </h3>
                    <ul class="nav">
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách thanh toán</li>
                        <li>Bản đồ</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3">
                <div class="address">
                    <h3 class="header">Địa chỉ showroom</h3>
                    <div>
                        <p><span class="showroom">Cơ sở 1: <i
                                class="icon ion-ios-location"></i> <strong>Số 14, ngõ 4, Nguyễn Đình Chiểu, quận Hai Bà Trưng, Hà nội, Việt Nam.</strong></span></p>
                        <p><span class="showroom">Cơ sở 2: </span><strong>Phòng 2304, tầng 23,StarCity, 81 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội.</strong></p>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<script src="../js/script-sanpham.js"></script>
</body>
</html>