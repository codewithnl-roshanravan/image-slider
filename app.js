// get element from the DOM
const container = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const arrleft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

// Offset value for the slides container
let offset = 0;
// slide ID on increment
let slideIncrement = 0;
// SLIDE id ON DECREMENT
let slideDecrement = slides.length - 1;

// add click event to right arrow
arrRight.addEventListener("click", () => {
  // disable right arrow button
  arrRight.disabled = true;
  // set offset to slide width
  offset = slides[0].offsetwidth;
  // set container transition
  container.style.transition = "ease-in-out 500ms";
  // move slides container by negative offset
  container.style.left = -offset + "px";
  // set a timeout
  setTimeout(() => {
    // remove container transition
    container.style.transition = "none";
    // move the current slide to the last position
    slides[slideIncrement].style.order = slides.length - 1;
    // ,ove the container back to the starting position
    container.style.left = 0;
    // increment slide increment id
    slideIncrement++;
    // set decrement id to previous increment id
    slideDecrement = slideIncrement - 1;
    // if the slide increment id reaches the slides length
    if (slideIncrement === slides.length) {
      // set the slide increment id to zero
      slideIncrement = 0;
      // select all slides
      slides.forEach((slide) => {
        //    reset all slides order
        slide.style.order = "initial";
      });
    }
    //    enable right arrow click
    arrRight.disabled = false;
  }, 500);
});
