var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("imageslideshow");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1;}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides,2000);
}



var modal = document.getElementById('sgn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Get the modal
var modal = document.getElementById('log');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
