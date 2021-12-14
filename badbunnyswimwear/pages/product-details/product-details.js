const checkActive = (event) => {
    console.log('event :>> ', event);
    $('.all-colors svg circle').removeClass('active-icon')
    $(event.target).next().addClass('active-icon')
}
let quantity = 0;
const moveToCart = () => {
        quantity++;
        $('.quantity').text(quantity)
            // location.replace('https://rinzielinh.github.io/BADBUNNYSWIMWEAR/pages/shopping-cart/shopping-cart.html')
    }
    // let default_data = {
    //     id: 1,
    //     img: './img/1.jpeg',
    //     name: 'LEXI TOP & BOTTOM',
    //     des: 'this is des',
    //     oldPrice: './icon/tri-set-1.svg',
    //     newPrice: '$49.00',
    //     price: '$49.00',
    //     description: {
    //         Size: 'S',
    //         Sleek: 'The second underwire top in the Monday Swimwear collection, the Maui Top draws attention with its cleavage enhancing demi-cups perfected by delicate shoulder straps and gold sliders. This top is adjustable around the bust with a soft, simple back tie so it supports you, comfortably, in all the right places.',
    //         Fabric: '96% Recycled Poly / 4% Spandex',
    //         Care: 'Click here for our care tips.',
    //         Sizing: ['Tash is a 34D and is wearing a size M.', 'Devin is a 32E and is wearing a size L.', 'Sammy is a 32C and is wearing a size S.'],
    //         Features: ['V front detail', 'Underwire cups.', 'Adjustable straps and back tie closure with gold hardware details']
    //     },
    //     imgs: {
    //         left: ['./img/product-details/2.jpeg', './img/product-details/back.jpeg', './img/product-details/1.jpeg', './img/product-details/2.jpeg'],
    //         big: ['./img/product-details/big.jpeg'],
    //         right: ['./img/product-details/2g.png', './img/product-details/sample.jpeg']
    //     }
    // }

// let data_detail = JSON.parse(localStorage.getItem('detail-data')) || default_data
// let wrap_detail = $('#wrap-detail')

// const renderImagePreView = () => {
//     let str = ""
//     if (data_detail.imgs.left.length > 0) {
//         data_detail.imgs.forEach((item, index) => {
//             str += `
//             <div class="small-left" data-id="${index}""><img class="small-left" src="${item}" alt=""></div>
//             `
//         });
//     }
//     return str
// }
// const renderImage = () => {
//     let str = ""
//     if (data_detail.imgs.right.length > 0) {
//         data_detail.imgs.right.forEach((item, index) => {
//             str += `
//                 <div class="small-photo">
//                     <div class="small-right"><img class="small-right" src="${item}" alt=""></div>
//                     <div class="small-right ${index}"><img class="small-right" src="../../img/product-details/sample.jpeg" alt=""></div>
//                 </div>
//             `
//         });


//     }
//     return str
// }

// const renderBigphoto = () => {
//     let str = ""
//     if (data_detail.imgs.big.length > 0) {
//         data_detail.imgs.big.forEach((item, index) => {
//             str += `
//             <div class="big-photo" data-id-big =${index}>
//                     <img class="big-photo" src="${item}" alt="">
//                 </div>
//             `
//         });
//     }
//     return str
// }

// // const renderDes = () => {
// //     let obj = data_detail.description
// //     let str = ''
// //     for (item in obj) {
// //         let value = obj[item]
// //         str += `
// //         <div class="item-why">
// //         <span class="key-des">${item.replace('_', '')}: </span>
// //         <span class="item-des">${value}</span>
// //         </div>
// //         `
// //     }
// //     return str
// // }
// // renderDes()

