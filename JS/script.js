document.addEventListener("DOMContentLoaded", function () {
  // Get all slide divs
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  // Function to show the next slide
  function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].style.display = "none";

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].style.display = "block";
  }

  // Initially show the first slide
  slides[currentSlide].style.display = "block";

  // Automatically switch slides every 10 seconds
  setInterval(showNextSlide, 10000);
});
