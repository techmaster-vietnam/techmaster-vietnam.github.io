let product = [
  {
    id: 1,
    houseName: "Căn Hộ Ven Biển",
    square: 45,
    bedRom: 1,
    price: 3.5,
    region: 2,
    type: 1,
  },
  {
    id: 2,
    houseName: "Chung Cư Cao Cấp Quận 9",
    square: 30,
    bedRom: 2,
    price: 4.5,
    region: 3,
    type: 2,
  },
  {
    id: 3,
    houseName: "The Sang Residence Đà Nẵng",
    square: 62,
    bedRom: 1,
    price: 6.5,
    region: 2,
    type: 2,
  },
  {
    id: 4,
    houseName: "Sun 69 Thụy Khuê",
    square: 152,
    bedRom: 3,
    price: 18.1,
    region: 1,
    type: 3,
  },
  {
    id: 5,
    houseName: "Vinhome Ocean Park",
    square: 70,
    bedRom: 3,
    price: 11.5,
    region: 1,
    type: 3,
  },
  {
    id: 6,
    houseName: "Căn Hộ Mặt Tiền Đường Tên Lửa",
    square: 53,
    bedRom: 2,
    price: 2.4,
    region: 3,
    type: 1,
  },
];
// Render product item
const url = new URL(window.location.href);
const productId = url.searchParams.get("productId");

