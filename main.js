// ハンバーガーメニュー

$(".site-header-navbtn").on("click", () => {
    $("body").toggleClass("is-nav-open");
});

$(".site-header-nav").on("click", "a", () => {
    $("body").removeClass("is-nav-open")
})

// 泡
$(function() {
    var   bgsc1 = 0;
    var   bgsc2 = 0;
    var   bgsc3 = 0;
    var   bgsc4 = 0;
setInterval(function() {
    bgsc1 +=  0;
    bgsc2 += -2;
    bgsc3 += -5;
    bgsc4 += -7;
    $(".skinBody2").css("background-position", bgsc1 + "px " + bgsc2 + "px");
    $(".skinBody3").css("background-position", bgsc1 + "px " + bgsc3 + "px");
    $(".skinFrame").css("background-position", bgsc1 + "px " + bgsc4 + "px");
});
});