// wrap_detail.append(`
// <div class="wrap-detail">
//         <div class="photo-group">
//             <div class="left-photo">
//                ${renderImagePreView()}
//             </div>
//             <div class="right-photo">
//                 ${renderBigphoto()}
//                 <div class="small-photo">
//                 ${renderImage()}
//                 </div>
//             </div>
//         </div>
//         <div class="product-info">
//             <div class="product-name">Maui Top - Neon Pink Crinkle ${data_detail.name}</div>
//             <div class="product-price">$69.00${data_detail.price}</div>
//             <div class="rate-star">
//                 <div class="star">
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 0C10.3788 0 10.7251 0.214002 10.8945 0.552786L13.4734 5.7106L19.144 6.53541C19.5206 6.5902 19.8335 6.85402 19.9511 7.21599C20.0687 7.57796 19.9706 7.97531 19.6981 8.241L15.571 12.2649L16.4994 17.9385C16.5608 18.3135 16.4043 18.6908 16.0957 18.9124C15.787 19.1339 15.3794 19.1614 15.0438 18.9834L10 16.3071L4.95624 18.9834C4.62062 19.1614 4.21306 19.1339 3.9044 18.9124C3.59573 18.6908 3.4393 18.3135 3.50065 17.9385L4.42906 12.2649L0.301929 8.241C0.0294234 7.97531 -0.068637 7.57796 0.0489696 7.21599C0.166576 6.85402 0.479458 6.5902 0.856089 6.53541L6.5267 5.7106L9.1056 0.552786C9.27499 0.214002 9.62126 0 10 0ZM10 3.23607L8.08196 7.07221C7.93561 7.36491 7.65531 7.56748 7.33147 7.61459L3.14842 8.22303L6.19813 11.1965C6.43182 11.4243 6.53961 11.7519 6.4869 12.074L5.80004 16.2715L9.53131 14.2917C9.82444 14.1361 10.1756 14.1361 10.4687 14.2917L14.2 16.2715L13.5132 12.074C13.4604 11.7519 13.5682 11.4243 13.8019 11.1965L16.8516 8.22303L12.6686 7.61459C12.3448 7.56748 12.0645 7.36491 11.9181 7.07221L10 3.23607Z" fill="#0D0D0D"/>
//                     </svg>
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 0C10.3788 0 10.7251 0.214002 10.8945 0.552786L13.4734 5.7106L19.144 6.53541C19.5206 6.5902 19.8335 6.85402 19.9511 7.21599C20.0687 7.57796 19.9706 7.97531 19.6981 8.241L15.571 12.2649L16.4994 17.9385C16.5608 18.3135 16.4043 18.6908 16.0957 18.9124C15.787 19.1339 15.3794 19.1614 15.0438 18.9834L10 16.3071L4.95624 18.9834C4.62062 19.1614 4.21306 19.1339 3.9044 18.9124C3.59573 18.6908 3.4393 18.3135 3.50065 17.9385L4.42906 12.2649L0.301929 8.241C0.0294234 7.97531 -0.068637 7.57796 0.0489696 7.21599C0.166576 6.85402 0.479458 6.5902 0.856089 6.53541L6.5267 5.7106L9.1056 0.552786C9.27499 0.214002 9.62126 0 10 0ZM10 3.23607L8.08196 7.07221C7.93561 7.36491 7.65531 7.56748 7.33147 7.61459L3.14842 8.22303L6.19813 11.1965C6.43182 11.4243 6.53961 11.7519 6.4869 12.074L5.80004 16.2715L9.53131 14.2917C9.82444 14.1361 10.1756 14.1361 10.4687 14.2917L14.2 16.2715L13.5132 12.074C13.4604 11.7519 13.5682 11.4243 13.8019 11.1965L16.8516 8.22303L12.6686 7.61459C12.3448 7.56748 12.0645 7.36491 11.9181 7.07221L10 3.23607Z" fill="#0D0D0D"/>
//                     </svg>
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 0C10.3788 0 10.7251 0.214002 10.8945 0.552786L13.4734 5.7106L19.144 6.53541C19.5206 6.5902 19.8335 6.85402 19.9511 7.21599C20.0687 7.57796 19.9706 7.97531 19.6981 8.241L15.571 12.2649L16.4994 17.9385C16.5608 18.3135 16.4043 18.6908 16.0957 18.9124C15.787 19.1339 15.3794 19.1614 15.0438 18.9834L10 16.3071L4.95624 18.9834C4.62062 19.1614 4.21306 19.1339 3.9044 18.9124C3.59573 18.6908 3.4393 18.3135 3.50065 17.9385L4.42906 12.2649L0.301929 8.241C0.0294234 7.97531 -0.068637 7.57796 0.0489696 7.21599C0.166576 6.85402 0.479458 6.5902 0.856089 6.53541L6.5267 5.7106L9.1056 0.552786C9.27499 0.214002 9.62126 0 10 0ZM10 3.23607L8.08196 7.07221C7.93561 7.36491 7.65531 7.56748 7.33147 7.61459L3.14842 8.22303L6.19813 11.1965C6.43182 11.4243 6.53961 11.7519 6.4869 12.074L5.80004 16.2715L9.53131 14.2917C9.82444 14.1361 10.1756 14.1361 10.4687 14.2917L14.2 16.2715L13.5132 12.074C13.4604 11.7519 13.5682 11.4243 13.8019 11.1965L16.8516 8.22303L12.6686 7.61459C12.3448 7.56748 12.0645 7.36491 11.9181 7.07221L10 3.23607Z" fill="#0D0D0D"/>
//                     </svg>
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 0C10.3788 0 10.7251 0.214002 10.8945 0.552786L13.4734 5.7106L19.144 6.53541C19.5206 6.5902 19.8335 6.85402 19.9511 7.21599C20.0687 7.57796 19.9706 7.97531 19.6981 8.241L15.571 12.2649L16.4994 17.9385C16.5608 18.3135 16.4043 18.6908 16.0957 18.9124C15.787 19.1339 15.3794 19.1614 15.0438 18.9834L10 16.3071L4.95624 18.9834C4.62062 19.1614 4.21306 19.1339 3.9044 18.9124C3.59573 18.6908 3.4393 18.3135 3.50065 17.9385L4.42906 12.2649L0.301929 8.241C0.0294234 7.97531 -0.068637 7.57796 0.0489696 7.21599C0.166576 6.85402 0.479458 6.5902 0.856089 6.53541L6.5267 5.7106L9.1056 0.552786C9.27499 0.214002 9.62126 0 10 0ZM10 3.23607L8.08196 7.07221C7.93561 7.36491 7.65531 7.56748 7.33147 7.61459L3.14842 8.22303L6.19813 11.1965C6.43182 11.4243 6.53961 11.7519 6.4869 12.074L5.80004 16.2715L9.53131 14.2917C9.82444 14.1361 10.1756 14.1361 10.4687 14.2917L14.2 16.2715L13.5132 12.074C13.4604 11.7519 13.5682 11.4243 13.8019 11.1965L16.8516 8.22303L12.6686 7.61459C12.3448 7.56748 12.0645 7.36491 11.9181 7.07221L10 3.23607Z" fill="#0D0D0D"/>
//                     </svg>
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 0C10.3788 0 10.7251 0.214002 10.8945 0.552786L13.4734 5.7106L19.144 6.53541C19.5206 6.5902 19.8335 6.85402 19.9511 7.21599C20.0687 7.57796 19.9706 7.97531 19.6981 8.241L15.571 12.2649L16.4994 17.9385C16.5608 18.3135 16.4043 18.6908 16.0957 18.9124C15.787 19.1339 15.3794 19.1614 15.0438 18.9834L10 16.3071L4.95624 18.9834C4.62062 19.1614 4.21306 19.1339 3.9044 18.9124C3.59573 18.6908 3.4393 18.3135 3.50065 17.9385L4.42906 12.2649L0.301929 8.241C0.0294234 7.97531 -0.068637 7.57796 0.0489696 7.21599C0.166576 6.85402 0.479458 6.5902 0.856089 6.53541L6.5267 5.7106L9.1056 0.552786C9.27499 0.214002 9.62126 0 10 0ZM10 3.23607L8.08196 7.07221C7.93561 7.36491 7.65531 7.56748 7.33147 7.61459L3.14842 8.22303L6.19813 11.1965C6.43182 11.4243 6.53961 11.7519 6.4869 12.074L5.80004 16.2715L9.53131 14.2917C9.82444 14.1361 10.1756 14.1361 10.4687 14.2917L14.2 16.2715L13.5132 12.074C13.4604 11.7519 13.5682 11.4243 13.8019 11.1965L16.8516 8.22303L12.6686 7.61459C12.3448 7.56748 12.0645 7.36491 11.9181 7.07221L10 3.23607Z" fill="#0D0D0D"/>
//                     </svg>

