let list_item = $("#productlist_item");
const paging_dom = $('#paging')
let list_Product = [{
        img: "../../img/all-product-page/jaguar/jaguar1.jpeg",
        title: "Isla Top",
        des: "Professional",
        price: 100,
        isNew: true,
        saleOff: false,
        like_new: false,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar2.jpeg",
        title: "Hanalei Bottom",
        des: "Brazilian coverage",
        price: 80,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Bottoms",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar3.jpeg",
        title: "Bahamas Top & Bottom",
        des: "White Sand Crinkle",
        price: 890,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar4.jpeg",
        title: "Tango Bottom",
        des: "White Crinkle Linen",
        price: 750,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "Bottoms",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar5.jpeg",
        title: "Isla Bottom",
        des: "Navy Rib",
        price: 380,
        isNew: false,
        saleOff: false,
        like_new: true,
        brandNew: "Bottoms",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar6.jpeg",
        title: "Tango Top",
        price: 270,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar7.jpeg",
        title: "Lucas One Piece",
        des: "Persimmon Jacquard",
        price: 300,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "One pieces",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar8.jpeg",
        title: "Tango Bottom",
        des: "Persimmon Jacquard",
        price: 120,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Bottoms",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar9.jpeg",
        title: "Cabo San Lucas Top",
        des: "Persimmon Jacquard",
        price: 190,
        isNew: false,
        saleOff: true,
        like_new: true,
        brandNew: "Tops",
    },
    {
        img: "../../img/all-product-page/jaguar/jaguar10.jpeg",
        title: "Amelia short Top",
        des: "White Crinkle Linen",
        price: 75,
        isNew: true,
        saleOff: true,
        like_new: false,
        brandNew: "Top",
    },
];

let filters = {
    price: -1,
    new: -1,
    brandNew: -1,
    rangePrice: {
        from: -1,
        to: -1
    }
};
var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
});

let perPage = 9
let currentPage = 1
let totalItem = list_Product.length // 13
let totalPage = totalItem % perPage > 0 ? (Math.floor(totalItem / perPage)) + 1 : Math.floor(totalItem / perPage)

const renderList = (list) => {
    let str = "";
    let lastIndex = (perPage * currentPage) - 1
    let fisrtIndex = lastIndex - perPage - 1 >= 0 ? lastIndex - perPage - 1 : 0
    let currentList = [...list].splice(fisrtIndex, perPage)
    currentList.forEach((item) => {
        str += `
      <div class="col-sm">
      <div class="suggest">
          <div class="suggest-photo">
          <a href="https://rinzielinh.github.io/BADBUNNYSWIMWEAR/pages/product-details/product-details.html">
              <img class="suggest-photos" src="${item.img}" alt="">
              </a>
          </div>
          <div class="suggest-name">${item.title}</div>
          
          <div class="suggest-price">$${item.price}</div>
          <div class="suggest-colors">
              <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L18.6603 15H1.33975L10 0Z" fill="#F5542C"/>
                      <path d="M30 0L38.6603 15H21.3397L30 0Z" fill="#95E8E3"/>
                      <path d="M50 0L58.6603 15H41.3397L50 0Z" fill="#F4BFBF"/>
                      <path d="M70 0L78.6603 15H61.3397L70 0Z" fill="#D5CBFE"/>
                      <path d="M90 0L98.6603 15H81.3397L90 0Z" fill="#FDF5AA"/>
                      <path d="M10 20L18.6603 35H1.33975L10 20Z" fill="#F5542C"/>
                      <path d="M30 20L38.6603 35H21.3397L30 20Z" fill="#F5542C"/>
                      </svg>
          </div>
          <div class="btn-addToCart-suggest" onclick="moveToCart()">
              <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
                  <span class="add-btn" data-add-to-cart-text="" ecl="true">ADD TO CART</span>
                  <span class="hide" data-loader="" ecl="true">
                    <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
                  </span>
              </button></div>
  
      </div>
  </div> 
          `;
    });
    return str;
};
const moveToCart = () => {
    location.replace('https://rinzielinh.github.io/BADBUNNYSWIMWEAR/pages/shopping-cart/shopping-cart.html')
}
const filterList = (list) => {

    let els = renderList(list);
    list_item.html("");

    list_item.append(`
      ${els}
    `);
    updatePaging()
};
filterList(list_Product);


const handleFilterByPrice = (data, order) => {
    let newData;
    if (order === 1) {
        // filter price nho hon 10 trieu
        newData = data.filter((item) => {
            return item.price < 100;
        });
    }
    if (order === 2) {
        // filter price tu 10 - 20 trieu
        newData = data.filter((item) => {
            return item.price >= 100 && item.price <= 200;
        });
    }
    if (order === 3) {
        // filter price tu 20 - 50 trieu
        newData = data.filter((item) => {
            return item.price >= 200 && item.price <= 500;
        });
    }
    if (order === 4) {
        // filter price hon 50 trieu
        newData = data.filter((item) => {
            return item.price > 500;
        });
    }
    return newData;
};


