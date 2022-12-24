// Get the button

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function footerFunction() {
  let el = document.getElementById('footer');
  var height = el.offsetTop - el.scrollTop;
  document.body.scrollTop = height;
  document.documentElement.scrollTop = height;
}

function scrollToMidFunction() {
  document.body.scrollTop = 150;
  document.documentElement.scrollTop = 150;
}
