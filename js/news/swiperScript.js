// Initialize Swiper
//    可以参考  180嵌套 、190抓手光标 、 200无限循环 、 2403D滚动切换 、 310缩略图/无限循环
//    缩放400 、  虚拟410  、自定义插件420

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,       //slide之间的距离
    centeredSlides: true,   //若为真，那么活动块会居中，而非默认状态下的居左
    effect: 'cube',         //翻转效果
    zoom: true,             //缩放图片比例
    mousewheel: true,       //鼠标滚动可以控制slide替换
    // autoplay: {             //自动切换
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
}); 
