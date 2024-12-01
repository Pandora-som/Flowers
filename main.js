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
    for (let card of cards) {

        const leftRange = parseInt(getComputedStyle(card).translate);
        const widthElem = parseInt(card.offsetWidth + 20);
        
        if (leftRange) {
            card.style = `translate: ${leftRange - widthElem}px`;
            continue;
        }
        card.style = `translate: -${widthElem}px`;
    }
}
function prevElem() {
    currentPage -= 1;
    nextButton.inert = true;
    prevButton.inert = true;
    setTimeout(enableButtons, 500, prevButton, nextButton);

    for (let card of cards) {
        const leftRange = parseInt(getComputedStyle(card).translate);
        const widthElem = parseInt(card.offsetWidth + 20);
        if (leftRange) {
            card.style = `translate: ${leftRange + widthElem}px`;
            continue;
        }
        card.style = `translate: +${widthElem}px`;
    }
}
function enableButtons(prev, next) {
    let cardCount = Math.floor(window.innerWidth / 253)
    
    if (cardCount > 4) {
        cardCount = 4
    }
    
    if (currentPage === 0) {
        prev.inert = true;
        next.inert = false;
        return;
    }
    
    if (currentPage === lenSlider - cardCount) {
        next.inert = true;
        prev.inert = false;
        return;
    }
    
    prev.inert = false;
    next.inert = false;
}
