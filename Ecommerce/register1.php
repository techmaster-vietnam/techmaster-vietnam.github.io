<!DOCTYPE html>
<html>
  <head>
    <title>Register</title>
    <meta charset="utf-8">
    <link href="assets/styles/style.css" rel="stylesheet" />
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
    <script type="text/javascript"></script>
    <link rel="shortcut icon" type="image/png" href="assets/images/favicon.png"/>
    
  </head>
  <body>
  <?php
      $con = mysqli_connect('localhost', 'root', 'root', 'LOGIN');
      // if(mysqli_connect_errno()){
      //   echo "false!";
      // }
      // else{
      //   echo "successful!";
      // }
      $emailErr = $passwordErr = "";

    if(isset($_POST['log1'])){
      $username = mysqli_real_escape_string($con,$_POST['email']);
      $password = mysqli_real_escape_string($con,$_POST['password']);
    
    if($username==""){
      $emailErr = "Your email is required";
      
    }
    else if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Email address is invalid"; 
      
    }
    else if($password==""){
      $passwordErr = "Your password is required";
      
    }
      
    else if ($username!="" && $password!=""){
        $sql = "SELECT ID FROM login WHERE Username='$username' and Password='$password'";
        $result = mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
  
        $count = mysqli_num_rows($result);
        if($count==1){
          echo "<p>Account is existed. Please click on the Home button to log in. Thank you!</p>";
         
        }
        
        else if($count==0){
          $sql2 = "INSERT INTO `login` (`ID`, `Username`, `Password`) VALUES (NULL, '$username', '$password');";
          mysqli_query($con,$sql2);
          echo "<script>
            window.location.href='index.html';
            alert('Congratulation! You have registered successfully! Warmly welcome to the Green Food website!');
            </script>";
   
          }
        }
        
    }
    ?>
    <div id="wrapper">
                <div id="wrapper-in">
                    <div id="header">
                        <div class="top-head">
                            <div class="container">
                                <div class="pull-left">
                                    <p>Contact: <span>0988.669.167</span> (24/7)</p>
                                </div>
                                
                                <div class="logo">
                            <a href="index.html">
                                <img src="assets/images/logogreen.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="bot-head1">
                    <div class="container">
                        <div class="menu">
                            <ul id="menu" class="desktop-992">
                                <li id="a12"><a href="index.html">Home</a></li>
                                <li>
                                    <a href="introduce.html">Introduce</a>
                                </li>
                                <li><a href="products.html">Product</a></li>
                                <li><a href="news.html">Tips</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            <a class="panel-a menu-mo ipadmo-992" href="#menumobile" data-position="true" data-type="false">
                                <span class="fa fa-reorder"></span>Menu
                            </a>
                        </div>
    <div class="container">
    
    <div id="login">
      <h2>Register account</h2>
      <form action="register1.php" method="post">
        <div class="container">

          <label for="">Please complete the information below to register an account!</label>
          <div class="row">
              <div class="col-6 col-sm-4">
          <input type="text" name="email" placeholder="Email" value="">
          <p class="error"><?php echo $emailErr;?></p>
          <input type="password" name="password" placeholder="Password" value="">
          <p class="error"><?php echo $passwordErr;?></p></br></br>
          <div class="row">
          <div class="col-6 col-sm-4">
          <button type="submit" class="btn" name="log1">Register</button>
          </div>
        </div>
        </div>
        </div>
    </div>
      </form>
    
    </div>
    <footer id="footer">
                    <div class="container">
                        <div class="row">
                            <div class="pull-left col-md-4 col-sm-6">
                                <p>
                                Hotline (24/7)
                                <span>0988.669.167</span>
                                </p>
                                <span class="info">
                                Fax: 043.123.123</br></br></br></span>
                                <em><span class="info2">Open for 24h!</span></em>
                            </div>
                            <div class="pull-right col-md-4 col-sm-6">
                               <h4 class="title"><b>Address</b></h4>
                                <span>No 131, Linh Nam, Hoang Mai, Ha Noi</span></br>
                                <span>Phone: (043) 1900 1000</span></br>
                                <span>Email : anhvt290791@gmail.com</span></br>
                            </div>
                            <div class="pull-right col-md-4 col-sm-6">
                                <span class="footerTitle xs-center-block">Giải thưởng</span>
                                <img class="alignnone size-medium wp-image-1472 img-responsive" src="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos1-1-300x106.png" alt="" srcset="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos1-1-300x106.png 300w, https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos1-1.png 317w" sizes="(max-width: 300px) 100vw, 300px"/>
                                <span class="footerTitle xs-center-block">Đối tác</span>
                                <img src="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos2-300x48.png" alt="" class="alignnone size-medium wp-image-1468 img-responsive" srcset="https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos2-300x48.png 300w, https://miss-organic.com/wpData/wp-content/uploads/2017/08/logos2.png 320w" sizes="(max-width: 300px) 100vw, 300px"/>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="copyright">
                    <p>Copyright © 2019 Vu Anh - All rights reserved.</p>
                </div>
        </div>
       
    </div>
    <a href="#" class="scroll-to-top"><i class="glyphicon glyphicon-chevron-up"></i></a>
    <div id="runScript"></div>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.panel.mobile.js"></script>
    <script src="assets/js/slick.min.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <!-- main js -->
    <script src="assets/js/jquery.main.js"></script>

    <!-- end main js -->
  </body>
</html>