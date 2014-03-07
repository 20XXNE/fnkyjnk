function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.2) + 'px');
}
$(window).scroll(function(e){
    parallax();
});