let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const sliderScrollbar = document.querySelector(
    ".container .slider-scrollbar"
  );
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  const imageWidth = imageList.firstElementChild.clientWidth;

  let autoSlideInterval; // Variable to hold the interval for auto-slide

  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
    // Your existing code for handling scrollbar thumb drag
  });

  // Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    // Your existing code for handling slide button clicks
  });

  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    // Your existing code for handling slide buttons
  };

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    // Your existing code for updating scrollbar thumb position
  };

  // Function to auto-slide images
  const autoSlide = () => {
    const currentScrollLeft = imageList.scrollLeft;
    const direction =
      currentScrollLeft === maxScrollLeft ? -currentScrollLeft : 1;
    const targetScrollLeft = currentScrollLeft + imageWidth * direction;

    imageList.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
    // Your existing code for handling image list scroll
  });

  // Start auto-slide when the page loads
  autoSlideInterval = setInterval(autoSlide, 3000); // Change 3000 to the desired interval

  // Stop auto-slide when the page is resized
  window.addEventListener("resize", () => {
    clearInterval(autoSlideInterval);
  });
};

window.addEventListener("load", initSlider);
