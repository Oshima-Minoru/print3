function lineclamp() {
    var lineheight = parseFloat($('p').css('line-height'));
    var articleheight = $('article').height(); 
    var calc = parseInt(articleheight/lineheight);
    $("p").css({"-webkit-line-clamp": "" + calc + ""});
}
  
$(document).ready(function() {
    var photoheight = document.getElementById('photo').clientHeight;
    var articleheight = 790 -parseFloat(photoheight) - 230;
    $('article').css({"height": articleheight});
    lineclamp();
});

$( window ).resize(function() {
    lineclamp();
});