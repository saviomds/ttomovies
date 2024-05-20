let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0,
  intervalId; // Variable to hold the interval ID

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
  // Start the interval
  intervalId = setInterval(slideRight, 3000);
}

// Show prev
function slideLeft() {
  reset();
  current = (current - 1 + sliderImages.length) % sliderImages.length;
  sliderImages[current].style.display = "block";
}

// Show next
function slideRight() {
  reset();
  current = (current + 1) % sliderImages.length;
  sliderImages[current].style.display = "block";
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
  slideRight();
});

// Start slider
startSlide();
function myFunction() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
    x.style.backgroundColor = "black";
    document.querySelector(".topnav").style.height = "100vh";
    document.getElementById("menu").style.cdisplay = "none";
    document.getElementById("x").style.display = "block";
    document.getElementById("x").style.color = "white";
  } else {
    x.className = "topnav";
    x.style.backgroundColor = "#e3fd20";
    document.getElementById("menu").style.color = "black";
    document.querySelector(".topnav").style.height = "8vh";
    document.getElementById("x").style.display = "none";
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

function iconing() {
  alert("Not Functional Yet");
}
function addCart() {
  alert("Add Cart Not Functional Yet ");
}
