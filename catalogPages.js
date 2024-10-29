const nextButton = document.getElementById('strelka-right');
const prevButton = document.getElementById('strelka-left');
const slides = Array.from(document.getElementsByClassName('catalog-part'));
const lenSlider = slides.length;
let currSlide = 0;

prevButton.addEventListener('click', showPrevious);
nextButton.addEventListener('click', showNext);

function showPrevious() {
    currSlide = (currSlide - 1 + lenSlider) % lenSlider;
    updateSlider();
}

function showNext() {
    currSlide = (currSlide + 1) % lenSlider;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === currSlide) {
            slide.style.display = 'grid';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();