const handleFilterByNew = (data, order) => {
    // xu ly filter by new
    let newData;
    if (order === 1) {
        newData = data.filter((item) => {
            return item.isNew;
        });
    }
    if (order === 2) {
        newData = data.filter((item) => {
            return item.saleOff;
        });
    }
    if (order === 3) {
        newData = data.filter((item) => {
            return item.like_new;
        });
    }
    return newData;
};



const handleFilterByBrandNew = (data, order) => {
    let newData;
    if (order === 1) {
        newData = data.filter((item) => {
            return item.brandNew === "Tops";
        });
    }
    if (order === 2) {
        newData = data.filter((item) => {
            return item.brandNew === "Bottoms";
        });
    }
    if (order === 3) {
        newData = data.filter((item) => {
            return item.brandNew === "One pieces";
        });
    }
    if (order === 4) {
        newData = data.filter((item) => {
            return item.brandNew === "Beachwear";
        });
    }
    if (order === 0) {
        newData = data.filter((item) => {
            return item;
        });
    }

    return newData;
};

const handleFilterByRangePrice = (data, rangePrice) => {
    const {
        from,
        to
    } = rangePrice // let from = rangePrice.from
    let newData;
    newData = data.filter((item) => {
        return item.price >= from && item.price <= to
    });
    return newData
}

const handleFilter = () => {
    // làm nhiệm vụ filter theo object filters
    let newData = [...list_Product];
    for (let f in filters) {
        if (filters[f] === -1) {
            delete filters[f];
        }
    }

    // check validatetion range

    if (filters.rangePrice.from && filters.rangePrice.to &&
        filters.rangePrice.from !== -1 && filters.rangePrice.to !== 1 &&
        (filters.rangePrice.from >= filters.rangePrice.to)) {
        alert('from price must be less than to price')
        return
    } else if (filters.rangePrice.from && filters.rangePrice.to &&
        filters.rangePrice.from !== -1 && filters.rangePrice.to !== 1 &&
        (filters.rangePrice.from < filters.rangePrice.to)) {
        // reset cac radio o tren
        let allPrice = $('.price_input')
        allPrice.each(function(index, item) {
            item.checked = false
        });
        // delete key price
        delete filters.price
    }



    for (let f in filters) {
        if (f === "price") {
            newData = handleFilterByPrice(newData, filters[f]);
        }
        if (f === "new") {
            newData = handleFilterByNew(newData, filters[f]);
        }
        if (f === "brandNew") {
            newData = handleFilterByBrandNew(newData, filters[f]);
        }
        if (f === "rangePrice" && filters.rangePrice.from && filters.rangePrice.to &&
            filters.rangePrice.from !== -1 && filters.rangePrice.to !== 1 &&
            (filters.rangePrice.from < filters.rangePrice.to)) {
            newData = handleFilterByRangePrice(newData, filters[f]);
        }

    }
    filterList(newData);
};

const filterByPrice = (dom) => {
    const order = +dom.value
    filters.price = order;
    // reset input range
    $('#from_price').val('')
    $('#to_price').val('')
    delete filters.rangePrice.from
    delete filters.rangePrice.to
    handleFilter();
};
const filterByNew = (order) => {
    filters.new = order;
    handleFilter();
};
const filterByBrandNew = (dom) => {
    const order = +dom.value
    filters.brandNew = order;
    handleFilter();
};



const changePriceRange = (dom) => {
    const name = dom.name
    const value = +dom.value
    if (name === 'from') {
        filters.rangePrice.from = value
    } else {
        filters.rangePrice.to = value
    }
}


const changePage = (page) => {
    currentPage = page
    filterList(list_Product)
}

const previousPage = () => {
    if (currentPage === 1) {
        return
    }
    currentPage = currentPage - 1
    filterList(list_Product)
}

const nextPage = () => {
    if (currentPage === totalPage) {
        return
    }
    currentPage = currentPage + 1
    filterList(list_Product)
}

function renderPage() {
    let str = ''

    for (let i = 1; i <= totalPage; i++) {
        str += `<li onclick="changePage(${i})" class="page-item ${currentPage === i ? 'active': ''}"><a class="page-link" href="#productlist_item">${i}</a></li>`
    }
    return str
}

function updatePaging() {

    paging_dom.html('')
    paging_dom.append(`
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li onclick="previousPage()" class="page-item"><a class="page-link" href="#productlist_item">Previous</a></li>
        ${renderPage()}
        <li onclick="nextPage()" class="page-item"><a class="page-link" href="#productlist_item">Next</a></li>
      </ul>
    </nav>
    `)
}



// các bước khi làm filter:
// B1: Tạo ra 1 biến tên là filters, ở dạng object = {price: 'level-2', new: 'level-1'}
// B2: Sau khi click vào các điều kiện , hoặc ô search -> biến đổi object filters cho phù hợp
// B3: Từ object filters sẽ filter mảng của mình theo điều kiện bên trong.








