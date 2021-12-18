//Demo
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
// Slick slide partner mobile
$(".partner__list--mobile").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
  ],
});
//----------------------
// about onclick
$(".about--desktop__content__wrap").click(function () {
  window.location.href = "about.html";
});
// Render index mobile
let renderProduct = (pd) => {
  for (let i = 0; i < 6; i++) {
    let deskIndex = `<div class="product--desktop__item">
                <img
                  src="assest/product/${pd[i].id}/1.jpg"
                  alt=""
                  class="product--desktop__item__img"
                />
                <a href="productitem.html?productId=${pd[i].id}" class="product--desktop_item_link"
                  ><div
                    class="
                      product--desktop__item__content
                      product--desktop__item__content__scaleX
                    "
                  >
                    <div class="product--desktop__item__content__header">
                      Mở bán ${pd[i].houseName}
                    </div>
                    <div
                      class="content-font"
                      style="margin-top: 5px !important"
                    >
                      Diện tích: ${pd[i].square} m2 - ${pd[i].bedRom} Phòng Ngủ
                    </div>
                  </div></a
                >
              </div>`;
    let mobileIndex = `<div class="col-12">
              <div class="product--mobile__item">
                <img
                  src="assest/product/${pd[i].id}/1.jpg"
                  alt=""
                  class="product--mobile__item__img"
                />
                <a
                  href="productitem.html?productId=${pd[i].id}"
                  class="product--mobile_item_link"
                  ><div
                    class="
                      product--mobile__item__content
                      product--mobile__item__content__scaleX
                    "
                  >
                    <div class="product--mobile__item__content__header">
                      Mở bán ${pd[i].houseName}
                    </div>
                    <div
                      class="content-font"
                      style="margin-top: 5px !important"
                    >
                      Diện tích: ${pd[i].square} m2 - ${pd[i].bedRom} Phòng Ngủ
                    </div>
                  </div></a
                >
              </div>
            </div>`;
    let indexProductDesk = $("#product_data--desktop");
    let indexMobileDesk = $("#index__product--mobile");
    indexProductDesk.append(deskIndex);
    indexMobileDesk.append(mobileIndex);
  }
};
renderProduct(product);
// valied form
const validateEmail = (email) => {
  const reEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return reEmail.test(email);
};
const validateName = (nameForm) => {
  let reName =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
  return reName.test(nameForm);
};
const validatePhone = (phoneForm) => {
  let rePhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  return rePhone.test(phoneForm);
};
let isvalid;
let isvalidName;
let isvalidPhone;
const checkValidEmail = () => {
  const e = document.getElementById("validationEmail").value;
  if (validateEmail(e) == false) {
    document.getElementById("em-feedback").style.display = "block";
    isvalid = false;
  } else {
    document.getElementById("em-feedback").style.display = "none";
    isvalid = true;
  }
  return isvalid;
};
const checkValidName = () => {
  const n = document.getElementById("validationName").value;
  if (validateName(n) == false) {
    document.getElementById("name-feedback").style.display = "block";
    isvalidName = false;
  } else {
    document.getElementById("name-feedback").style.display = "none";
    isvalidName = true;
  }
  return isvalidName;
};
const checkValidPhone = () => {
  const phone = document.getElementById("validationPhoneNumber").value;
  if (validatePhone(phone) == false) {
    document.getElementById("phone-feedback").style.display = "block";
    isvalidPhone = false;
  } else {
    document.getElementById("phone-feedback").style.display = "none";
    isvalidPhone = true;
  }
  return isvalidPhone;
};

$("#submit").click(function () {
  if (
    checkValidEmail() == true &&
    checkValidName() == true &&
    checkValidPhone() == true
  ) {
    alert("Chúng tôi đã nhận được tin nhắn của bạn");
    console.log(checkValidEmail());
    console.log(checkValidName());
    console.log(checkValidPhone());
  } else {
    alert("Sai thông tin xin mời điền lại form");
    console.log(checkValidEmail());
    console.log(checkValidName());
    console.log(checkValidPhone());
  }
});
