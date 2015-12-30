
var headerScroll = function() {
  // Cache header element
  var header = document.getElementById('js-header');
  var y = window.scrollY;

  // Check if user has scrolled more than 50px
  if ( y > 50) {
    header.classList.add('small');
  } else if (y < 50) {
    header.classList.remove('small');
  }
};

document.addEventListener('scroll', headerScroll);

// Need to figure out a way to throttle scroll
