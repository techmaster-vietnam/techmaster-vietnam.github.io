// loading
let loadingWrapper = document.querySelector(".loading-screen");

window.addEventListener("load", function () {
  loadingWrapper.parentElement.removeChild(loadingWrapper);
});
// search-box
const icon = document.querySelector(".icon");
const search = document.querySelector(".search-box");
icon.onclick = function () {
  search.classList.toggle("active");
};
