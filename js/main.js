const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const navbar = document.querySelector(".main-navbar");
  navbar.classList.add("active");
  document.querySelector(".container").style.display = "none";
  document.querySelector(".main-section").style.display = "none";
  document.querySelector(".main-slide-part").style.display = "none";
  document.querySelector(".main-grid-ads").style.display = "none";
});

const iconx = document.querySelector(".iconx");
iconx.addEventListener("click", () => {
  const navbar = document.querySelector(".main-navbar");
  navbar.style.display = "none";
  location.reload();
});

// JavaScript for the slider
document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const imageList = document.querySelector(".image-list");
  const slides = document.querySelectorAll(".slide");
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  let slideIndex = 0;
  const slideWidth = slides[0].offsetWidth;

  // Function to slide left
  function slideLeft() {
    slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
    imageList.style.transition = "transform 0.5s ease";
    imageList.style.transform =
      "translateX(-" + slideIndex * slideWidth + "px)";
  }

  // Function to slide right
  function slideRight() {
    slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    imageList.style.transition = "transform 0.5s ease";
    imageList.style.transform =
      "translateX(-" + slideIndex * slideWidth + "px)";
  }

  // Event listeners for arrow buttons
  arrowLeft.addEventListener("click", slideLeft);
  arrowRight.addEventListener("click", slideRight);

  // Autoplay function
  function autoSlide() {
    slideRight();
  }

  // Set interval for autoplay
  setInterval(autoSlide, 3000); // Change 3000 to desired interval in milliseconds
});

// Select the slider element
const slider = document.querySelector(".main-slide-image");

// Define the current slide index
let slideIndex = 0;

// Define function for sliding to the next image
function slideNext() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    // Reset index to loop back to the first image
    slideIndex = 0;
    // Apply transition to smoothly slide back to the first image
    slider.style.transition = "none";
    // Move slider position to the first image without transition
    updateSlider();
    // Force reflow by reading offsetWidth property
    slider.offsetWidth;
    // Re-enable transition for future slides
    slider.style.transition = "";
  } else {
    updateSlider();
  }
}

// Function to update the slider position
function updateSlider() {
  const slideWidth = slider.clientWidth;
  const newPosition = -slideIndex * slideWidth;
  slider.style.transform = `translateX(${newPosition}px)`;
}

// Automatic sliding with a pause of 2 seconds between slides
setInterval(slideNext, 3000);