// old
// let filters = {
//     price: -1,
//     new: -1,
//     brandNew: -1,
// };
// var formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "VND",
// });

// const renderList = (list) => {
//     let str = "";
//     list.forEach((item) => {
//         str += `

//     <div class="col-sm">
//     <div class="suggest">
//         <div class="suggest-photo">
//             <img class="suggest-photos" src="${item.img}" alt="">
//         </div>
//         <div class="suggest-name">${item.title}</div>
//         <div class="suggest-price">${item.des}</div>
//         <div class="suggest-price">$${item.price}</div>
//         <div class="suggest-colors">
//             <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M10 0L18.6603 15H1.33975L10 0Z" fill="#F5542C"/>
//                     <path d="M30 0L38.6603 15H21.3397L30 0Z" fill="#95E8E3"/>
//                     <path d="M50 0L58.6603 15H41.3397L50 0Z" fill="#F4BFBF"/>
//                     <path d="M70 0L78.6603 15H61.3397L70 0Z" fill="#D5CBFE"/>
//                     <path d="M90 0L98.6603 15H81.3397L90 0Z" fill="#FDF5AA"/>
//                     <path d="M10 20L18.6603 35H1.33975L10 20Z" fill="#F5542C"/>
//                     <path d="M30 20L38.6603 35H21.3397L30 20Z" fill="#F5542C"/>
//                     </svg>
//         </div>
//         <div class="btn-addToCart-suggest">
//             <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
//                 <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
//                 <span class="hide" data-loader="" ecl="true">
//                   <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
//                 </span>
//             </button></div>

//     </div>
// </div>                 
//         `;
//     });
//     return str;
// };

// const filterList = (list) => {
//     let els = renderList(list);
//     list_item.html("");

//     list_item.append(`
//     ${els}
//   `);
// };
// filterList(list_Product);

// const handleFilterByPrice = (data, order) => {
//     let newData;
//     if (order === 1) {
//         // filter price nho hon 10 trieu
//         newData = data.filter((item) => {
//             return item.price < 100;
//         });
//     }
//     if (order === 2) {
//         // filter price tu 10 - 20 trieu
//         newData = data.filter((item) => {
//             return item.price >= 100 && item.price <= 200;
//         });
//     }
//     if (order === 3) {
//         // filter price tu 20 - 50 trieu
//         newData = data.filter((item) => {
//             return item.price >= 200 && item.price <= 500;
//         });
//     }
//     if (order === 4) {
//         // filter price hon 50 trieu
//         newData = data.filter((item) => {
//             return item.price > 500;
//         });
//     }
//     return newData;
// };
// const handleFilterByNew = (data, order) => {
//     // xu ly filter by new
//     let newData;
//     if (order === 1) {
//         newData = data.filter((item) => {
//             return item.isNew;
//         });
//     }
//     if (order === 2) {
//         newData = data.filter((item) => {
//             return item.saleOff;
//         });
//     }
//     if (order === 3) {
//         newData = data.filter((item) => {
//             return item.like_new;
//         });
//     }
//     return newData;
// };
// const handleFilterByBrandNew = (data, order) => {
//     let newData;
//     if (order === 1) {
//         newData = data.filter((item) => {
//             return item.brandNew === "Tops";
//         });
//     }
//     if (order === 2) {
//         newData = data.filter((item) => {
//             return item.brandNew === "Bottoms";
//         });
//     }
//     if (order === 3) {
//         newData = data.filter((item) => {
//             return item.brandNew === "One pieces";
//         });
//     }
//     if (order === 4) {
//         newData = data.filter((item) => {
//             return item.brandNew === "Beachwear";
//         });
//     }
//     if (order === 0) {
//         newData = data.filter((item) => {
//             return item;
//         });
//     }

//     return newData;
// };

// const handleFilter = () => {
//     // làm nhiệm vụ filter theo object filters
//     let newData = [...list_Product];
//     for (let f in filters) {
//         if (filters[f] === -1) {
//             delete filters[f];
//         }
//     }
//     for (let f in filters) {
//         if (f === "price") {
//             newData = handleFilterByPrice(newData, filters[f]);
//         }
//         if (f === "new") {
//             newData = handleFilterByNew(newData, filters[f]);
//         }
//         if (f === "brandNew") {
//             newData = handleFilterByBrandNew(newData, filters[f]);
//         }
//     }
//     filterList(newData);
// };

// const filterByPrice = (order) => {
//     filters.price = order;
//     handleFilter();
// };
// const filterByNew = (order) => {
//     filters.new = order;
//     handleFilter();
// };
// const filterByBrandNew = (order) => {
//     filters.brandNew = order;
//     handleFilter();
// };

// các bước khi làm filter:
// B1: Tạo ra 1 biến tên là filters, ở dạng object = {price: 'level-2', new: 'level-1'}
// B2: Sau khi click vào các điều kiện , hoặc ô search -> biến đổi object filters cho phù hợp
// B3: Từ object filters sẽ filter mảng của mình theo điều kiện bên trong.