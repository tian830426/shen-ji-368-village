// <!--<script src="js/jquery.min.js"></script>-->
// <!--<script src="js/swiper.min.js"></script>-->

$(function () {
    var mySwiper = new Swiper("#banner", {
        slidesPerView: 1,
    spaceBetween: 30,
    // slidesPerGroup: 4,
    breakpoints: {
        // when window width is >= 320px
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    })
})