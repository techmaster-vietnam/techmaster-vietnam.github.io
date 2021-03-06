<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700italic,700,800,800italic&subset=latin,vietnamese' rel='stylesheet' type='text/css' />
    <link href="assets/styles/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/styles/font-awesome.min.css" rel="stylesheet" />
    <link href="assets/styles/slick.css" rel="stylesheet" />
    <link href="assets/styles/owl.carousel.min.css" rel="stylesheet" />
	<script src="assets/js/jwplayer.js"></script>
    <script src="assets/js/key.js"></script>
    <script type="text/javascript">jwplayer.key = "5qMQ1qMprX8KZ79H695ZPnH4X4zDHiI0rCXt1g==";</script>
    <!--main style-->
    <link href="assets/styles/style.css" rel="stylesheet" />
    <link href="assets/styles/fonts.css" rel="stylesheet" />
    <link href="assets/styles/site.css" rel="stylesheet" />
    <link href="assets/styles/site-respon.css" rel="stylesheet" />
    <!--end main style-->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/jquery.easing.1.3.js"></script>
	<script type="text/javascript">
        function changeActiveMenu(page) {
            $('#menu li').removeClass("active");
            $('#menu li a[href*="' + page + '"]').parent("li").addClass("active");
        }
        function changeSubActiveMenu(page) {
            $('#menu li li').removeClass("active");
            $('#menu li li a[href$="' + page + '"]').parents("li").addClass("active");
            $('.menu-list li').removeClass("active");
            $('.menu-list li a[href$="' + page + '"]').parents("li").addClass("active");
            var value1 = $('a.a-link-sp').attr('href');
            $('#menu li li a[href$="' + value1 + '"]').parents("li").addClass("active");
            $('.menu-list li a[href$="' + value1 + '"]').parents("li").addClass("active");
            var value2 = $('a.a-link-spc').attr('href');
            $('#menu li li a[href$="' + value2 + '"]').parents("li").addClass("active");
            $('.menu-list li a[href$="' + value2 + '"]').parents("li").addClass("active");
        }
    </script>
    <title>Organic Food</title>
