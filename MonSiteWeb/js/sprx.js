$(function(){

  $('#menu').onePageNav();


  $('.go').click(function(e) {
      var elem = $('#skills');
      $('html, body').animate({ scrollTop : elem.offset().top }, 750);
      e.preventDefault();
    });
   $(window).scroll(function() {
    var Hscroll = $(this).scrollTop();
    if( Hscroll > 300 ) {
      $('header').addClass('fix-white');
    } else {
      $('header').removeClass('fix-white');
    }
    var opScroll = Hscroll / 500;
    $('.logo').css({ opacity : 1 - opScroll });
  });
  
});
