let quantity = 0;
let suggestions = $('#suggestions')
suggestions.append(`
<div class="suggestions">
        <div class="suggested-products">
            <div class="suggest">
                <div class="suggest-photo">
                    <img class="suggest-photo" src="../../img/pairs well with/2.jpeg" alt="">
                </div>
                <div class="suggest-name">Brabdy Bottom</div>
                <div class="suggest-price">$50</div>
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
                <div class="btn-addToCart-suggest onclick="moveToCart()"">
                    <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
                    <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
                    <span class="hide" data-loader="" ecl="true">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
                    </span>
                </button></div>

            </div>
            <div class="suggest">
                <div class="suggest-photo">
                    <img class="suggest-photo" src="../../img/pairs well with/1.jpeg" alt="">
                </div>
                <div class="suggest-name">Clovelly Sharrong</div>
                <div class="suggest-price">$50</div>
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
                    <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
                    <span class="hide" data-loader="" ecl="true">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
                    </span>
                </button></div>

            </div>
            <div class="suggest">
                <div class="suggest-photo">
                    <img class="suggest-photo" src="../../img/pairs well with/3.jpeg" alt="">
                </div>
                <div class="suggest-name">Shiny Bottom </div>
                <div class="suggest-price">$50</div>
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
                <div class="btn-addToCart-suggest onclick="moveToCart()"">
                    <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
                    <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
                    <span class="hide" data-loader="" ecl="true">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
                    </span>
                </button></div>

            </div>
            <div class="suggest">
                <div class="suggest-photo">
                    <img class="suggest-photo" src="../../img/pairs well with/4.jpeg" alt="">
                </div>
                <div class="suggest-name">Charles Bottom</div>
                <div class="suggest-price">$50</div>
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
                <div class="btn-addToCart-suggest onclick="moveToCart()"">
                    <button type="submit" name="add" aria-label="Add to cart" class="btn atc-button product-form__cart-submit" data-add-to-cart="" ecl="true">
                    <span data-add-to-cart-text="" ecl="true">ADD TO CART</span>
                    <span class="hide" data-loader="" ecl="true">
                      <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20" ecl="true"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB" ecl="true"></path></svg>
                    </span>
                </button></div>

            </div>
        </div>
    </div>
`)

const moveToCart = () => {
    quantity++;
    $('.quantity').text(quantity)
        // location.replace('https://rinzielinh.github.io/BADBUNNYSWIMWEAR/pages/shopping-cart/shopping-cart.html')
}