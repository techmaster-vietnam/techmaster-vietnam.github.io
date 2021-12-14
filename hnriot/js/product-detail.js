// View all
// document
//   .querySelector("#view-all-description")
//   .addEventListener("click", () => {
//     let content = document.querySelector(".product-detail-content");

//     content.classList.toggle("active");

//     document.querySelector("#view-all-description").innerHTML =
//       content.classList.contains("active") ? "Đọc thêm" : "Ẩn bớt";
//   });

// const swiper = new Swiper(".swiper-container", {
//   zoom: {
//     maxRatio: 5,
//   },
// });

const openCart_1 = document.querySelector(".btn-cart");

openCart_1.addEventListener("click", () => {
  cartShow.classList.add("show");
  overlay.classList.add("show");
});
