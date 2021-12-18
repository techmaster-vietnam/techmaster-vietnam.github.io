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
const url = new URL(window.location.href);
const productRegion = url.searchParams.get("region");
const productType = url.searchParams.get("type");
const productPrice = url.searchParams.get("price");

console.log(productRegion);
console.log(productType);
console.log(productPrice);

let renderProductHtml = (pd) => {
  pd.forEach(({ id, houseName, square, bedRom, region, priceType, type }) => {
    if (
      productPrice == "Chọn" &&
      productRegion == region &&
      productType == type
    ) {
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
    } else if (
      productType == type &&
      productRegion == region &&
      productPrice == priceType
    ) {
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
renderProductHtml(product);
