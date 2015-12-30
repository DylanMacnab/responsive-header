// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
var headerScroll = function() {
  // Cache header element
  var $header = $('.header');
  var y = window.scrollY;

  // Check if user has scrolled more than 50px
  if ( y > 50) {
    $header.addClass('small');
  } else if (y < 50) {
    $header.removeClass('small');
  }
};


// bind scroll event to document
// $(document).scroll(function() {
//   navbarScroll();
// });

document.addEventListener('scroll', headerScroll);
