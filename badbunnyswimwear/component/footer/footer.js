let footer = $('#component-footer')
footer.append(`
<div class="footer">
<div class="first-col col-1-2-3 ">
    <ul class="ul-footer">CUSTOMER CARE</ul>
    <ul>
        <li class="li-footer">Contact us</li>
        <li class="li-footer">Shipping</li>
        <li class="li-footer">Returns</li>
        <li class="li-footer">Track My Order</li>
        <li class="li-footer">Caring for your bikini</li>
    </ul>
</div >
<div class="second-col col-1-2-3 ">
    <ul class="gap ul-footer">blank</ul>
    <ul >
        <li class="li-footer">Size guide</li>
        <li class="li-footer">Gift card</li>
        <li class="li-footer">Student Discount</li>
    </ul>
</div>
<div class="third-col col-1-2-3 ">
    <ul class="ul-footer">COMPANY</ul>
    <ul>
        <li class="li-footer">Store Locations</li>
        <li class="li-footer">Online Retailer</li>
    </ul>
</div>
<div class="forth-col">
    <div class="sign-up">Sign up to get the latest on new arrivals and special offers!</div>
    <input class="email-input" type="text" placeholder="Your email address">
    <div class="stay-connected">STAY CONNECTED</div>
    <div class="social-media-icons">
        <div class="facebook">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="white"/>
                </svg>
        </div>
        <div class="instagram">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white"/>
                <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white"/>
                <path d="M39.6937 11.1848C39.6937 12.7785 38.4 14.0629 36.8156 14.0629C35.2219 14.0629 33.9375 12.7691 33.9375 11.1848C33.9375 9.59102 35.2313 8.30664 36.8156 8.30664C38.4 8.30664 39.6937 9.60039 39.6937 11.1848Z" fill="white"/>
                </svg>
        </div>
        <div class="tik-tok">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.1451 0H26.0556V32.6956C26.0556 36.5913 22.9444 39.7913 19.0725 39.7913C15.2007 39.7913 12.0894 36.5913 12.0894 32.6956C12.0894 28.8696 15.1315 25.7391 18.8651 25.6V17.3913C10.6374 17.5304 4 24.2783 4 32.6956C4 41.1827 10.7757 48 19.1417 48C27.5075 48 34.2833 41.1131 34.2833 32.6956V15.9304C37.3255 18.1565 41.059 19.4783 45 19.5479V11.3391C38.9157 11.1304 34.1451 6.12173 34.1451 0Z" fill="white"/>
                </svg>
        </div>
        <div class="gmail">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.6866 13.0954C31.2086 10.732 27.9016 9.44446 24.48 9.49737C18.2187 9.49737 12.9011 13.7215 11.0051 19.4095C9.99973 22.3902 9.99973 25.6179 11.0051 28.5986H11.0139C12.9187 34.2779 18.2275 38.502 24.4888 38.502C27.7208 38.502 30.4956 37.6753 32.6461 36.2151V36.2092C35.177 34.5336 36.9055 31.8969 37.4434 28.9162H24.48V19.6742H47.1175C47.3997 21.2792 47.532 22.9195 47.532 24.5509C47.532 31.8506 44.9232 38.0222 40.3841 42.2022L40.3888 42.2058C36.4116 45.8744 30.9529 47.9997 24.48 47.9997C15.4056 47.9997 7.10718 42.8849 3.03296 34.7805C-0.371021 27.999 -0.371012 20.0093 3.03298 13.2277C7.10721 5.11455 15.4055 -0.000335793 24.48 -0.000335793C30.4414 -0.0708851 36.2 2.16906 40.5387 6.24328L33.6866 13.0954Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="48" height="48" fill="white"/>
                </clipPath>
                </defs>
                </svg>
        </div>
        <div class="youtube">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.5219 14.3996C47.5219 14.3996 47.0531 11.0902 45.6094 9.63711C43.7812 7.72461 41.7375 7.71523 40.8 7.60273C34.0875 7.11523 24.0094 7.11523 24.0094 7.11523H23.9906C23.9906 7.11523 13.9125 7.11523 7.2 7.60273C6.2625 7.71523 4.21875 7.72461 2.39062 9.63711C0.946875 11.0902 0.4875 14.3996 0.4875 14.3996C0.4875 14.3996 0 18.2902 0 22.1715V25.809C0 29.6902 0.478125 33.5809 0.478125 33.5809C0.478125 33.5809 0.946875 36.8902 2.38125 38.3434C4.20937 40.2559 6.60938 40.1902 7.67813 40.3965C11.5219 40.7621 24 40.8746 24 40.8746C24 40.8746 34.0875 40.8559 40.8 40.3777C41.7375 40.2652 43.7812 40.2559 45.6094 38.3434C47.0531 36.8902 47.5219 33.5809 47.5219 33.5809C47.5219 33.5809 48 29.6996 48 25.809V22.1715C48 18.2902 47.5219 14.3996 47.5219 14.3996ZM19.0406 30.2246V16.734L32.0062 23.5027L19.0406 30.2246Z" fill="white"/>
                </svg>
        </div>
    </div>
</div>

</div>
<div class="lower-footer">
<a href="https://rinzielinh.github.io/BADBUNNYSWIMWEAR/myProject.html"><div class="brand-name">BAD BUNNY SWIMWEAR</div>
</div></a>

<footer id="small-footer" class="text-center text-white" style="background-color: #EF5DA8;">
<div class="container p-4 pb-0">
    <!-- Section: CTA -->
    <section class="">
        <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Register for free</span>
            <button type="button" class="btn btn-outline-light btn-rounded">
          SIGN UP!
        </button>
        </p>
    </section>
    <!-- Section: CTA -->
</div>
<!-- Grid container -->
<div class="container pt-4">
    <!-- Section: Social media -->
    <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i
    ></a>

        <!-- Twitter -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i
    ></a>

        <!-- Google -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-google"></i
    ></a>

        <!-- Instagram -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i
    ></a>

        <!-- Linkedin -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i
    ></a>

        <!-- Github -->
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i
    ></a>
    </section>
    <!-- Section: Social media -->

</div>
<!-- Grid container -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 BAD BUNNY SWIMWEAR
    <a class="text-white" href="https://mdbootstrap.com/"></a>
</div>
<!-- Copyright -->
</footer>
`)