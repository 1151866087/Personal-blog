$(function(){
    debugger;
    var imgs =  $(".show-one img");
    var btns = $(".show-one li");
    btns.click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        imgs.eq($(this).index()).fadeIn().siblings().fadeOut();
    })
   

})