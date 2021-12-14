let products = [
  {
    name: "Olive",
    image1: "./img/ada-1.jpg",
    image2: "./img/ada-2.jpg",
    old_price: "2,550,000 VND",
    curr_price: "1,750,000 VND",
  },
  {
    name: "Am",
    image1: "./img/am-1.jpg",
    image2: "./img/am-2.jpg",
    old_price: "1,200,000 VND",
    curr_price: "990,00 VND",
  },
  {
    name: "Hardy",
    image1: "./img/ocean-1.jpg",
    image2: "./img/ocean-2.jpg",
    old_price: "1,750,000 VND",
    curr_price: "990,00 VND",
  },
  {
    name: "Uno",
    image1: "./img/wind-1.jpg",
    image2: "./img/wind-2.jpg",
    old_price: "2,550,00VND",
    curr_price: "1,750,000 VND",
  },
  {
    name: "Ena",
    image1: "./img/amber-1.jpg",
    image2: "./img/amber-2.jpg",
    old_price: "1,200,000 VND",
    curr_price: "990,00 VND",
  },
  {
    name: "Kubo",
    image1: "./img/mossy-1.jpg",
    image2: "./img/mossy-2.jpg",
    old_price: "1,750,000 VND",
    curr_price: "990,00 VND",
  },
  // {
  //   name: "Fade",
  //   image1: "./img/nodric-1.jpg",
  //   image2: "./img/nodric-2.jpg",
  //   old_price: "1,200,000 VND",
  //   curr_price: "990,00 VND",
  // },
  // {
  //   name: "Arthur",
  //   image1: "./img/stor-1.jpg",
  //   image2: "./img/stor-2.jpg",
  //   old_price: "1,750,000 VND",
  //   curr_price: "1,200,000 VND",
  // },
  // {
  //   name: "Ben",
  //   image1: "./img/woo-1.jpg",
  //   image2: "./img/woo-2.jpg",
  //   old_price: "1,200,000 VND",
  //   curr_price: "990,000 VND",
  // },
];
let product_list = document.querySelector("#products");

renderProducts = (products) => {
  products.forEach((e) => {
    let prod = `
<div class="col-12 col-md-6 col-xxl-4">
            <div class="product-card">
              <div class="product-card-img">
                <img src="${e.image1}" alt="" />
                <img src="${e.image2}" alt="" />
              </div>
              <div class="product-card-info">
                <div class="product-btn">
                  <a href="product-detail.html" class="btn-flat-reverse btn-hover-reverse">Mua ngay</a>
                </div>
                <div class="product-card-name "><h4>${e.name}</h4></div>
                <div class="product-price">
                  <span><del>${e.old_price}</del></span>
                  <span class="curr-price">${e.curr_price}</span>
                </div>
              </div>
            </div>
          </div>
  `;
    product_list.insertAdjacentHTML("beforeend", prod);
  });
};

renderProducts(products);

let filter_col = document.querySelector("#filter-col");

document.querySelector("#filter-toggle").addEventListener("click", () => {
  filter_col.classList.add("active");
});
document.querySelector("#filter-close").addEventListener("click", () => {
  filter_col.classList.remove("active");
});
