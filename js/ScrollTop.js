window.onload = function() {
    var tit = document.getElementById("nav");
    var titleTop = tit.offsetTop;
    document.onscroll = function(){
        var btop = document.body.scrollTop||document.documentElement.scrollTop;
        if(btop>titleTop){
            tit.className = "nav fixed";
        }else{
            tit.className = "nav";
        }
    }

    var top = document.body.scrollTop||document.documentElement.scrollTop;
    var aboutme = document.getElementById("about-me");
    var aboutmeTop = aboutme.offsetTop;
    document.getElementById("about").onclick=function(){
        top = aboutmeTop;
    }
}
