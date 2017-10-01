$(document).ready( function() {

  $('#sign_out').click( function() {
    showError("Good Bye","Are you Sure ?","Yes","sure_sign_out");
  });

  $(document).on( 'click', '.sure_sign_out' ,function() {
    window.setTimeout(function () {
      $.ajax({
        type: "GET",
        url: "php/sign_out.php",
        success: function(response) {
          window.location.replace("index.php");
        }
      });
    }, 800);
  });

  $('#menu_toggle_btn').click( function() {

    if( $(this).hasClass('fa-bars') ) {
      $('.side-bar').css('right','0');
      $(this).removeClass('fa-bars').addClass('fa-close');
    } else {
      $('.side-bar').css('right','-250px');
      $(this).removeClass('fa-close').addClass('fa-bars');
    }

  });

});
