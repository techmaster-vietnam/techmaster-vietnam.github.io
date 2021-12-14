const openCart = document.querySelector(".cart__icon");

const closeCart = document.querySelector(".close__cart");
const productDOM = document.querySelector(".product__center");
const cartDOM = document.querySelector(".cart__center");
const itemTotals = document.querySelector(".item__total");
const cartTotal = document.querySelector(".cart__total");

const overlay = document.querySelector(".cart__overlay");
const cartShow = document.querySelector(".cart");
// const clearCartBtn = document.querySelector(".clear__cart");
let cart = [];

let buttonDOM = [];

// Ui
class UI {
  displayProducts(obj) {
    let result = ``;
    obj.forEach(
      ({ image1, image2, id, title, old_price, curr_price, shape }) => {
        result += `
            <div class=" col-6 col-xxl-4 itemBox ${shape} ">
              <div  class="product-card">
                
                <a href="./product-detail.html">
                <div class="product-card-img">
                  <img src="${image1}" alt="" />
                  <img src="${image2}" alt="" />
                </div></a>
                <div class="product-card-info">
                  <div class="product-btn">
                    
                    <button  class="btn-flat-reverse btn-hover-reverse addToCart" data-id="${id}"
                      >Thêm vào giỏ hàng</
                    >

                    
                    
                  </div>
                  <div class="product-card-name"><h4>${title}</h4></div>
                  <div class="product-price">
                    <span><del>$${old_price} </del></span>
                    <span class="curr-price">$${curr_price} </span>
                  </div>
                </div>
              </div>
            </div>
        `;
      }
    );
    productDOM.innerHTML = result;
  }
  getButtons() {
    //   tao Array
    const buttons = [...document.querySelectorAll(".addToCart")];
    // console.log(buttons);
    buttonDOM = buttons;
    buttons.forEach((button) => {
      const id = button.dataset.id;
      // console.log(id);
      const inCart = cart.find((item) => item.id === parseInt(id, 6));
      console.log(inCart);

      if (inCart) {
        button.innerText = "Đã thêm";
        button.disabled = true;
      }

      button.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.innerHTML = "Đã thêm";
        e.target.disabled = true;
        // Get product from products
        const cartItem = { ...Storage.getProducts(id), amount: 1 };
        console.log(cartItem);

        // Add the product to cart
        cart = [...cart, cartItem];
        // Store the produt in local sotorage
        Storage.saveCart(cart);
        // setItemValues
        this.setItemValues(cart);
        // display the items in the cart
        this.addToCart(cartItem);
      });
    });
  }

  setItemValues(cart) {
    let tempTotal = 0;
    let itemTotal = 0;

    cart.map((item) => {
      tempTotal += item.curr_price * item.amount;
      itemTotal += item.amount;
    });
    itemTotals.innerText = itemTotal;
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
  }

  addToCart({ title, curr_price, image1, id }) {
    let div = document.createElement("div");
    div.classList.add("cart__item");

    div.innerHTML = `
      <img src="${image1}" alt="" />
            <div>
              <h3>${title}</h3>
              <h3 class="price">${curr_price}</h3>
            </div>
            <div>
              <span data-id="${id}" class="increase">
                <i class="bi bi-plus-lg"></i>
              </span>
              <p>1</p>
              <span  data-id="${id}" class="decrease">
                <i class="bi bi-dash-lg"></i>
              </span>
            </div>

            <div>
              <span class="remove__item" data-id=${id}>
                <i class="bi bi-trash-fill"></i>
              </span>
            </div>
    `;

    cartDOM.appendChild(div);
  }

  show() {
    cartShow.classList.add("show");
    overlay.classList.add("show");
  }
  hide() {
    cartShow.classList.remove("show");
    overlay.classList.remove("show");
  }

  setAPP() {
    cart = Storage.getCart();
    console.log(cart);
    this.setItemValues(cart);
    this.populate(cart);

    openCart.addEventListener("click", this.show);
    closeCart.addEventListener("click", this.hide);
  }

  populate(cart) {
    cart.forEach((item) => this.addToCart(item));
  }

  cartLogic() {
    // clear Cart

    // clearCartBtn.addEventListener("click", () => {
    //   this.clearCart();
    //   this.hide();
    // });
    
    // Cart funtionality
    cartDOM.addEventListener("click", (e) => {
      const target = e.target.closest("span");
      const targetElement = target.classList.contains("remove__item");
      // console.log(targetElement)
      if (!target) return;

      if (targetElement) {
        const id = parseInt(target.dataset.id);
        // console.log(id)
        this.removeItem(id);
        cartDOM.removeChild(target.parentElement.parentElement);
      } else if (target.classList.contains("increase")) {
        const id = parseInt(target.dataset.id, 10);
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount++;
        Storage.saveCart(cart);
        this.setItemValues(cart);
        target.nextElementSibling.innerText = tempItem.amount;
      } else if (target.classList.contains("decrease")) {
        const id = parseInt(target.dataset.id, 10);
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount--;

        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setItemValues(cart);
          target.previousElementSibling.innerText = tempItem.amount;
        } else {
          this.removeItem(id);
          cartDOM.removeChild(target.parentElement.parentElement);
        }
      }
    });
  }

  // clearCart() {
  //   const cartItem = cart.map((item) => item.id);
  //   cartItem.forEach((id) => this.removeItem(id));

  //   while (cartDOM.children.length > 0) {
  //     cartDOM.removeChild(cartDOM.children[0]);
  //   }
  // }

  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setItemValues(cart);
    Storage.saveCart(cart);

    // let button = this.singleButton(id);
    // button.disable = true;
    // button.innerText = "Add to Cart";
  }

  singleButton(id) {
    return buttonDOM.find((button) => parseInt(button.dataset.id) === id);
  }
}

// Storage

class Storage {
  static saveProducts(obj) {
    localStorage.setItem("products", JSON.stringify(obj));
  }
  static saveCart(cart) {
    localStorage.setItem("carts", JSON.stringify(cart));
  }
  static getProducts(id) {
    const products = JSON.parse(localStorage.getItem("products"));
    return products.find((item) => item.id === parseInt(id));
  }
  static getCart() {
    return localStorage.getItem("carts")
      ? JSON.parse(localStorage.getItem("carts"))
      : [];
  }
}

// Products
class Products {
  async getProducts() {
    try {
      const results = await fetch("products.json");
      const data = await results.json();
      // console.log(data);
      const products = data.items;
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const ui = new UI();
  const products = new Products();

  ui.setAPP();
  ui.cartLogic();

  const productsObj = await products.getProducts();
  ui.displayProducts(productsObj);

  Storage.saveProducts(productsObj);
  ui.getButtons();
});

