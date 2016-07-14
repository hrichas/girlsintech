$(document).foundation();
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#top-bar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > 80) {
          $(".top-bar .top-bar-right ul li a").css('color', '#f87373');
          $(".top-bar").addClass("white");
          $(".logo").attr("src","img/logo.png");
       } else {
          $(".top-bar .top-bar-right ul li a").css('color', 'white');
          $(".top-bar").removeClass("white");
          $(".logo").attr("src","img/inverse-logo.png");

       }
   });
    }
});
