(function($){
  
  //show or hide the sticky footer button
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
       $('.go-top').fadeIn('slow');
       }else{
          $('.go-top').fadeOut('slow');
       }
  });
  
  //animate the scroll
  $('.go-top').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    },
     'slow');
  });
})(jQuery);