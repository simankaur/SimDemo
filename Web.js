function applyMood() {
  const mood = document.getElementById("mood-select").value;
  if (mood === "chill") {
        document.body.style.backgroundColor = "#e8faff";
      } else if (mood === "creative") {
        document.body.style.backgroundColor = "#fff0fa";
      } else {

        document.body.style.backgroundColor = "#fffbe0";
      }
}

function highlightTravel() {
  document.querySelector(".travel-gallery").style.border = "4px solid #d16b9b";
}

// Gallery slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// video function
function playVideo() {
  document.getElementById("myVideo").play();
}

function pauseVideo() {
  document.getElementById("myVideo").pause();
}
