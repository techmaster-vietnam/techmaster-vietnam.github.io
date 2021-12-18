import validLogin from "./checklogin.js";

$(() => {
  $(".btn-sign").on("click", () => {
    event.preventDefault();
    let valueEmail = $(".name").val();
    let valuePass = $(".password").val();
    validLogin(valueEmail, valuePass, $(".help-email"), $(".help-pass"));
  });
  $(`.bi-person-circle`).on("click", () => {
    event.preventDefault();
    $(`.modal-open`).removeAttr("style");
  });
  $(`.bi-chevron-up`).on("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    e.preventDefault();
  });
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: `<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow: `<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          daptiveHeight: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          daptiveHeight: true,
          arrows: false,
        },
      },
    ],
  });
  $(`.render-add`).slick({
    dots: false,
    infinite: true,
    speed: 200,
    cssEase: "linear",
    arrows: true,
    prevArrow: `<i class="bi bi-chevron-compact-left position-absolute"></i>`,
    nextArrow: `<i class="bi bi-chevron-compact-right position-absolute"></i>`,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          daptiveHeight: true,
          arrows: false,
        },
      },
    ],
  });
  $(`.span-search .bi-heart`).on("click", () => {
    event.preventDefault();
  });
  $(`.bi-search`).on("click", () => {
    event.preventDefault();
  });
  $(`.bi-list`).on(`click`, () => {
    $(`.reponsive-menu`).css({
      top: "100px",
    });
    $(`.bi-list`).css({
      display: "none",
    });
    $(".list .bi-x").css({
      display: "block",
    });
    event.preventDefault();
  });
  $(".list .bi-x").on("click", () => {
    event.preventDefault();
    $(`.reponsive-menu`).css({
      top: "-100%",
    });
    $(`.bi-list`).css({
      display: "block",
    });
    $(".list .bi-x").css({
      display: "none",
    });
  });

  $(`.login-reponsive`).on(`click`, () => {
    event.preventDefault();
  });
  $(`.support-slider`).slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    adaptiveWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  let itemChon = 1;
  $(`.item-chon`).on("click", () => {
    itemChon++;
    event.preventDefault();
    console.log("lol");
    if (itemChon % 2 == 0) {
      $(".remove-all").css({
        display: "block",
      });
      $(".select-chon").css({
        display: "flex",
      });
    } else {
      $(".remove-all").css({
        display: "none",
      });
      $(".select-chon").css({
        display: "none",
      });
    }
  });

  function dayLeft() {
    setInterval(() => {
      let dayNow = new Date();
      let presentDay = new Date(2021, 10, 30);
      let left = presentDay - dayNow;
      let day = Math.ceil(left / 1000 / 60 / 60 / 24);
      let hour = Math.ceil(left / 1000 / 60 / 60) % 24;
      let minute = Math.ceil(left / 1000 / 60) % 60;
      let second = Math.ceil(left / 1000) % 60;
      $(`.render-day`).text(day);
      $(`.render-hour`).text(hour);
      $(`.render-minute`).text(minute);
      $(`.render-second`).text(second);
      if (second < 10) {
        $(`.render-second`).text("0" + second);
      }
      if (day < 10) {
        $(`.render-day`).text("0" + day);
      }
      if (minute < 10) {
        $(`.render-minute`).text("0" + minute);
      }
      if (hour < 10) {
        $(`.render-hour`).text("0" + hour);
      }
    }, 1000);
  }
  dayLeft();

  function deatail() {
    let url = new URLSearchParams(window.location.search);
    let id = url.get("productId") || 1;
    axios.get(`/arrival-Product/${id}`).then((res) => {
      let datas = res.data;
      renderDetail(datas);
    });
  }
  function renderDetail(datas) {
    let arrDetail = Object.values(datas);
    $(".text-sale-detail").text(datas.sale);
    $(".text-name-detail").text(datas["name-product"]);
    $(".sub-price-detail").text(datas.price);
    $(".text-price-detail").text(
      Math.round(
        parseFloat(datas.price) * 1000000 -
          (parseFloat(datas.price) * 1000000 * parseFloat(datas.sale)) / 100
      ).toLocaleString("vi-VN")
    );
    for (let i = 5; i < arrDetail.length; i++) {
      $(`<a title="${arrDetail[2]}"
            href="${arrDetail[i]}"
            class="popup" >
            <img class="img-detail1"
                src="${arrDetail[i]}"
                alt="Fail">
            </a>`).appendTo($(".slide-detail"));
      $(`<div class="img-sub p-2">
              <img class="img-detail1"
              src="${arrDetail[i]}"
              alt="Fail">
        </div>`).appendTo(".sub-slide-detail");
      $(".popup, .img-detail1").zoom();
    }

    $(`.popup`).magnificPopup({
      type: "image",
    });
    $(".sub-size").magnificPopup({
      type: "image",
    });

    $(".slide-detail").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".sub-slide-detail",
    });
    $(".sub-slide-detail").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slide-detail",
      dots: false,
      arrows: false,
      focusOnSelect: true,
    });

    let itemSize = Array.from($(".link-size-detail"));
    let x = 0;

    for (let i = 0; i < itemSize.length; i++) {
      let is = false;
      $(itemSize[i]).on("click", () => {
        x++;
        is = true;
        console.log(x);
        event.preventDefault();
        $(".link-size-detail").removeClass("active-detail");
        $(itemSize[i]).addClass("active-detail");
        if (x == 1) {
          axios
            .post("/cart", {
              id:datas.id,
              imgCart: datas.img1,
              nameCart: datas["name-product"],
              priceCart: Math.round(
                parseFloat(datas.price) * 1000000 -
                  (parseFloat(datas.price) * 1000000 * parseFloat(datas.sale)) /
                    100
              ).toLocaleString("vi-VN"),
              size: $(".active-detail .text-size-detail").text(),
              aqua:1
            })
            .then((ok) => {
              console.log(ok);
            });
        } else {
          axios.get("/cart").then((res) => {
            console.log(res);
            console.log(res.data);
            for (let x = 0; x < res.data.length; x++) {
              console.log(res.data[res.data.length - 1]);
              axios.put(`/cart/${res.data[res.data.length - 1].id}`, {
                imgCart: datas.img1,
                nameCart: datas["name-product"],
                priceCart: Math.round(
                  parseFloat(datas.price) * 1000000 -
                    (parseFloat(datas.price) *
                      1000000 *
                      parseFloat(datas.sale)) /
                      100
                ).toLocaleString("vi-VN"),
                size: $(".active-detail .text-size-detail").text() || 41,
                aqua:1
              });
            }
          });
        }
        if (is == true) {
          $(".sub-out-product2").removeAttr("disabled");
        }
      });
    }
  }
  let buy = Array.from($(`.buy`));
  $(buy).on("click", () => {
    axios.get("/cart").then((res) => {
      let data = res.data;
      console.log(data[data.length - 1]);
      axios.post("/result-product", data[data.length - 1]).then((log) => {
        console.log(log);
      });
    });
    $(`.loading`).addClass("flex-visible");
    setTimeout(() => {
      $(`.loading`).removeClass("flex-visible");
    }, 1500);
    setTimeout(() => {
      $(buy).text("Thêm vào giỏ hàng");
      window.location.href = "cart.html";
    }, 1000);
    event.preventDefault();
  });
  deatail();
  action()
  function action(){
    axios.get("/result-product").then((creat) => {
      let creats = creat.data;
      for (let i = 0; i <= creats.length; i++) {
        $(".aqua-cart").text(i);
        $(".tab-info").text(" ");
        if (i == 0) {
          $(".tab-info").text("Không có sản phẩm nào !");
          $(".text-total").css({
            display: "none",
          });
          $(".total-money").css({
            display: "none",
          });
          $(".text-cart").text("Không có sản phẩm nào !");
          $(".note-total").addClass("a");
        } else {
          $(".note-total").removeClass("a");
          $(".text-total").css({
            display: "block",
          });
          $(".total-money").css({
            display: "block",
          });
          $(".text-cart").text(" ");
          $(`<div class="header-cart">
           <div class="row h-100">
             <div class="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
               <p class="text-header-cart">Sản phẩm</p>
             </div>
             <div class="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
               <p class="text-header-cart">Giá</p>
             </div>
             <div class="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
               <p class="text-header-cart">Size</p>
             </div>
             <div class="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
               <p class="text-header-cart">Số lượng</p>
             </div>
             <div class="col-lg-2 col-md-2 d-flex justify-content-center align-items-center">
               <p class="text-header-cart">Tạm tính</p>
             </div>
           </div>
         </div>`).appendTo(".tab-info");
        }
      }
      function renderCart() {
        axios.get("/result-product").then((datas) => {
          let data = datas.data;
          console.log(data);
          data.forEach((item) => {
            $(`<li class="display-close d-flex justify-content-start align-items-center p-3">
            <div class="row">
                <div class="col-12 d-flex justify-content-start align-items-center">
                    <img class="w-25 border" src="${item.imgCart}" alt="Fail">
                    <div class="info-display w-75 ms-3">
                        <p class="name-display m-0">${item.nameCart}</p>
                        <p class="price-display m-0">${item.priceCart}</p>
                    </div>
                </div>
            </div>
            </li>`).appendTo(".item-display");
            $(`<div class="display-close mt-4 p-3 cart-checkout">
            <div class="row h-100">
              <div class="col-lg-3 col-md-3 col-3 d-flex justify-content-start align-items-center">
                <div class="row d-center">
                  <div
                    class="col-lg-5 col-md-6 col-6 col-10 display-option">
                    <img class="img-cart1" src="${item.imgCart}" alt="Fail">
                  </div>
                  <div class="col-lg-7 col-md-7 col-12 display-option">
                    <p class="text-list-product m-0">${item.nameCart}</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-12 display-option">
                <p class="text-header-cart1">Giá :</p>
                <p class="cart-money m-0">${item.priceCart}</p>
              </div>
              <div class="col-lg-2 col-md-2 col-12 display-option">
                <p class="text-header-cart1">Size :</p>
                <p class="cart-size m-0">${item.size}</p>
              </div>
              <div class="col-lg-2 col-md-2 col-12 display-option">
                <p class="text-header-cart1">Số lượng :</p>
                <input type="number" class="inputCart" value=1 min=1 max=9>
              </div>
              <div class="col-lg-2 col-md-2 col-12 display-option">
                <p class="text-header-cart1">Tạm tính :</p>
                <p class="cart-money result-money m-0" value=${item.priceCart}>${item.priceCart}đ</p>
              </div>
              <div class="col-lg-1 col-md-1 d-flex justify-content-end align-items-center">
                <a href=""><i class="bi bi-x close-cart" id=${item.id}></i></a>
              </div>
            </div>
          </div>`).appendTo(".list-cart");
  
          });
          $(".inputCart").niceNumber();
          let biXCart = Array.from($(".close-cart"));
          let input = Array.from($(".inputCart"));
          let cartMoney = Array.from($(".result-money"));
          console.log(input);
          inputUp(input,cartMoney)
          close(biXCart) 
          result(cartMoney)
        });
        
      }
      renderCart();
      function close(biXCart) {
        for (let i = 0; i < biXCart.length; i++) {
          $(biXCart[i]).on("click", () => {
            $(".cart-checkout").remove();
            axios.delete(`/result-product/${$(biXCart[i]).attr("id")}`).then((res) => {
              console.log("ok");
            });
            axios.delete(`/cart/${$(biXCart[i]).attr("id")}`).then((res) => {
              console.log("ok");
            });
            renderCart();
            action()
          });
        }
      }
      
      function inputUp(input,cartMoney){
        for (let i = 0; i < input.length; i++) {
          $(input[i]).on("input", () => {
            axios.get("/result-product").then((creats) => {
              $(cartMoney[i]).text(
                `${(
                  $(input[i]).val() *
                  parseFloat(creats.data[i].priceCart) *
                  1000000
                ).toLocaleString("vn-VN")}đ`
              );
              
              $(cartMoney[i]).attr(
                `value`,
                `${(
                  $(input[i]).val() *
                  parseFloat(creats.data[i].priceCart) *
                  1000000
                ).toLocaleString("vn-VN")}`
              );
              


              result(cartMoney);
              axios.put(`/result-product/${creats.data[i].id}`,{
                id: creats.data[i].id,
                imgCart: creats.data[i].imgCart,
                nameCart: creats.data[i].nameCart,
                priceCart: creats.data[i].priceCart,
                size: creats.data[i].size,
                aqua: $(input[i]).val()
            })
            });
            
          });
        }
      }
      function result(cartMoney) {
        let resultMoney = 0;
        cartMoney.forEach((cart) => {
          let dataMoney = $(cart).attr("value");
          resultMoney += parseFloat(dataMoney);
          $(".total-money").text(
            `${(resultMoney * 1000000).toLocaleString("vi-VN")}đ`
          );
          $(".money-info").text(
            `${(resultMoney * 1000000).toLocaleString("vi-VN")}đ`
          );
          $(".checkout-money").text(
            `${(resultMoney * 1000000).toLocaleString("vi-VN")}đ`
          );
        });
      }
    });
  }

  let arrayStar = Array.from($(".rating-review .bi-star-fill"));
  for (let i = 0; i < arrayStar.length; i++) {
    $(arrayStar[i]).on("click", () => {
      $(".rating-review .bi-star-fill").css({
        color: "#636363",
      });
      console.log(i);
      for (let x = 0; x <= i; x++) {
        $(arrayStar[x]).css({
          color: "#ff9727",
        });
      }
    });
  }
  //Data product
  let arrBorder = Array.from($(`.select-link`));
  for (let i = 0; i < arrBorder.length; i++) {
    $(arrBorder[i]).on("click", () => {
      event.preventDefault();
      $(`.select-link`).removeClass(`border-active`);
      $(arrBorder[i]).addClass(`border-active`);
    });
  }

  axios.get("/arrival-Product").then((res) => {
    let dataProduct = res.data;
    let product = Array.from($(".render-product"));
    renderArrival(dataProduct, 0, 7, product[0]);
    renderArrival(dataProduct, 7, 14, product[1]);
    renderArrival(dataProduct, 14, 21, product[2]);
  });
  let load = 0;
  function renderArrival(datas, a, b, sel) {
    load++;
    datas.slice(a, b).forEach((data) => {
      $(`<div class="product">
        <div class="img-cart position-relative overflow-hidden h-75 d-flex justify-content-center align align-items-center ">
          <div class="row">
            <div class=" col-lg-12 d-flex justify-content-start align-items-center ">
              <img class="img-product" src="${data.img1}" alt="Fail" />
              <img class="img-product1" src="${data.img2}" alt="Fail" />
            </div>
          </div>
          <div class=" sale position-absolute d-flex justify-content-center align align-items-center ">
            <p class="text-sale m-0">${data.sale}</p>
          </div>
          <a class="heart position-absolute" href="">
            <i class="bi bi-heart-fill" id=${data.id}></i>
          </a>
          <div class="option-cart w-100 position-absolute">
            <div class="row h-100">
              <div class=" col-lg-12 col-12 h-100 d-flex justify-content-center align-items-center ">
                <a href="./detail.html?productId=${
                  data.id
                }" class="text-buy text-center m-0">Mua ngay!</a>
              </div>
            </div>
          </div>
        </div>
        <div class="content-cart  h-25">
          <div class="row h-100">
            <div class="col-lg-12 h-100">
              <div class=" star-brand d-flex justify-content-between align-items-center ps-3 pe-3 ">
                <p class="brand-sneaker m-0">${data.brand}</p>
                <div class="rate">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>
              <div class=" price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                <div class=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                  <p class="text-name m-0">${data["name-product"]}</p>
                  <p class="text-price m-0">
                  ${Math.round(
                    parseFloat(data.price) * 1000000 -
                      (parseFloat(data.price) *
                        1000000 *
                        parseFloat(data.sale)) /
                        100
                  ).toLocaleString("vi-VN")}
                    <span class="old-price">${data.price}</span>
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`).appendTo(sel);
    });
    if (load === 3) {
      datas.slice(21, 29).forEach((data) => {
        $(`<div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-4">
        <div class="product">
          <div class="img-cart overflow-hidden position-relative h-75 d-flex justify-content-center align align-items-center ">
            <div class="row">
              <div class=" col-lg-12 d-flex justify-content-start align-items-center ">
                <img class="img-product" src="${data.img1}" alt="Fail" />
                <img class="img-product1" src="${data.img2}" alt="Fail" />
              </div>
            </div>
            <div class=" sale position-absolute d-flex justify-content-center align align-items-center ">
              <p class="text-sale m-0">${data.sale}</p>
            </div>
            <a class="heart position-absolute" href="">
              <i class="bi bi-heart-fill" id=${data.id}></i>
            </a>
            <div class="option-cart w-100 position-absolute">
              <div class="row h-100">
                <div class=" col-lg-12 col-12 h-100 d-flex justify-content-center align-items-center ">
                  <a href="./detail.html?productId=${
                    data.id
                  }" class="text-buy text-center m-0">Mua ngay!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="content-cart h-25">
            <div class="row h-100">
              <div class="col-lg-12 h-100">
                <div class=" star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                  <p class="brand-sneaker m-0">${data.brand}</p>
                  <div class="rate">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
                <div class=" price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                  <div class=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                    <p class="text-name m-0">${data["name-product"]}</p>
                    <p class="text-price m-0">
                    ${Math.round(
                      parseFloat(data.price) * 1000000 -
                        (parseFloat(data.price) *
                          1000000 *
                          parseFloat(data.sale)) /
                          100
                    ).toLocaleString("vi-VN")}
                      <span class="old-price">${data.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>`).appendTo(".render-out-product");
      });
      function renderOut(datas) {
        let url = new URLSearchParams(window.location.search);
        let numberPage = url.get("_page") || 1;
        let numberLimit = url.get("_limit") || 15;
        datas
          .slice((numberPage - 1) * numberLimit, numberLimit * numberPage)
          .forEach((data) => {
            $(`<div class="col-lg-4 col-md-4 col-sm-6 mt-4">
          <div class="product">
            <div class=" img-cart overflow-hidden position-relative h-75 d-flex justify-content-center align align-items-center ">
              <div class="row">
                <div class=" col-lg-12 d-flex justify-content-start align-items-center "> 
                  <img class="img-product" src="${data.img1}" alt="Fail" />
                  <img class="img-product1" src="${data.img2}" alt="Fail" />
                </div>
              </div>
              <div class=" sale position-absolute d-flex justify-content-center align align-items-center ">
                <p class="text-sale m-0">${data.sale}</p>
              </div>
              <a class="heart position-absolute" href="">
                <i class="bi bi-heart-fill" id=${data.id}></i>
              </a>
              <div class="option-cart w-100 position-absolute">
                <div class="row h-100">
                  <div class=" col-lg-12 col-12 h-100 d-flex justify-content-center align-items-center ">
                    <a href="./detail.html?productId=${
                      data.id
                    }" class="text-buy text-center m-0">Mua ngay!</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-cart h-25">
              <div class="row h-100">
                <div class="col-lg-12 h-100">
                  <div class="  star-brand d-flex justify-content-between align-items-center ps-3 pe-3">
                    <p class="brand-sneaker m-0">${data.brand}</p>
                    <div class="rate">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div class="price d-flex justify-content-between align-items-center ps-3 pe-3 ">
                    <div class=" name-sneaker d-flex justify-content-center align-items-start flex-column w-100 h-100 ">
                      <p class="text-name m-0">
                        ${data["name-product"]}
                      </p>
                      <p class="text-price m-0">
                      ${Math.round(
                        parseFloat(data.price) * 1000000 -
                          (parseFloat(data.price) *
                            1000000 *
                            parseFloat(data.sale)) /
                            100
                      ).toLocaleString("vi-VN")}
                        <span class="old-price">${data.price}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>`).appendTo(".renderOut");
            $(".text-sort").text(
              `Hiển thị ${(numberPage - 1) * numberLimit} - ${
                numberLimit * numberPage
              } trong 30 sản phẩm`
            );
          });
      }
      function productMost(datas) {
        datas.slice(23, 26).forEach((data) => {
          $(`<a href="./detail.html?productId=${data.id}" class="list-most d-block p-3">
        <div class="row hight">
          <div class="col-lg-5">
            <div class="img-most">
              <img src="${data.img1}" alt="Fail" class="link-img">
            </div>
          </div>
          <div class="col-lg-7 p-0">
            <div
              class="header-most d-flex justify-content-between align-items-start flex-column">
              <p class="most-name mb-2">${data["name-product"]}</p>
              <p class="price-most m-0">${data.price}</p>
              <p class="rating m-0">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
            </div>
          </div>
        </div>
        </a>`).appendTo(".item-most");
        });
      }
      renderOut(datas);
      productMost(datas);
      function postHeart() {
        let arrHeart = Array.from($(`.bi-heart-fill`));
        for (let i = 0; i < arrHeart.length; i++) {
          let numberHeart = 0;
          $(arrHeart[i]).on("click", () => {
            $(".like-product").remove();
            event.preventDefault();
            $(arrHeart[i]).css({
              color: "rgb(197, 79, 79)",
            });
            axios.get("/arrival-Product").then((res) => {
              function postLike() {
                let datas = res.data;
                console.log(datas[i]);
                return {
                  nameHeart:
                    datas[$(arrHeart[i]).attr("id") - 1]["name-product"],
                  imgHeart: datas[$(arrHeart[i]).attr("id") - 1].img1,
                  priceHeart: datas[$(arrHeart[i]).attr("id") - 1].price,
                };
              }
              axios.get("/product-heart").then((result) => {
                let result1 = result.data.find((sul) => {
                  return (
                    datas[$(arrHeart[i]).attr("id") - 1]["name-product"] ==
                    sul["nameHeart"]
                  );
                });
                if (typeof result1 == "object") {
                  alert(
                    `Đã thêm giày ${
                      datas[$(arrHeart[i]).attr("id") - 1]["name-product"]
                    } vào danh sách yêu thích của bạn`
                  );
                } else {
                  axios.post("/product-heart", postLike()).then(res);
                  alert(
                    `Đã thêm giày ${
                      datas[$(arrHeart[i]).attr("id") - 1]["name-product"]
                    } vào danh sách yêu thích của bạn`
                  );
                }
                renderHeart();
              });
            });
          });
        }
      }
      function renderHeart() {
        axios.get("/product-heart").then((res1) => {
          let datas1 = res1.data;
          datas1.forEach((heart) => {
            $(`<div class="like-product">
            <div class="row">
            <div class="col-lg-12">
              <div class="row">
                  <div class="col-lg-1 select-chon p-0  justify-content-start align-items-center">
                      <input type="checkbox">
                  </div>
                <div class="col-lg-3 bccl d-flex justify-content-center align-items-center">
                  <img src="${heart.imgHeart}" alt="Fail">
                </div>
                <div class="col-lg-8">
                  <div class="content-like h-100 d-flex justify-content-between align-items-start flex-column">
                    <p class="name-like m-0">${heart.nameHeart}</p>
                    <p class="money-like m-0 mb-3">${heart.priceHeart}</p>
                    <div class="combo-like d-flex justify-content-start align-items-center">
                      <a href="./detail.html" class="add-now me-3">Mua ngay</a>
                      <a href="" class="remove-like" id=${heart.id}>Bỏ thích</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>`).appendTo(".list-like");
          });
          if (!$("div").hasClass("like-product")) {
            $(`<p class="empty-like">Không có sản phẩm yêu thích</p>`).appendTo(
              ".list-like"
            );
            $(".add-all").text("Tiếp tục mua sắm");
            $(".item-chon").text(" ");
          } else {
            $(".empty-like").remove();
            $(".add-all").text("Thêm vào giỏ hàng");
            $(".item-chon").text("Chọn nhiều");
          }
          let $removeNow = Array.from($(`.remove-like`));
          let $listLike = Array.from($(`.like-product`));
          for (let remove = 0; remove < $removeNow.length; remove++) {
            $($removeNow[remove]).on(`click`, () => {
              $(`.like-product`).remove();
              console.log(remove);
              let idHeart = $($removeNow[remove]).attr("id");
              event.preventDefault();
              axios.delete(`/product-heart/${Number(idHeart)}`).then((remv) => {
                console.log(remv);
                renderHeart();
              });
            });
          }
          let removeAll = Array.from($(`.remove-all`));
          $(removeAll).on(`click`, () => {
            $(`.empty-like`).remove();
            event.preventDefault();

            $(`.like-product`).remove();
            if (!$("div").hasClass("like-product")) {
              $(".item-chon").css({
                display: "none",
              });
              $(
                `<p class="empty-like">Không có sản phẩm yêu thích</p>`
              ).appendTo(".list-like");
            }
          });
        });
      }

      postHeart();
      renderHeart();
      animation();
    }
    slickSlide(sel);
  }
  function slickSlide(sel) {
    $(sel).slick({
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      adaptiveHeight: true,
      adaptiveWidth: true,
      arrows: true,
      prevArrow: `<i class="bi bi-chevron-compact-left position-absolute"></i>`,
      nextArrow: `<i class="bi bi-chevron-compact-right position-absolute"></i>`,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  }

  //animationProduct
  function animation() {
    let transformProduct = [
      0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5,
      1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3,
      3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5,
      4.6, 4.7, 4.8, 4.9,
    ];
    let $Product = Array.from($(`.transform-product`));
    let $Product1 = Array.from($(`.product`));
    let $Product2 = Array.from($(`.render-sneaker .product`));
    $(window).on("scroll", () => {
      let x = document.documentElement.scrollTop;
      if (x > 300) {
        for (let i = 0; i < $Product2.length; i++) {
          $($Product2[i]).css({
            animation: "product 0.5s ease forwards",
            "animation-delay": `${transformProduct[i] + "s"}`,
          });
        }
      }
      if (x > 1300) {
        for (let i = 0; i < $Product1.length; i++) {
          $($Product1[i]).css({
            animation: "product 0.5s ease forwards",
            "animation-delay": `${transformProduct[i] + "s"}`,
          });
        }
      }
      if (x > 2000) {
        for (let i = 0; i < $Product.length; i++) {
          $($Product[i]).css({
            animation: "product 0.5s ease forwards",
            "animation-delay": `${transformProduct[i] + "s"}`,
          });
        }
      }
      if (x > 950) {
        $(`.img-adds`).css({
          animation: "img 0.7s ease forwards",
        });
      }
      if (x > 100) {
        $(`.direct`).addClass("hide");
        $(`.list-shopping`).css({
          "margin-top": "120px",
        });
        $(`.dropdown-menu1`).css({
          top: 0,
          height: "350px",
        });
        $(`.content-body`).css({
          marginTop: "90px",
        });
        $(`.header-menu`).css({
          top: "-60px",
        });
        $(`.header`).css({
          top: 0,
        });
      } else {
        $(`.direct`).removeClass("hide");
        $(`.list-shopping`).css({
          "margin-top": "170px",
        });
        $(`.dropdown-menu1`).css({
          top: 0,
          height: "450px",
        });
        $(`.header-menu`).css({
          top: 0,
        });
        $(`.content-body`).css({
          marginTop: "150px",
        });
        $(`.header`).css({
          top: "50px",
        });
      }
    });
  }
  let arrMethod = Array.from($(".select-method"))
  let inputMethod =  Array.from($(".select-method input"))
  for(let i = 0;i < arrMethod.length;i++){
    $(arrMethod[i]).on("click",()=>{
      $(".select-method").removeClass("active-checked")
      $(arrMethod[i]).addClass("active-checked")
    })
  }
  let resultCard = 0
  axios.get("/result-product").then(response=>{
    let responses = response.data
    responses.forEach(res=>{
      $(`<div class="product-checkout pt-4 pb-4">
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-between align-items-center">
          <div class="combor-card">
            <p class="text-list-product text-start">${res.nameCart}</p>
            <p class="cart-money checkout-money">${res.priceCart}đ</p>
          </div>
          <p class="text-list-product m-0"><span>x</span> ${res.aqua}</p>
        </div>
      </div>
      </div>`).appendTo(".list-check")
      
    })
  })
});
