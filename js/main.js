function navbarScroll() {
  // Cache header element
  var $header = $('.header');
  var y = window.scrollY;

  // Check if user has scrolled more than 50px
  if ( y > 50) {
    $header.addClass('small');
  } else if (y < 50) {
    $header.removeClass('small');
  }
}

// bind scroll event to document
$(document).scroll(function() {
  navbarScroll();
});
