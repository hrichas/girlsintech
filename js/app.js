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

$( function() {
  $("#contact-form .button").click( function (e) {
    e.preventDefault();

    var email = $("#contact-form #email").val();
    if ( email != '' ) {
      var form = $("form#contact-form").serialize();
      $.ajax({
        type: "POST",
        url: "email.php",
        data: form,
        success: function(response) {
          if( response.error ) {
            toastr.warning("Sign Up Failed due to internal server error. Please try again later.");
          }
          else {
            toastr.success("You have sucessfully signed up. We will keep you updated.");
            $('#contact-form')[0].reset();
          }
        }
      });

    } else console.log("Field Empty.");//$('.feedback').removeClass("failure success").addClass('warning').html("<h6><small>All the fields must be filled. Please fill the fields and try again.</small></h6>");

  });
});
