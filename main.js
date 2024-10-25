const nextButton = document.getElementById('strelka-right');
const prevButton = document.getElementById('strelka-left');
const cards = document.getElementsByClassName('card-1');
const lenSlider = cards.length;

nextButton.addEventListener('click', nextElem);
prevButton.addEventListener('click', prevElem);
let currentPage = 0;
prevButton.inert = true;
function nextElem() {
    currentPage += 1;
    nextButton.inert = true;
    prevButton.inert = true;
    setTimeout(enableButtons, 500, prevButton, nextButton);
    for (let i of cards) {

        const leftRange = parseInt(getComputedStyle(i).translate);
        const widthElem = parseInt(i.offsetWidth);
        console.log(leftRange, widthElem)
        if (leftRange) {
            i.style = `translate: ${leftRange - widthElem}px`;
            continue;
        }
        i.style = `translate: -${widthElem}px`;
    }
}
function prevElem() {
    currentPage -= 1;
    nextButton.inert = true;
    prevButton.inert = true;
    setTimeout(enableButtons, 500, prevButton, nextButton);

    for (let i of cards) {
        const leftRange = parseInt(getComputedStyle(i).translate);
        const widthElem = parseInt(i.offsetWidth);
        if (leftRange) {
            i.style = `translate: ${leftRange + widthElem}px`;
            continue;
        }
        i.style = `translate: +${widthElem}px`;
    }
}
function enableButtons(prev, next) {
    if (currentPage === 0) {
        prev.inert = true;
        next.inert = false;
        return;
    }
    if (currentPage === lenSlider - 4) {
        next.inert = true;
        prev.inert = false;
        return;
    }
    prev.inert = false;
    next.inert = false;
}