let product = [
  {
    id: 1,
    houseName: "Căn Hộ Ven Biển",
    square: 45,
    bedRom: 1,
    price: 3.5,
    region: 2,
    type: 1,
    priceType: 4,
    squareType: 2,
  },
  {
    id: 2,
    houseName: "Chung Cư Cao Cấp Quận 9",
    square: 30,
    bedRom: 2,
    price: 4.5,
    region: 3,
    type: 2,
    priceType: 5,
    squareType: 2,
  },
  {
    id: 3,
    houseName: "The Sang Residence Đà Nẵng",
    square: 62,
    bedRom: 1,
    price: 6.5,
    region: 2,
    type: 2,
    priceType: 5,
    squareType: 3,
  },
  {
    id: 4,
    houseName: "Sun 69 Thụy Khuê",
    square: 152,
    bedRom: 3,
    price: 18.1,
    region: 1,
    type: 3,
    priceType: 5,
    squareType: 5,
  },
  {
    id: 5,
    houseName: "Vinhome Ocean Park",
    square: 70,
    bedRom: 3,
    price: 11.5,
    region: 1,
    type: 3,
    priceType: 5,
    squareType: 3,
  },
  {
    id: 6,
    houseName: "Căn Hộ Mặt Tiền Đường Tên Lửa",
    square: 53,
    bedRom: 2,
    price: 2.4,
    region: 3,
    type: 1,
    priceType: 3,
    squareType: 3,
  },
];
//render
let renderProductHtml = (pd) => {
  pd.forEach(({ id, houseName, square, bedRom }) => {
    let deskProduct = `<div class="page__product__item--desktop col-6">
                <a href="productitem.html?productId=${id}">
                  <a href="productitem.html?productId=${id}"
                    ><img src="assest/product/${id}/1.jpg" alt="" class=""
                  /></a>
                  <div class="page__product__item__content--desktop">
                    <div class="content-header">Mở bán ${houseName}</div>
                    <div
                      class="content-font"
                      style="margin-top: 5px !important"
                    >
                      Diện tích: ${square} m2 - ${bedRom} Phòng Ngủ
                    </div>
                    <div class="link-font" style="margin-top: 12px !important">
                      <a
                        href="productitem.html?productId=${id}"
                        class="page__product__item__link--desktop"
                        >Xem thêm</a
                      >
                    </div>
                  </div>
                </a>
              </div>`;
    let pageProductDesk = $("#page-product-desk-show");
    pageProductDesk.append(deskProduct);
    let mobileProduct = `<div class="page__product__mobile__item row">
                <div class="col-6">
                  <a href="productitem.html?productId=${id}"
                    ><img src="assest/product/${id}/1.jpg" alt="" class=""
                  /></a>
                </div>
                <div class="page__product__item__content--desktop col-6">
                  <div class="content-header">Mở bán ${houseName}</div>
                  <div class="content-font" style="margin-top: 5px !important">
                    Diện tích: ${square} m2 - ${bedRom} Phòng Ngủ
                  </div>
                  <div class="link-font" style="margin-top: 12px !important">
                    <a
                      href="productitem.html?productId=${id}"
                      class="page__product__item__link--desktop"
                      >Xem thêm</a
                    >
                  </div>
                </div>
              </div>`;
    let pageProductMobile = $("#page__product__ver--mobile");
    pageProductMobile.append(mobileProduct);
  });
};

