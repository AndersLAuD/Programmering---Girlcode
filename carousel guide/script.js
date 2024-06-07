//Adding JavaScript Functionality

//Basic Functionality
const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
});

prevButton.addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
});

//Enhancements

//Auto-Sliding
let autoSlideInterval = setInterval(() => {
    nextButton.click();
}, 3000);

// Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseleave', () => autoSlideInterval = setInterval(() => {
    nextButton.click();
}, 3000));

//Indicators
const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = parseInt(indicator.getAttribute('data-index'));
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    });
});
