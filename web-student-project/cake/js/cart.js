$(document).ready(function () {
  let arrList = [
    {
      id: 1,
      name: "Pizza",
      price: 150,
      amount: 1,
      url: "./img/cart-1.png",
      total: function () {
        return this.price * this.amount;
      },
    },
    {
      id: 2,
      name: "Humburger",
      price: 50,
      amount: 1,
      url: "./img/cart-2.png",
      total: function () {
        return this.price * this.amount;
      },
    },
    {
      id: 3,
      name: "Phô Mai",
      price: 50,
      amount: 1,
      url: "./img/cart-3.png",
      total: function () {
        return this.price * this.amount;
      },
    },
  ];
  let table = $("#cart__table");

  function render(arr) {
    let topHtml = `<tr>
      <th class="cart__delete">Xóa</th>
      <th class="cart__img"> </th>
      <th>Tên Sản Phẩm</th>
      <th>Giá</th>
      <th>Số Lượng</th>
      <th>Tổng Giá</th>
    </tr>`;
    let arrHtml = arr.map((obj) => {
      return `
         
        <tr class="cart__row" data-id="${obj.id}">
        <td> <i class="far fa-trash-alt"></i></td>
        <td class="cart__img"> 
        <div class="cart__photo" >
        <img src=${obj.url} alt="${obj.name}" title="${obj.name}"/>
      </div>
      </td>
        <td>${obj.name}</td>
        <td>${obj.price},000 đ</td>
        <td> 
          <div class="cart__select"><i class="fas fa-minus" ></i><span class="details__number-basket">${
            obj.amount
          }                              </span><i class="fas fa-plus"></i></div>
        </td>
        <td>${obj.total()},000 đ</td>
      </tr>
      
      `;
    });

    
    table.html(topHtml + arrHtml.join(""));
  }

  render(arrList);

  $(document).on("click", ".cart__select .fa-minus", function () {
    

    let index = $(this).closest(".cart__row").data("id");

    for (const obj of arrList) {
      if (obj.id === index && obj.amount > 1) {
       
        obj["amount"] = obj.amount - 1;
      }
    }

    render(arrList);
  });

  $(document).on("click", ".cart__select .fa-plus", function () {
  

    let index = $(this).closest(".cart__row").data("id");

    for (const obj of arrList) {
      if (obj.id === index) {
       
        obj["amount"] = obj.amount + 1;
      }
    }
    
    render(arrList);
  });

  $(document).on("click", ".fa-trash-alt", function () {
    let index = $(this).closest(".cart__row").data("id");
   

    let arrNew = arrList.filter((obj) => {
      return obj.id !== index;
    });
    arrList = arrNew;
    

    render(arrList);
  });

  $(window).on("load resize", function () {
    let width = $(this).width();
    

    if (width <= 576) {
      $("#cart__table tr .cart__img").css({ display: "none" });
    }
    if (width > 576) {
      $("#cart__table tr .cart__img").css("display", "table-cell");
    }
  });
});