</head>
<body>
<?php
  session_start(); // Right at the top of your script
  ?>
    <div id="wrapper">
        <div id="wrapper-in">
            <div id="header">
                <div class="top-head">
                    <div class="container">
                        <div class="pull-left">
                            <p>Li??n h??? ?????t h??ng: <span>0988.669.167</span> (24/7)</p>
                        </div>
                        <div class="pull-right">
                            <div class="log">
                                <a href="http://localhost:8888/login/Ecommerce/login.php" class="log"><?php 
  
                           if($_SESSION['logged']==true)
                           { 
                           echo $_SESSION["username"];
                           echo '<a href="index.html">&ensp;<span>Tho??t</span></a>';
                           }
                           elseif($_SESSION['logged']==false)
                           {
                           echo '<a href="registerform.html"><span>Login/Register</span></a></li>';
                           }
                           ?></a>
                            </div>
                            
                            <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/logogreen.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="bot-head">
                    <div class="container">
                        <div class="menu">
                            <ul id="menu" class="desktop-992">
                                <li id="a12"><a href="index.html">trang ch???</a></li>
                                <li>
                                    <a href="introduce.html">gi???i thi???u</a>
                                </li>
                                <li><a href="products.html">s???n ph???m</a></li>
                                <li><a href="news.html">M???o s???ch</a></li>
                                <li><a href="contact.html">Li??n h???</a></li>
                            </ul>
                            <a class="panel-a menu-mo ipadmo-992" href="#menumobile" data-position="true" data-type="false">
                                <span class="fa fa-reorder"></span>Menu
                            </a>
                        </div>
                        <div class="slide-df">
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="item">
                                        <img src="assets/images/banner-01.jpg" alt="" />
                                    </div>
                                    <div class="item">
                                        <img src="assets/images/banner-02.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clr"></div>
            <div id="main-content">
                <div class="wrap-df">
                    <div class="introduce1">
                        <div class="head-sec">
                            <h1>S?? l?????c v??? <span>Th???c Ph???m S???ch</span></h1>
                            <span>V?? S???C KH???E GIA ????NH B???N</span>
                        </div>
                        <p class="discribe" style="color: black">Th???c Ph???m S???ch- Green Food s??? l?? n??i h???i t??? t???t c??? c??c lo???i th???c ph???m xanh, s???ch. Green Food hy v???ng s??? l?? ng?????i b???n ?????ng h??nh th??n thi???t b??n c???nh gia ????nh b???n, mang l???i s???c kho??? cho c??? nh??!</p>
                        <div class="type-cate">
                            <div class="item">
                                <div class="wrap-item">
                                    <a href="raucu.html">Rau c???</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrap-item">
                                    <a href="hoaqua.html">Hoa qu???</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrap-item">
                                    <a href="tra.html">Tr??</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrap-item">
                                    <a href="hatgiong.html">H???t gi???ng</a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="wrap-item">
                                    <a href="raucu.html">N???m</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="products">
                        <div class="container">
                            <div class="head-sec">
                                <h1>S???n ph???m <span>ti??u bi???u</span></h1>
                            </div>
                            <div class="products-tab">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation">
                                        <a href="#tab1" aria-controls="home" role="tab" data-toggle="tab">T???t c???</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab2" aria-controls="tab" role="tab" data-toggle="tab">Khuy???n m??i</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab3" aria-controls="tab" role="tab" data-toggle="tab">N???i b???t</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#tab4" aria-controls="tab" role="tab" data-toggle="tab">B??n ch???y</a>
                                    </li>
                                </ul>

                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane" id="tab1">
                                        <div class="product-cate">
                                            <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="tao.html">
                                                            <img src="assets/images/hoaqua1.jpg" alt="" />
                                                        </a>
                                                        <div class="sale">
                                                            <img src="assets/images/sale.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <a href="tao.html">T??o</a>
                                                        <span>35.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="bo.html">
                                                            <img src="assets/images/hoaqua2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <a href="bo.html">B??</a>
                                                        <span>55.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="nho.html">
                                                            <img src="assets/images/hoaqua3.jpg" alt="" />
                                                        </a>
                                                        <div class="sale">
                                                                <img src="assets/images/sale.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <a href="nho.html">Nho</a>
                                                        <span>80.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="raucai.html">
                                                            <img src="assets/images/rau1.jpg" alt="" />
                                                        </a>
                                                        <div class="sale">
                                                                <img src="assets/images/sale.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <a href="raucai.html">Rau c???i</a>
                                                        <span>15.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="suplo.html">
                                                            <img src="assets/images/rau2.jpg" alt="" />
                                                        </a>
                                                        <div class="sale">
                                                                <img src="assets/images/sale.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <a href="suplo.html">S??p l??</a>
                                                        <span>12.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="caicuc.html">
                                                            <img src="assets/images/rau3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <a href="caicuc.html">C???i c??c</a>
                                                        <span>10.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                    <div class="wrap-content">
                                                        <div class="img">
                                                            <a href="traxanh.html">
                                                                <img src="assets/images/tra1.jpg" alt="" />
                                                            </a>
                                                            <div class="sale">
                                                                    <img src="assets/images/sale.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="content">
                                                            <a href="traxanh.html">Tr?? xanh</a>
                                                            <span>22.000 <sup>??</sup>/kg</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="item">
                                                        <div class="wrap-content">
                                                            <div class="img">
                                                                <a href="tramatcha.html">
                                                                    <img src="assets/images/tra2.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div class="content">
                                                                <a href="tramatcha.html">Tr?? Matcha</a>
                                                                <span>33.000 <sup>??</sup>/kg</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                            <div class="wrap-content">
                                                                <div class="img">
                                                                    <a href="trabacha.html">
                                                                        <img src="assets/images/tra3.jpg" alt="" />
                                                                    </a>
                                                                    <div class="sale">
                                                                            <img src="assets/images/sale.png" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="trabacha.html">Tr?? b???c h??</a>
                                                                    <span>40.000 <sup>??</sup>/kg</span>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>

                                                        <div class="item">
                                                                <div class="wrap-content">
                                                                    <div class="img">
                                                                        <a href="hatgiongkhoaitay.html">
                                                                            <img src="assets/images/hatgiong1.jpg" alt="" />
                                                                        </a>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="hatgiongkhoaitay.html">H???t gi???ng khoai t??y</a>
                                                                        <span>11.000 <sup>??</sup>/kg</span>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>

                                                            <div class="item">
                                                                    <div class="wrap-content">
                                                                        <div class="img">
                                                                            <a href="hatgionghungque.html">
                                                                                <img src="assets/images/hatgiong2.jpg" alt="" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="content">
                                                                            <a href="hatgionghungque.html">H???t gi???ng h??ng qu???</a>
                                                                            <span>5.000 <sup>??</sup>/kg</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>

                                                                <div class="item">
                                                                        <div class="wrap-content">
                                                                            <div class="img">
                                                                                <a href="hatgiongcaixanh.html">
                                                                                    <img src="assets/images/hatgiong3.jpg" alt="" />
                                                                                </a>
                                                                            </div>
                                                                            <div class="content">
                                                                                <a href="hatgiongcaixanh.html">H???t gi???ng c???i xanh</a>
                                                                                <span>8.000 <sup>??</sup>/kg</span>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                <div class="item">
                                                <div class="wrap-content">
                                                    <div class="img">
                                                        <a href="namhuong.html">
                                                            <img src="assets/images/nam1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div class="content">
                                                        <a href="namhuong.html">N???m h????ng</a>
                                                        <span>25.000 <sup>??</sup>/kg</span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="item">
                                                    <div class="wrap-content">
                                                        <div class="img">
                                                            <a href="namrom.html">
                                                                <img src="assets/images/nam2.jpg" alt="" />
                                                            </a>
                                                        </div>
                                                        <div class="content">
                                                            <a href="namrom.html">N???m r??m</a>
                                                            <span>31.000 <sup>??</sup>/kg</span>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="item">
                                                        <div class="wrap-content">
                                                            <div class="img">
                                                                <a href="namdongco.html">
                                                                    <img src="assets/images/nam3.jpg" alt="" />
                                                                </a>
                                                            </div>
                                                            <div class="content">
                                                                <a href="namdongco.html">N???m ????ng C??</a>
                                                                <span>35.000 <sup>??</sup>/kg</span>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                        </div>
                                        
                                    </div>
                                    
                                            <div role="tabpanel" class="tab-pane" id="tab2">
                                                <div class="product-cate">
                                                    <div class="item">
                                                        <div class="wrap-content">
                                                            <div class="img">
                                                                <a href="tao.html">
                                                                    <img src="assets/images/hoaqua1.jpg" alt="" />
                                                                </a>
                                                                <div class="sale">
                                                                    <img src="assets/images/sale.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="content">
                                                                <a href="tao.html">T??o</a>
                                                                <span>35.000 <sup>??</sup>/kg</span>
                                                            </div>
                                                            
                                                        
                                                    </div>
                                                </div>

                                                
                                                        <div class="item">
                                                            <div class="wrap-content">
                                                                <div class="img">
                                                                    <a href="nho.html">
                                                                        <img src="assets/images/hoaqua3.jpg" alt="" />
                                                                    </a>
                                                                    <div class="sale">
                                                                        <img src="assets/images/sale.png" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="nho.html">Nho</a>
                                                                    <span>80.000 <sup>??</sup>/kg</span>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                   
                                                        <div class="item">
                                                                <div class="wrap-content">
                                                                    <div class="img">
                                                                        <a href="raucai.html">
                                                                            <img src="assets/images/rau1.jpg" alt="" />
                                                                        </a>
                                                                        <div class="sale">
                                                                            <img src="assets/images/sale.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="raucai.html">Rau c???i</a>
                                                                        <span>15.000 <sup>??</sup>/kg</span>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="item">
                                                                    <div class="wrap-content">
                                                                        <div class="img">
                                                                            <a href="suplo.html">
                                                                                <img src="assets/images/rau2.jpg" alt="" />
                                                                            </a>
                                                                            <div class="sale">
                                                                                <img src="assets/images/sale.png" alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="content">
                                                                            <a href="suplo.html">S??p l??</a>
                                                                            <span>12.000 <sup>??</sup>/kg</span>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                        <div class="wrap-content">
                                                                            <div class="img">
                                                                                <a href="traxanh.html">
                                                                                    <img src="assets/images/tra1.jpg" alt="" />
                                                                                </a>
                                                                                <div class="sale">
                                                                                    <img src="assets/images/sale.png" alt="" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="content">
                                                                                <a href="traxanh.html">Tr?? xanh</a>
                                                                                <span>22.000 <sup>??</sup>/kg</span>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                            <div class="item">
                                                                <div class="wrap-content">
                                                                    <div class="img">
                                                                        <a href="trabacha.html">
                                                                            <img src="assets/images/tra3.jpg" alt="" />
                                                                        </a>
                                                                        <div class="sale">
                                                                            <img src="assets/images/sale.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="trabacha.html">Tr?? b???c h??</a>
                                                                        <span>40.000 <sup>??</sup>/kg</span>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    
                                                </div>
                                                <div role="tabpanel" class="tab-pane" id="tab3">
                                                        <div class="product-cate">
                                                            <div class="item">
                                                                <div class="wrap-content">
                                                                    <div class="img">
                                                                        <a href="tao.html">
                                                                            <img src="assets/images/hoaqua1.jpg" alt="" />
                                                                        </a>
                                                                        <div class="sale">
                                                                            <img src="assets/images/sale.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="tao.html">T??o</a>
                                                                        <span>35.000 <sup>??</sup>/kg</span>
                                                                    </div>
                                                                </div> 
                                                                
                                                            </div>

                                                            <div class="item">
                                                                    <div class="wrap-content">
                                                                        <div class="img">
                                                                            <a href="tramatcha.html">
                                                                                <img src="assets/images/tra2.jpg" alt="" />
                                                                            </a>
                                                                        </div>
                                                                        <div class="content">
                                                                            <a href="tramatcha.html">Tr?? Matcha</a>
                                                                            <span>33.000 <sup>??</sup>/kg</span>
                                                                        </div>
                                                                    </div>
                                                                </div>  
                                                                
                                                                <div class="item">
                                                                        <div class="wrap-content">
                                                                            <div class="img">
                                                                                <a href="raucai.html">
                                                                                    <img src="assets/images/rau1.jpg" alt="" />
                                                                                </a>
                                                                                <div class="sale">
                                                                                    <img src="assets/images/sale.png" alt="" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="content">
                                                                                <a href="raucai.html">Rau c???i</a>
                                                                                <span>15.000 <sup>??</sup>/kg</span>
                                                                            </div>
                                                                            
                                                                       
                                                                    </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                            
                                                    <div role="tabpanel" class="tab-pane" id="tab4">
                                                            <div class="product-cate">
                                                                <div class="item">
                                                                    <div class="wrap-content">
                                                                        <div class="img">
                                                                            <a href="nho.html">
                                                                                <img src="assets/images/hoaqua3.jpg" alt="" />
                                                                            </a>
                                                                            <div class="sale">
                                                                                <img src="assets/images/sale.png" alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="content">
                                                                            <a href="nho.html">Nho</a>
                                                                            <span>80.000 <sup>??</sup>/kg</span>
                                                                        </div>
                                                                    </div> 
                                                                    
                                                                </div>
    
                                                                <div class="item">
                                                                        <div class="wrap-content">
                                                                            <div class="img">
                                                                                <a href="bo.html">
                                                                                    <img src="assets/images/hoaqua2.jpg" alt="" />
                                                                                </a>
                                                                            </div>
                                                                            <div class="content">
                                                                                <a href="bo.html">B??</a>
                                                                                <span>55.000 <sup>??</sup>/kg</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>  
                                                                    
                                                                    <div class="item">
                                                                            <div class="wrap-content">
                                                                                <div class="img">
                                                                                    <a href="caicuc.html">
                                                                                        <img src="assets/images/rau3.jpg" alt="" />
                                                                                    </a>
                                                                                    
                                                                                </div>
                                                                                <div class="content">
                                                                                    <a href="caicuc.html">C???i c??c</a>
                                                                                    <span>10.000 <sup>??</sup>/kg</span>
                                                                                </div>
                                                                                
                                                                           
                                                                        </div>
                                                            </div>
                                                        </div>
                                                        </div>
                        </div>
                    </div>
                    <div class="clr"></div>
                    <div class="container">
                        <div class="poster">
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/poster1.jpg" alt="" />
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="assets/images/poster2.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="clr"></div>
                    <div class="brand_logo">
		<div class="container">
			<div class="owl-carousel owl-carousel4 owl-theme owl-loaded owl-drag">
	        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1380px, 0px, 0px); transition: all 0.5s ease 0s; width: 4140px;"><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/3.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/4.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2019/04/1.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2019/04/3.png" alt="" class="img-responsive">
				</div></div><div class="owl-item" style="width: 220px; margin-right: 10px;"><div class="item">
				</div></div><div class="owl-item active" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/aeon-logo-png-transparent.png" alt="" class="img-responsive">
				</div></div><div class="owl-item active" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/512px-Big_C_Logo.svg_.png" alt="" class="img-responsive">
				</div></div><div class="owl-item active" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/3.png" alt="" class="img-responsive">
				</div></div><div class="owl-item active" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/4.png" alt="" class="img-responsive">
				</div></div><div class="owl-item active" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2019/04/2.png" alt="" class="img-responsive">
				</div></div><div class="owl-item" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2019/04/1.png" alt="" class="img-responsive">
				</div></div><div class="owl-item" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2019/04/3.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/aeon-logo-png-transparent.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/512px-Big_C_Logo.svg_.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/3.png" alt="" class="img-responsive">
				</div></div><div class="owl-item cloned" style="width: 220px; margin-right: 10px;"><div class="item">
					<img src="https://biovegi.com.vn/wp-content/uploads/2018/07/4.png" alt="" class="img-responsive">
				</div></div></div></div><div class="owl-nav"><div class="owl-prev"></div><div class="owl-next"></div></div><div class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div></div></div>
		</div>
	</div>
    <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="pull-left col-md-4 col-sm-6">
                        <p>
                        Hotline ?????t h??ng (24/7)
                        <span>0988.669.167</span>
                        </p>
                        <span class="info">
                        Fax: 043.123.123</br></br></br></span>
                        <em><span class="info2">Ph???c v??? qu?? kh??ch h??ng 24h!</span></em>
                    </div>
                    <div class="pull-right col-md-4 col-sm-6">
                       <h4 class="title"><b>?????a ch???</b></h4>
                        <span>S??? nh?? 131, L??nh Nam, Ho??ng Mai, H?? N???i</span></br>
                        <span>??i???n tho???i: (043) 1900 1000</span></br>
                        <span>Email : greenfood@gmail.com</span></br>
                    </div>
                    <div class="pull-right col-md-4 col-sm-6">
                        <span class="footerTitle xs-center-block">Gi???i th?????ng</span>
                        <img class="alignnone size-medium wp-image-1472 img-responsive" src="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos1-1-300x106.png" alt="" srcset="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos1-1-300x106.png 300w, https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos1-1.png 317w" sizes="(max-width: 300px) 100vw, 300px"/>
                        <span class="footerTitle xs-center-block">?????i t??c</span>
                        <img src="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos2-300x48.png" alt="" class="alignnone size-medium wp-image-1468 img-responsive" srcset="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos2-300x48.png 300w, https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos2.png 320w" sizes="(max-width: 300px) 100vw, 300px"/>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyright">
            <p>Copyright ?? 2019 Vu Anh - All rights reserved.</p>
        </div>
        </div>
        
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.panel.mobile.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <!-- main js -->
    <script src="assets/js/jquery.main.js"></script>
    <script>
    function show() {
    document.getElementById('tab-pane').className='visiblediv'; 
    document.getElementById('p1').className='hiddendiv'; 

}
    </script>
    <!-- end main js -->
</body>
</html>