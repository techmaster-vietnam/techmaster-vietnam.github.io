function input_display() {
  if (document.getElementById("input_search").style.visibility == "hidden") {
    document.getElementById("input_search").style.visibility = "visible";
  } else {
    document.getElementById("input_search").style.visibility = "hidden";
  }
}

const navSlide = () => {
  const slide = document.querySelector(".nav-shortcut");
  const navmobi = document.querySelector(".nav-mobi");
  const header = document.querySelector(".header");
  const overlay = document.querySelector("#overlay");

  slide.addEventListener("click", () => {
    header.classList.add("header-remove");
    header.classList.remove("header-add");    
    setTimeout(function () {
      overlay.classList.toggle("translateX-in");
    }, 300);
    setTimeout(function () {
      navmobi.classList.toggle("translateX-in");
    }, 800);
  });
};

const navClose = () => {
  const close = document.querySelector(".nav-close-icon");
  const navmobi = document.querySelector(".nav-mobi");
  const header = document.querySelector(".header");
  const overlay = document.querySelector("#overlay");

  close.addEventListener("click", () => {
    navmobi.classList.toggle("translateX-in");
    setTimeout(function () {
      overlay.classList.toggle("translateX-in");
    }, 300);
    setTimeout(function () {
      header.classList.remove("header-remove");
      header.classList.add("header-add");
    }, 800);
  });
};

const formIn = () => {
  const loginPopup = document.querySelector(".login-popup");
  const loginPopupNav = document.querySelector(".login-popup-nav");
  const signupPopup = document.querySelector(".signup-popup");
  const signupPopupNav = document.querySelector(".signup-popup-nav");
  const loginOverlay = document.querySelector("#overlay-form");
  const loginForm = document.querySelector(".login-wrapper");
  const signupForm = document.querySelector(".signup-wrapper");
  loginPopup.addEventListener("click", () => {
    loginOverlay.classList.toggle("translateY-in");
    setTimeout(function () {
      loginForm.classList.toggle("translateY-in");
    }, 400);
  });
  loginPopupNav.addEventListener("click", () => {
    loginOverlay.classList.toggle("translateY-in");
    setTimeout(function () {
      loginForm.classList.toggle("translateY-in");
    }, 400);
  });
  signupPopup.addEventListener("click", () => {
    loginOverlay.classList.toggle("translateY-in");
    setTimeout(function () {
      signupForm.classList.toggle("translateY-in");
    }, 400);
  });
  signupPopupNav.addEventListener("click", () => {
    loginOverlay.classList.toggle("translateY-in");
    setTimeout(function () {
      signupForm.classList.toggle("translateY-in");
    }, 400);
  });
};
const formOut = () => {
  const loginClose = document.querySelector(".login-close");
  const signupClose = document.querySelector(".signup-close");
  const loginOverlay = document.querySelector("#overlay-form");
  const loginForm = document.querySelector(".login-wrapper");
  const signupForm = document.querySelector(".signup-wrapper");
  loginClose.addEventListener("click", () => {
    loginForm.classList.toggle("translateY-in");
    setTimeout(function () {
      loginOverlay.classList.toggle("translateY-in");
    }, 500);
  });
  signupClose.addEventListener("click", () => {
    signupForm.classList.toggle("translateY-in");
    setTimeout(function () {
      loginOverlay.classList.toggle("translateY-in");
    }, 500);
  });
};
navSlide();
navClose();
formIn();
formOut();
