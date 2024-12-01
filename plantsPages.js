const nextButton = document.getElementById('strelka-right');
const prevButton = document.getElementById('strelka-left');
const slides = Array.from(document.getElementsByClassName('plants-part'));
const pages = Array.from(document.querySelectorAll('.plants-nav p'));
const lenSlider = slides.length;
let currSlide = 0;

prevButton.addEventListener('click', showPrevious);
nextButton.addEventListener('click', showNext);

pages.forEach((page, index) => {
    page.addEventListener('click', function () {
        selectPage(index);
    });
});

function showPrevious() {
    currSlide = (currSlide - 1 + lenSlider) % lenSlider;
    updateSlider();
}

function showNext() {
    currSlide = (currSlide + 1) % lenSlider;
    updateSlider();
}

function selectPage(index) {
    currSlide = index;
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
    if (currSlide == 0) {
        pages[currSlide].style.textDecoration = "underline";
        pages[currSlide].style.color = "#6AAD46";
        for (i = 1; i < lenSlider; i++) {
            pages[i].style.textDecoration = "none";
            pages[i].style.color = "#000";
        }
    } else if (currSlide == 1) {
        pages[currSlide].style.textDecoration = "underline";
        pages[currSlide].style.color = "#6AAD46";

        pages[0].style.textDecoration = "none";
        pages[0].style.color = "#000";

        pages[2].style.textDecoration = "none";
        pages[2].style.color = "#000";
    } else {
        pages[currSlide].style.textDecoration = "underline";
        pages[currSlide].style.color = "#6AAD46";
        
        pages[0].style.textDecoration = "none";
        pages[0].style.color = "#000";

        pages[1].style.textDecoration = "none";
        pages[1].style.color = "#000";
    }
}
updateSlider();