let renderProdcutId = (pdId) => {
  product.forEach(({ id, houseName, square, bedRom, price }) => {
    if (id == pdId) {
      let productIdDesk = `<div class="main__link__nav">
          <a href="index.html" class="page-nav-link">Trang chủ</a> >
          <a href="product.html" class="page-nav-link">Nhà Bán</a> >
          <a href="productitem.html" class="page-nav-link page-nav-link__active"
            >${houseName}</a
          >
        </div>
        <div class="container--desktop">
          <div class="title-section-font" style="text-align: left">
            ${houseName}
          </div>
          <div class="product__item__content">
            <div class="produc__item_slider">
              <div
                style="
                  --swiper-navigation-color: #fff;
                  --swiper-pagination-color: #fff;
                "
                class="swiper mySwiper2"
              >
                <div class="swiper-wrapper swiper-slide__full">
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/1.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/2.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/3.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/4.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/5.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/6.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/7.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/8.jpg" />
                  </div>
                </div>
                <div
                  class="swiper-button-next swiper-button-next--desktop"
                ></div>
                <div
                  class="swiper-button-prev swiper-button-prev--desktop"
                ></div>
              </div>
              <div
                thumbsSlider=""
                class="swiper mySwiper swiper-slide__thumb"
              >
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/1.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/2.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/3.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/4.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/5.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/6.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/7.jpg" />
                  </div>
                  <div class="swiper-slide">
                    <img src="assest/product/${id}/8.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="product__item__detail">
              <div class="product__item__detail__price">
                <div class="row">
                  <div class="col-3">
                    <div class="content-font">Mức giá :</div>
                    <div class="content-header">${price} Tỷ</div>
                  </div>
                  <div class="col-3">
                    <div class="content-font">Diện tích :</div>
                    <div class="content-header">${square}m2</div>
                  </div>
                  <div class="col-3">
                    <div class="content-font">Phòng ngủ</div>
                    <div class="content-header">${bedRom} Phòng Ngủ</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product__item__metadata row">
              <div class="col-7 product__item__metadata__main">
                <p class="content-header">Thông tin mô tả</p>
                <p class="content-font">
                  * Ra mắt căn hộ cao cấp Ancruising trên đường Trần Phú - Nha
                  Trang. <br />- Căn hộ Ancruising toạ lạc tại tâm điểm sầm uất,
                  tựa núi Cảnh Long và hướng sát vịnh biển.<br />
                  - Dự án căn hộ cao cấp mặt biển được sở hữu lâu dài đầu tiên ở
                  Nha Trang.<br />
                  - Với tầm view triệu đô.<br />
                  - Số lượng căn hộ có hạn. <br />Liên hệ Mrs Trang
                  0948.271.***.<br />
                  ------------------------------------------------------------------------------<br />
                  Tổng quan về dự án:<br />
                  - Tên dự án: Ancruising.<br />
                  - CĐT: Công ty TNHH Anh Nguyễn.<br />
                  - Đơn vị QLVH: Thương Hiệu quốc tế. <br />- Vị trí: Đường Trần
                  Phú - P. Vĩnh Nguyên - TP Nha Trang.<br />
                  - Tổng diện tích: 4825.7m2.<br />
                  - Quy mô: 1 tầng hầm - 10 tầng nổi.<br />
                  - Số lượng 436 căn hộ khách sạn.<br />
                  - Loại hình: Studio - 1PN - 2PN.<br />
                  - Diện tích: 38 - 70m2.<br />
                  - Sở hữu: Lâu dài với người Việt Nam - 50 năm với người nước
                  ngoài.<br />
                  - Bàn giao: Full nội thất.<br />
                  ---------------------------------------------------------------------<br />
                  * Chính sách ưu đãi mùa dịch:<br />
                  - Nhận cọc giữ chỗ căn đẹp nhất dự án. <br />- Ngân hàng hỗ
                  trợ 0 lãi suất trong 18 tháng.<br />
                  - Miễn phí 2 năm phí quản lý vận hành.<br />
                  - Đặc biệt: 200 khách hàng đăng ký giữ chỗ đầu tiên được bốc
                  thăm 1 giải đặc biệt Audi Q2 - 10 giải nhất xe SH Mode - 20 -
                  Giải nhì 20 cây vàng SJC.
                </p>
              </div>
              <div class="col-5 product__item__metadata__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.215487994048!2d109.19552451533976!3d12.233683733948103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170676df3d13491%3A0xa372058e222a1b89!2zVHLhuqduIFBow7osIFRwLiBOaGEgVHJhbmcsIEtow6FuaCBIw7JhLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1627311523310!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>`;
      let deskRenderArena = $("#product__link--desk");
      deskRenderArena.append(productIdDesk);
      let productIdMobile = `<div class="main__link__nav" style="margin-top: 8px
        ;">
          <a href="index.html" class="page-nav-link">Trang chủ</a> >
          <a href="product.html" class="page-nav-link">Nhà Bán</a> >
          <a href="productitem.html" class="page-nav-link page-nav-link__active"
            >${houseName}</a
          >
        </div>
        <div class="wrap__section--mobile__margin">
          <div class="wrap__productitem__mobile">
            <div class="title-section-font" style="text-align: left">
              ${houseName}
            </div>
            <div class="product__item__content">
              <div class="product__item_slider">
                <div
                  style="
                    --swiper-navigation-color: #fff;
                    --swiper-pagination-color: #fff;
                  "
                  class="swiper mySwiper2--mobile"
                >
                  <div class="swiper-wrapper swiper-slide__full">
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/1.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/2.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/3.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/4.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/5.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/6.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/7.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/8.jpg" />
                    </div>
                  </div>
                  <div
                    class="swiper-button-next swiper-button-next--mobile"
                  ></div>
                  <div
                    class="swiper-button-prev swiper-button-prev--mobile"
                  ></div>
                </div>
                <div
                  thumbsSlider=""
                  class="swiper mySwiper--mobile swiper-slide__thumb"
                >
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/1.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/2.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/3.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/4.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/5.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/6.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/7.jpg" />
                    </div>
                    <div class="swiper-slide">
                      <img src="assest/product/${id}/8.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__item__detail">
                <div class="product__item__detail__price">
                  <div class="fix--mobile">
                    <div class="row">
                      <div class="col-3">
                        <div class="content-font">Mức giá :</div>
                        <div class="content-header">${price} Tỷ</div>
                      </div>
                      <div class="col-3">
                        <div class="content-font">Diện tích :</div>
                        <div class="content-header">${square} m2</div>
                      </div>
                      <div class="col-4">
                        <div class="content-font">Phòng ngủ</div>
                        <div class="content-header">${bedRom} Phòng Ngủ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product__item__metadata ">
                <div class="product__item__metadata__main">
                  <p class="content-header">Thông tin mô tả</p>
                  <p class="content-font">
                    * Ra mắt căn hộ cao cấp Ancruising trên đường Trần Phú - Nha
                    Trang. <br />- Căn hộ Ancruising toạ lạc tại tâm điểm sầm
                    uất, tựa núi Cảnh Long và hướng sát vịnh biển.<br />
                    - Dự án căn hộ cao cấp mặt biển được sở hữu lâu dài đầu tiên
                    ở Nha Trang.<br />
                    - Với tầm view triệu đô.<br />
                    - Số lượng căn hộ có hạn. <br />Liên hệ Mrs Trang
                    0948.271.***.<br />
                    ------------------------------------------------------------------------------<br />
                    Tổng quan về dự án:<br />
                    - Tên dự án: Ancruising.<br />
                    - CĐT: Công ty TNHH Anh Nguyễn.<br />
                    - Đơn vị QLVH: Thương Hiệu quốc tế. <br />- Vị trí: Đường
                    Trần Phú - P. Vĩnh Nguyên - TP Nha Trang.<br />
                    - Tổng diện tích: 4825.7m2.<br />
                    - Quy mô: 1 tầng hầm - 10 tầng nổi.<br />
                    - Số lượng 436 căn hộ khách sạn.<br />
                    - Loại hình: Studio - 1PN - 2PN.<br />
                    - Diện tích: 38 - 70m2.<br />
                    - Sở hữu: Lâu dài với người Việt Nam - 50 năm với người nước
                    ngoài.<br />
                    - Bàn giao: Full nội thất.<br />
                    ---------------------------------------------------------------------<br />
                    * Chính sách ưu đãi mùa dịch:<br />
                    - Nhận cọc giữ chỗ căn đẹp nhất dự án. <br />- Ngân hàng hỗ
                    trợ 0 lãi suất trong 18 tháng.<br />
                    - Miễn phí 2 năm phí quản lý vận hành.<br />
                    - Đặc biệt: 200 khách hàng đăng ký giữ chỗ đầu tiên được bốc
                    thăm 1 giải đặc biệt Audi Q2 - 10 giải nhất xe SH Mode - 20
                    - Giải nhì 20 cây vàng SJC.
                  </p>
                </div>
                <div class="product__item__metadata__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.215487994048!2d109.19552451533976!3d12.233683733948103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170676df3d13491%3A0xa372058e222a1b89!2zVHLhuqduIFBow7osIFRwLiBOaGEgVHJhbmcsIEtow6FuaCBIw7JhLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1627311523310!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
          </div>
        </div>`;
      let mobileRenderArena = $("#main__mobile__product");
      mobileRenderArena.append(productIdMobile);
    }
  });
};
renderProdcutId(productId);
// -----------------------
// Swiper slide desk
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next--desktop",
    prevEl: ".swiper-button-prev--desktop",
  },
  thumbs: {
    swiper: swiper,
  },
});
// Swiper slide mobile
const swiperMobile = new Swiper(".mySwiper--mobile", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 8,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2Mobile = new Swiper(".mySwiper2--mobile", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next--mobile",
    prevEl: ".swiper-button-prev--mobile",
  },
  thumbs: {
    swiper: swiperMobile,
  },
});
//-----------------------
