function open_nav() {
  document.getElementsByClassName(
    "header--burgermenu-expand"
  )[0].style.display = "block";
  document.getElementsByClassName("header--menu")[0].style.display = "none";
  document.getElementsByClassName("header icon-close")[0].style.display =
    "block";
}

function close_nav() {
  document.getElementsByClassName(
    "header--burgermenu-expand"
  )[0].style.display = "none";
  document.getElementsByClassName("header icon-close")[0].style.display =
    "none";
  document.getElementsByClassName("header--menu")[0].style.display = "flex";
}

function open_log() {

  let checklogged = JSON.parse(localStorage.getItem("logged"));
  if (checklogged == 1)
    location.href = "account.html";
  else
  document.getElementsByClassName("header--container-login")[0].style.display =
    "block";
}

// close login
document.addEventListener("mouseup", function (e) {
  var container = document.getElementsByClassName("login-wrapper")[0];
  var wrapper = document.getElementsByClassName("header--container-login")[0];
  if (!container.contains(e.target)) {
    wrapper.style.display = "none";
  }
});

// close regis
document.addEventListener("mouseup", function (e) {
  var container = document.getElementsByClassName("login-wrapper")[1];
  var wrapper = document.getElementsByClassName("header--container-regis")[0];
  if (!container.contains(e.target)) {
    wrapper.style.display = "none";
  }
});

function open_regis() {
  document.getElementsByClassName("header--container-regis")[0].style.display =
    "block";
  document.getElementsByClassName("header--container-login")[0].style.display =
    "none";
}

//open search
let search;
$(".icon--search").click(function () {
  $(".header--container-search").slideDown(1000);
  $(".header--container-search").css("display", "block");
  $(".fa-search").css("color", "red");
});

//close search
$(document).mouseup(function (e) {
  var container = $(".search-wrapper");

  // if the target of the click isn't the container nor a descendant of the container
  if ((search = true)) {
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".header--container-search").slideUp(1000);
    }
  }
  search = false;
  $(".fa-search").css("color", "white");
});

// save info to local storage
$("#createAcc").click(function () {
  let nameinput = $("#username").val();
  let passinput = $("#password").val();
  if (nameinput == "" && passinput == "") alert("Điền sai thông tin");
  else {
    localStorage.setItem("id", JSON.stringify(nameinput));
    localStorage.setItem("pass", JSON.stringify(passinput));
    alert("Đăng ký thành công");
  }
});

// check info from local storage
$("#loginAcc").click(function () {
  let checknameinput = $("#checkusername").val();
  let checkpassinput = $("#checkpassword").val();
  let username = JSON.parse(localStorage.getItem("id"));
  let userpass = JSON.parse(localStorage.getItem("pass"));
  if (checknameinput == username && checkpassinput == userpass) {
    alert("Đăng nhập thành công");
    location.href = "account.html";
    localStorage.setItem("logged", "1");
  } else
    alert("Sai tên tài khoản hoặc mật khẩu");
});