//                 </div>
//                 <div class="shipping">Write a review</div>
//             </div>
//             <div class="shipping">
//                 <span class="underline">Shipping</span> calculated at checkout.
//             </div>
//             <hr>
//             <div class="color-size">Color: Neon Pink</div>
//             <div class="all-colors">
//                 <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="26" cy="25.5" r="22.5" fill="#F178B6"/>
//                     <circle cx="26" cy="25.5" r="25" stroke="black" stroke-opacity="0.82"/>
//                     </svg>
//                 <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="23" cy="22.5" r="22.5" fill="#78E2F1"/>
//                     </svg>
//                 <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="23" cy="22.5" r="22.5" fill="#D5CBFE"/>
//                     </svg>
//                 <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <circle cx="23" cy="22.5" r="22.5" fill="#5D5FEF"/>
//                     </svg>
//                 <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <circle cx="23" cy="22.5" r="22.5" fill="#EFF178"/>
//                         </svg>

//             </div>
//             <div class="color-size">Size: S</div>
//             <div class="size-chart">Not sure? Check our fit guide</div>
//             <div class="all-sizes">
//                 <svg width="293" height="40" viewBox="0 0 293 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <rect x="1" y="1" width="39" height="38" stroke="#BEC2C7" stroke-width="2"/>
//                     <path d="M12.1048 20.808L7.01684 12.36H10.2568L13.5928 18.528L17.0248 12.36H20.1928L15.0808 20.76L20.6968 30H17.5048L13.6168 23.016L9.80084 30H6.70484L12.1048 20.808ZM26.8538 30.24C25.8938 30.24 24.9418 30.072 23.9978 29.736C23.0538 29.4 22.3738 29.024 21.9578 28.608L23.2298 26.328C23.5658 26.632 24.0858 26.952 24.7898 27.288C25.5098 27.608 26.1978 27.768 26.8538 27.768C27.7018 27.768 28.3898 27.568 28.9178 27.168C29.4618 26.768 29.7338 26.216 29.7338 25.512C29.7338 24.968 29.5898 24.496 29.3018 24.096C29.0138 23.696 28.6618 23.368 28.2458 23.112C27.8298 22.84 27.2378 22.512 26.4698 22.128C25.5578 21.68 24.9338 21.344 24.5978 21.12C23.0458 20.08 22.2698 18.64 22.2698 16.8C22.2698 15.28 22.7738 14.12 23.7818 13.32C24.7898 12.504 26.0618 12.096 27.5978 12.096C29.2458 12.096 30.6458 12.568 31.7978 13.512L30.5258 15.696C30.2218 15.376 29.7898 15.104 29.2298 14.88C28.6858 14.64 28.1018 14.52 27.4778 14.52C26.6778 14.52 26.0458 14.704 25.5818 15.072C25.1338 15.424 24.9098 15.952 24.9098 16.656C24.9098 17.152 25.0538 17.6 25.3418 18C25.6298 18.384 25.9898 18.72 26.4218 19.008C26.8698 19.296 27.4698 19.648 28.2218 20.064C28.9418 20.464 29.4938 20.784 29.8778 21.024C30.2618 21.248 30.6218 21.52 30.9578 21.84C31.4218 22.256 31.7978 22.752 32.0858 23.328C32.3738 23.904 32.5178 24.536 32.5178 25.224C32.5178 26.296 32.2698 27.208 31.7738 27.96C31.2938 28.712 30.6218 29.28 29.7578 29.664C28.9098 30.048 27.9418 30.24 26.8538 30.24Z" fill="#BEC2C7"/>
//                     <line x1="1.35337" y1="1.62689" x2="40.0348" y2="38.933" stroke="#BEC2C7" stroke-width="2"/>
//                     <rect x="64" y="1" width="39" height="38" fill="#FBDBE6" fill-opacity="0.39" stroke="#BEC2C7" stroke-width="2"/>
//                     <path d="M83.1233 30.24C82.1633 30.24 81.2113 30.072 80.2673 29.736C79.3233 29.4 78.6433 29.024 78.2273 28.608L79.4993 26.328C79.8353 26.632 80.3553 26.952 81.0593 27.288C81.7793 27.608 82.4673 27.768 83.1233 27.768C83.9713 27.768 84.6593 27.568 85.1873 27.168C85.7313 26.768 86.0033 26.216 86.0033 25.512C86.0033 24.968 85.8593 24.496 85.5713 24.096C85.2833 23.696 84.9313 23.368 84.5153 23.112C84.0993 22.84 83.5073 22.512 82.7393 22.128C81.8273 21.68 81.2033 21.344 80.8673 21.12C79.3153 20.08 78.5393 18.64 78.5393 16.8C78.5393 15.28 79.0433 14.12 80.0513 13.32C81.0593 12.504 82.3313 12.096 83.8673 12.096C85.5153 12.096 86.9153 12.568 88.0673 13.512L86.7953 15.696C86.4913 15.376 86.0593 15.104 85.4993 14.88C84.9553 14.64 84.3713 14.52 83.7473 14.52C82.9473 14.52 82.3153 14.704 81.8513 15.072C81.4033 15.424 81.1793 15.952 81.1793 16.656C81.1793 17.152 81.3233 17.6 81.6113 18C81.8993 18.384 82.2593 18.72 82.6913 19.008C83.1393 19.296 83.7393 19.648 84.4913 20.064C85.2113 20.464 85.7633 20.784 86.1473 21.024C86.5313 21.248 86.8913 21.52 87.2273 21.84C87.6913 22.256 88.0673 22.752 88.3553 23.328C88.6433 23.904 88.7873 24.536 88.7873 25.224C88.7873 26.296 88.5393 27.208 88.0433 27.96C87.5633 28.712 86.8913 29.28 86.0273 29.664C85.1793 30.048 84.2113 30.24 83.1233 30.24Z" fill="black"/>
//                     <rect x="127" y="1" width="39" height="38" stroke="#BEC2C7" stroke-width="2"/>
//                     <path d="M141.674 21.768L140.57 19.272L140.066 21.768L138.434 30H135.77L139.418 12.36H139.706L144.554 21.888L145.994 25.08L147.434 21.888L152.186 12.36H152.45L156.242 30H153.602L151.826 21.768L151.298 19.272L150.338 21.768L146.066 30H145.922L141.674 21.768Z" fill="black"/>
//                     <rect x="190" y="1" width="39" height="38" stroke="#BEC2C7" stroke-width="2"/>
//                     <path d="M206.192 12.36H208.904V27.6H213.968V30H206.192V12.36Z" fill="black"/>
//                     <rect x="253" y="1" width="39" height="38" stroke="#BEC2C7" stroke-width="2"/>
//                     <path d="M265.73 20.808L260.642 12.36H263.882L267.218 18.528L270.65 12.36H273.818L268.706 20.76L274.322 30H271.13L267.242 23.016L263.426 30H260.33L265.73 20.808ZM276.423 12.36H279.135V27.6H284.199V30H276.423V12.36Z" fill="black"/>
//                     </svg>

