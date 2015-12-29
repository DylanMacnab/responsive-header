function navbarScroll() {
  var y = window.scrollY;
  if ( y > 50) {
    $('.header').addClass('small');
  } else if (y < 50) {
    $('.header').removeClass('small');
  }
}

$(document).scroll(function() {
  navbarScroll();
});
