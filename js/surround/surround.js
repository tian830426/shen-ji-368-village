//  Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // slidesPerGroup: 4,
    breakpoints: {
        // when window width is >= 320px
        376: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 4,
            spaceBetween: 30,
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
});

const a_All = document.querySelectorAll('.a');
a_All.forEach(function (item, index) {
    item.addEventListener("mouseover", function () {
        switch (index) {
            case 0:
                item.src = 'https://www.newland.tw/images/case_display/1562554479965.jpg';
                break;
            case 1:
                item.src = 'https://www.cam.org.tw/wp-content/uploads/20200720%E5%9C%8B%E7%BE%8E%E9%A4%A8%E7%89%88%E7%95%AB.jpg';
                break;
            case 2:
                item.src = 'https://www.bring-you.info/wp-content/uploads/2020/12/calligraphy-greenway-20.jpg';
                break;
            case 3:
                item.src = 'https://travel.taichung.gov.tw/image/12464?r=637837893159506697';
                break;
            case 4:
                item.src = 'https://i0.wp.com/img.journey.tw/20200314212851_78.jpg?resize=1600%2C1066&quality=100&ssl=1';
                break;
            default:
                item.src = 'https://i0.wp.com/fishstray.com/wp-content/uploads/%E5%8F%B0%E4%B8%AD%E5%92%96%E6%B3%A2%E5%B1%8B/IMG_2796-Copy.jpg?resize=800%2C600&ssl=1';
                break;
        }

    });

    item.addEventListener("mouseout", function () {
        switch (index) {
            case 0:
                item.src = 'https://tluxe-aws.hmgcdn.com/public/article/2017/atl_20190905105406_480.jpg';
                break;
            case 1:
                item.src = 'https://c8.staticflickr.com/9/8664/28464285783_2887445cae_b.jpg';
                break;
            case 2:
                item.src = 'https://beri.tw/wp-content/uploads/%E5%8F%B0%E4%B8%AD%E8%8C%83%E7%89%B9%E5%96%9C%E7%B6%A0%E5%85%89%E8%A8%88%E7%95%AB.jpg';
                break;
            case 3:
                item.src = ' https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/%E8%87%BA%E4%B8%AD%E5%B8%82%E7%AB%8B%E5%A4%A7%E5%A2%A9%E6%96%87%E5%8C%96%E4%B8%AD%E5%BF%83.jpg/1200px-%E8%87%BA%E4%B8%AD%E5%B8%82%E7%AB%8B%E5%A4%A7%E5%A2%A9%E6%96%87%E5%8C%96%E4%B8%AD%E5%BF%83.jpg';
                break;
            case 4:
                item.src = 'https://photo.travelking.com.tw/scenery/A89C4769-3E83-4150-A3EB-640600662601_e.jpg';
                break;
            default:
                item.src = 'https://farm8.staticflickr.com/7893/46593635802_b3253ee6f0_b.jpg';
                break;
        }

    });

});


