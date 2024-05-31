 
document.addEventListener('DOMContentLoaded', () => {
const slides = document.querySelectorAll('.carousel img');
let currentSlide = 0 ;
const totalslides = slides.length;

function showNextSlide() {
slides [currentSlide].classList.remove('active');
currentSlide = (currentSlide + 1) % totalslides;
slides [currentSlide].classList.add('active');
}
slides [currentSlide].classList.add('active');
setInterval(showNextSlide, 1000); // Change slide every 1 seconds
});

