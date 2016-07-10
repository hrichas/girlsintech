$(document).foundation();
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#top-bar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > 460) {
          $(".top-bar").css('background-color', '#f87373');
       } else {
          $('.top-bar').css('background-color', 'transparent');
       }
   });
    }
});
