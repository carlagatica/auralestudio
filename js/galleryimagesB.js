// Open the Modal
function openModalB() {
    document.getElementById("myModalB").style.display = "block";
  }
  
  // Close the Modal
  function closeModalB() {
    document.getElementById("myModalB").style.display = "none";
  }
  
  var slideIndexB = 1;
  showSlidesB(slideIndexB);
  
  // Next/previous controls
  function plusSlidesB(n) {
    showSlidesB(slideIndexB += n);
  }
  
  // Thumbnail image controls
  function currentSlideB(n) {
    showSlides(slideIndexB = n);
  }
  
  function showSlidesB(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesB");
    var dots = document.getElementsByClassName("demoB");
    var captionText = document.getElementById("captionB");
    if (n > slides.length) {slideIndexB = 1}
    if (n < 1) {slideIndexB = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexB-1].style.display = "block";
    dots[slideIndexB-1].className += " active";
    captionText.innerHTML = dots[slideIndexB-1].alt;
  }