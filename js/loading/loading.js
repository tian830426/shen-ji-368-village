$(window).load(function () { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(1000).fadeOut(9000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(3000).fadeOut(3000);
})