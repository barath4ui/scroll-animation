var $animation_ems = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bot_position = (window_top_position + window_height);
   
    $.each($animation_ems, function() {
      // element = em
      // bottom  = bot
      
      var $em = $(this);
      var em_height = $em.outerHeight();
      var em_top_position = $em.offset().top;
      var em_bot_position = (em_top_position + em_height);
      var em_data= $(this).data("animate");
   
      //check to see if this current container is within viewport
      if ((em_bot_position >= window_top_position) && (em_top_position <= window_bot_position)) 
      {
        $em.addClass(em_data);
      } 
      else {
        $em.removeClass(em_data);
      }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
