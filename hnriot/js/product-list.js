let products = [
  {
    name: "Kubo",
    image1: "./img/lm-black.jpg",
    image2: "./img/nam.jpg",
    old_price: "1,200,000 VND",
    curr_price: "990,00 VND",
    shape: "round",
  },
  {
    name: "Hardy",
    image1: "./img/hd-havana.jpg",
    image2: "./img/nam2.jpg",
    old_price: "1,750,000 VND",
    curr_price: "990,00 VND",
    shape: "rec",
  },
  {
    name: "Uno",
    image1: "./img/vuong.jpg",
    image2: "./img/nu2.jpg",
    old_price: "2,550,00VND",
    curr_price: "1,750,000 VND",
    shape: "square",
  },
  {
    name: "Ena",
    image1: "./img/er-pink.png",
    image2: "./img/nu.jpg",
    old_price: "1,200,000 VND",
    curr_price: "990,00 VND",
    shape: "round",
  },
  {
    name: "Kubo",
    image1: "./img/marke-1.png",
    image2: "./img/marke-3.jpg",
    old_price: "1,750,000 VND",
    curr_price: "990,00 VND",
    shape: "cat",
  },
  {
    name: "Fade",
    image1: "./img/fade-1.jpg",
    image2: "./img/fade-3.jpg",
    old_price: "1,200,000 VND",
    curr_price: "990,00 VND",
    shape: "square",
  },
  {
    name: "Arthur",
    image1: "./img/arthur-1.jpg",
    image2: "./img/arthur-2.jpg",
    old_price: "1,750,000 VND",
    curr_price: "1,200,000 VND",
    shape: "rec",
  },
  {
    name: "Ben",
    image1: "./img/ben-1.jpg",
    image2: "./img/ben-3.jpg",
    old_price: "1,200,000 VND",
    curr_price: "990,000 VND",
    shape: "rec",
  },
  {
    name: "Oli",
    image1: "./img/oli-1.jpg",
    image2: "./img/oli-2.jpg",
    old_price: "2,550,000 VND",
    curr_price: "1,750,000 VND",
    shape: "round",
  },
];
let product_list = document.querySelector("#products");

renderProducts = (products) => {
  products.forEach((e) => {
    let prod = `
<div class="col-12 col-md-6 col-xxl-4 itemBox ${e.shape}">
            <div class="product-card  ">
              <div class="product-card-img ">
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

