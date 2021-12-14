let form = document.forms.demo;
let formSecond = document.forms.demo2;
//check user
function checkUser() {
  let user = form.elements.user;

  let error = document.querySelector(".error-user");

  let value = user.value.trim();

  if (value === "") {
    error.textContent = " Tài khoản không được để trống";
    user.classList.add("is-invalid");
    return false;
  }

  if (value.length < 5) {
    error.textContent = "Độ dài tài khoản phải lớn hơn 5";
    user.classList.add("is-invalid");
    return false;
  }

  user.classList.remove("is-invalid");

  return true;
}

function checkUserSecond() {
  let userSecond = formSecond.elements.user;

  let error = document.querySelector(".error-user-2");

  let value = userSecond.value.trim();

  if (value === "") {
    error.textContent = " Tài khoản không được để trống";
    userSecond.classList.add("is-invalid");
    return false;
  }

  if (value.length < 5) {
    error.textContent = "Độ dài tài khoản phải lớn hơn 5";
    userSecond.classList.add("is-invalid");
    return false;
  }

  userSecond.classList.remove("is-invalid");

  return true;
}
 
//check email

const email = formSecond.elements.email;
email.addEventListener("blur", function () {
  checkEmail();
});

function checkEmail() {
  let error = document.querySelector(".error-email");
  let value = email.value.trim();
  let validRegex =
    /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  if (value === "") {
    error.textContent = "Email không được để trống";
    email.classList.add("is-invalid");
    return false;
  } else if (!value.match(validRegex)) {
    error.textContent = "Email không hợp lệ";
    email.classList.add("is-invalid");
    return false;
  }
  email.classList.remove("is-invalid");
  return true;
}

//check pass

const pass = form.elements.pass;
pass.addEventListener("blur", function () {
  checkPass();
});

function checkPass() {
  let error = document.querySelector(".error-pass");
  let value = pass.value.trim();
  let validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (value === "") {
    error.textContent = "Mật khẩu không được để trống";
    pass.classList.add("is-invalid");
    return false;
  } else if (!value.match(validRegex)) {
    error.textContent = "Tối thiểu 8 ký tự, ít nhất 1 chữ cái và 1 chữ số";
    pass.classList.add("is-invalid");
    return false;
  }
  pass.classList.remove("is-invalid");
  return true;
}

const passSecond = formSecond.elements.pass;
passSecond.addEventListener("blur", function () {
  checkPassSecond();
});

function checkPassSecond() {
  let error = document.querySelector(".error-pass-2");
  let value = passSecond.value.trim();
  let validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (value === "") {
    error.textContent = "Mật khẩu không được để trống";
    passSecond.classList.add("is-invalid");
    return false;
  } else if (!value.match(validRegex)) {
    error.textContent = "Tối thiểu 8 ký tự, ít nhất 1 chữ cái và 1 chữ số";
    passSecond.classList.add("is-invalid");
    return false;
  }
  passSecond.classList.remove("is-invalid");
  return true;
}

//check repass
const rePass = formSecond.elements.rePass;

function checkRePass() {
  let error = document.querySelector(".error-repass");
  let valueRePass = rePass.value.trim();
  let valuePass = passSecond.value.trim();
  if (valueRePass != valuePass) {
    error.textContent = "Nhập lại mật khẩu ";
    rePass.classList.add("is-invalid");
    return false;
  }
  rePass.classList.remove("is-invalid");
  return true;
}

// form sign in
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  checkUser();
});
form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  checkPass();
});

// form sign up
formSecond.addEventListener("submit", function (ev) {
  ev.preventDefault();
  checkUserSecond();
});
formSecond.addEventListener("submit", function (ev) {
  ev.preventDefault();
  checkPassSecond();
});
formSecond.addEventListener("submit", function (ev) {
  ev.preventDefault();
  checkEmail();
});

formSecond.addEventListener("submit", function (ev) {
  ev.preventDefault();
  checkRePass();
});