//             </div>
//             <div class="size-chart">
//                 <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M4 4C4 2.89543 4.89543 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM17.5858 8L14 4.41421V8H17.5858ZM12 4L6 4V20H18V10H13C12.4477 10 12 9.55228 12 9V4ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13ZM8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z" fill="#0D0D0D"/>
//                     </svg></span> Size chart</div>
//             <div class="btn-addToCart">
//                 <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
//                 <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
//                 <span class="hide" data-loader="" ecl="true">
//                   <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
//                 </span>
//             </button></div>
//             <div class="details-info">
//                 <div class="detail-title">Sleek, supportive, supermodel vibes</div>
//                 <div class="more-details">The second underwire top in the Monday Swimwear collection, the Maui Top draws attention with its cleavage enhancing demi-cups perfected by delicate shoulder straps and gold sliders. This top is adjustable around the bust with a soft,
//                     simple back tie so it supports you, comfortably, in all the right places.
//                 </div>
//             </div>
//             <div class="details-info">
//                 <div class="detail-title">Fabric:</div>
//                 <div class="more-details">96% Recycled Poly / 4% Spandex</div>
//             </div>
//             <div class="details-info">
//                 <div class="detail-title">Care:</div>
//                 <div class="more-details">Click here for our care tips.</div>
//             </div>
//             <div class="details-info">
//                 <div class="detail-title">Sizing:</div>
//                 <div class="more-details">Tash is a 34D and is wearing a size M.
//                 </div>
//                 <div class="more-details">Devin is a 32E and is wearing a size L.</div>
//                 <div class="more-details">Sammy is a 32C and is wearing a size S.</div>
//             </div>
//             <div class="details-info">
//                 <div class="detail-title">Features</div>
//                 <div class="more-details">V front detail</div>
//                 <div class="more-details">Underwire cups</div>
//                 <div class="more-details">Adjustable straps and back tie closure with gold hardware details</div>
//             </div>
//         </div>
//     </div>
// `)