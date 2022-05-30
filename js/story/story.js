$(function(){
    var imgTextId=$('#imgText');
    var swiperId=imgTextId.find('.swiperBox');
    var pagediv=imgTextId.find('.igt_page');
    var igtli=imgTextId.find('li');
    var igtliW=100*1.0/igtli.length + '%';
    var titles=[];
    var _html = ''; 
    igtli.each(function (index) { 
        var title=$(this).attr('data-title');
        if(index===0){
            _html += '<li class="igt_li on" style="width:' + igtliW  + ';"><div class="item_span"><div class="adore"></div><div class="num">0' + (index+1) + '</div><div class="tit">' + title + '</div></div></li>';
        }else{
            _html += '<li class="igt_li" style="width:' + igtliW  + ';"><div class="item_span"><div class="adore"></div><div class="num">0' + (index+1) + '</div><div class="tit">' + title + '</div></div></li>';
        } 
    });
    imgTextId.siblings('.igt_page_text').find('ul').append(_html);
    var swiper1 = new Swiper(swiperId, {
        effect : 'slide', 
        autoplay : {
            delay:8000,//滚动速度
            disableOnInteraction: false,
        },
        pagination: {
            el: pagediv,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<span class="on">0' + current + '</span><span>/</span><span>0' + total + '</span>';
            }
        },
      on:{
        slideChange: function(){
            var index = this.activeIndex;
            imgTextId.siblings('.igt_page_text').find('li').eq(index).addClass('on').find('.adore').addClass('bg_main');
            imgTextId.siblings('.igt_page_text').find('li').eq(index).siblings('li').removeClass('on').find('.adore').removeClass('bg_main');
        }
      }
    })
    // imgTextId.siblings('.igt_page_text').on('click','li',function(){ 
    //     if (!$(this).hasClass('on')){
    //         var thisI = $(this).index();
    //         $(this).addClass('on').find('.adore').addClass('bg_main');
    //         $(this).siblings('li').removeClass('on').find('.adore').removeClass('bg_main');
    //         swiper1.slideTo(thisI, 1000, false);
    //     }
        
    // });
})