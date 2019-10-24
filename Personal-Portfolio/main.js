"use restrict"

$(document).scroll(function(){
    var navbar = $("#navbar");
    var profolio_height = $("#profolio").offset().top;
    if (document.documentElement.scrollTop >= profolio_height){
        navbar.addClass("bg-dark").removeClass("bg-transparent");
    } else {
        navbar.addClass("bg-transparent").removeClass("bg-dark");
    }
});
