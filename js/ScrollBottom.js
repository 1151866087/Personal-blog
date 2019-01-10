/* 回到顶部按钮 */
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 100) {
        $(".side-tool").fadeIn(300)
    }
    else {
        $(".side-tool").fadeOut(300)
    }
})
$(".side-tool").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 300)
})