let renderProductHtmlPrice = (pd, prity) => {
  pd.forEach(({ id, houseName, square, bedRom, priceType }) => {
    if (prity == priceType) {
      let deskProduct = `<div class="page__product__item--desktop col-6">
                <a href="productitem.html?productId=${id}">
                  <a href="productitem.html?productId=${id}"
                    ><img src="assest/product/${id}/1.jpg" alt="" class=""
                  /></a>
                  <div class="page__product__item__content--desktop">
                    <div class="content-header">Mở bán ${houseName}</div>
                    <div
                      class="content-font"
                      style="margin-top: 5px !important"
                    >
                      Diện tích: ${square} m2 - ${bedRom} Phòng Ngủ
                    </div>
                    <div class="link-font" style="margin-top: 12px !important">
                      <a
                        href="productitem.html?productId=${id}"
                        class="page__product__item__link--desktop"
                        >Xem thêm</a
                      >
                    </div>
                  </div>
                </a>
              </div>`;
      let pageProductDesk = $("#page-product-desk-show");
      pageProductDesk.append(deskProduct);
      let mobileProduct = `<div class="page__product__mobile__item row">
                <div class="col-6">
                  <a href="productitem.html?productId=${id}"
                    ><img src="assest/product/${id}/1.jpg" alt="" class=""
                  /></a>
                </div>
                <div class="page__product__item__content--desktop col-6">
                  <div class="content-header">Mở bán ${houseName}</div>
                  <div class="content-font" style="margin-top: 5px !important">
                    Diện tích: ${square} m2 - ${bedRom} Phòng Ngủ
                  </div>
                  <div class="link-font" style="margin-top: 12px !important">
                    <a
                      href="productitem.html?productId=${id}"
                      class="page__product__item__link--desktop"
                      >Xem thêm</a
                    >
                  </div>
                </div>
              </div>`;
      let pageProductMobile = $("#page__product__ver--mobile");
      pageProductMobile.append(mobileProduct);
    }
  });
};
let renderProductHtmlSquare = (pd, squarty) => {
  pd.forEach(({ id, houseName, square, bedRom, squareType }) => {
    if (squarty == squareType) {
      let deskProduct = `<div class="page__product__item--desktop col-6">
                <a href="productitem.html?productId=${id}">
                  <a href="productitem.html?productId=${id}"
                    ><img src="assest/product/${id}/1.jpg" alt="" class=""
                  /></a>
                  <div class="page__product__item__content--desktop">
                    <div class="content-header">Mở bán ${houseName}</div>
                    <div
                      class="content-font"
                      style="margin-top: 5px !important"
                    >
                      Diện tích: ${square} m2 - ${bedRom} Phòng Ngủ
                    </div>
                    <div class="link-font" style="margin-top: 12px !important">
                      <a
                        href="productitem.html?productId=${id}"
                        class="page__product__item__link--desktop"
                        >Xem thêm</a
                      >
                    </div>
                  </div>
                </a>
              </div>`;
      let pageProductDesk = $("#page-product-desk-show");
      pageProductDesk.append(deskProduct);
      let mobileProduct = `<div class="page__product__mobile__item row">
                <div class="col-6">
                  <a href="productitem.html?productId=${id}"
                    ><img src="assest/product/${id}/1.jpg" alt="" class=""
                  /></a>
                </div>
                <div class="page__product__item__content--desktop col-6">
                  <div class="content-header">Mở bán ${houseName}</div>
                  <div class="content-font" style="margin-top: 5px !important">
                    Diện tích: ${square} m2 - ${bedRom} Phòng Ngủ
                  </div>
                  <div class="link-font" style="margin-top: 12px !important">
                    <a
                      href="productitem.html?productId=${id}"
                      class="page__product__item__link--desktop"
                      >Xem thêm</a
                    >
                  </div>
                </div>
              </div>`;
      let pageProductMobile = $("#page__product__ver--mobile");
      pageProductMobile.append(mobileProduct);
    }
  });
};
const url = new URL(window.location.href);
console.log(url);
let searchPrice = url.searchParams.get("price");
let searchSquare = url.searchParams.get("square");
if (searchPrice == null && searchSquare == null) {
  renderProductHtml(product);
}
if (searchPrice != null && searchSquare == null) {
  renderProductHtmlPrice(product, searchPrice);
}
if (searchSquare != null && searchPrice == null) {
  renderProductHtmlSquare(product, searchSquare);
}

let filterProducMobile = () => {
  $("#product--filter--btn").click(function () {
    let priceId = $("#filter__page__product__price--mobile").val();
    let squareId = $("#filter__page__product__square--mobile").val();
    window.location.href = `product.html?price=${priceId}&square=${squareId}`;
    return false;
  });
};
filterProducMobile();
let searchPriceM = url.searchParams.get("price");
let searchSquareM = url.searchParams.get("square");
console.log(searchSquare);
console.log(searchSquareM);
console.log(searchPrice);
console.log(searchPriceM);
if (searchPrice == 0 && searchSquare == 0) {
  renderProductHtml(product);
}
if (searchPrice != 0 && searchSquare == 0) {
  renderProductHtmlPrice(product, searchPriceM);
}
