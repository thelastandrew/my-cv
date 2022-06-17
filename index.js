const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');
const slides = document.querySelector('.slider__slides');
const slideWidth = document.querySelector('.slide').clientWidth;

let sliderPosition = 0;
let counter = 1;
const slidesCount = document.querySelectorAll('.slide').length;

arrowLeft.addEventListener('click', () => {
  if (counter > 1) {
    sliderPosition += slideWidth + 20;
    slides.style.transform = `translateX(${sliderPosition}px)`;
    counter--;
  }
});

arrowRight.addEventListener('click', () => {
  if (counter < slidesCount) {
    sliderPosition -= slideWidth + 20;
    slides.style.transform = `translateX(${sliderPosition}px)`;
    counter++;
  }
});
