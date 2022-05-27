$(window).load(function () { // 確認整個頁面讀取完畢再將這三個div隱藏起來
    $("#status").delay(5000).fadeOut(3000); //delay --> 延遲幾秒才fadeOut
    $("#preloader").delay(7000).fadeOut(3000);
})