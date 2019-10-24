let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
let current_quote = '', current_author = '';

let openURL = function(url){
    window.open(url);
};

let inIframe = function(){
    try {
        return window.top !== window.self;
    }catch (e) {
        return true;
    }
};

let updateQuote = function(){
    let color = colors[Math.floor(Math.random()*11)+1];

    $.getJSON('https://api.quotable.io/random', function (data) {
        current_quote = data.content;
        current_author = data.author;

        // 改变body btn 和 字体颜色的动画 通过 transition 实现。
        // 通过改变background-color 属性来触发 transition 动画效果。
        $(".container").css("background-color", color);
        $(".btn").css("background-color", color);
        $(".quote-card").css("color", color);
        $("#quote,#author").animate({
            opacity: 0
        }, 500, function () {
            $("#quote").html(data.content);
            $("#author").html(data.author);
            $(this).animate({
                opacity: 1
            },500);
        })
    });


};

$(document).ready(function () {
    updateQuote();
    $('#tweet-quote').on('click', function() {
        openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + current_quote + '" ' + current_author));
    });
    $('#tumblr-quote').on('click', function() {
        openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(current_author)+'&content=' + encodeURIComponent(current_quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
    });
    $("#next-quote").click(function () {
        updateQuote();
    });
});