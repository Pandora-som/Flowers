const counters = document.querySelectorAll('[data-quantity]');

if (counters) {
    counters.forEach(quantity => {
        quantity.addEventListener('click', e => {
            const target = e.target;
            
            if (target.closest('.counter__button')) {
                let value = parseInt(target.closest('.quantity').querySelector('input').value);
                
                if (target.classList.contains('plus-btn')) {
                    value++;
                }
                else {
                    --value;
                }
                if (value <= 0) {
                    value = 1;
                    
                }
                
                target.closest('.quantity').querySelector('input').value = value;
            }
            
        });
    });
}

const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));

if (selectedCard.photoLink) {
    const image = Array.from(document.querySelectorAll('.img-main'))[0];
    const name = Array.from(document.querySelectorAll('.center'))[0];
    const prices = Array.from(document.querySelectorAll('.price p'));
    
    image.src = selectedCard.photoLink;
    name.innerText = selectedCard.name;
    prices[0].innerText = selectedCard.priceLow;
    
    if (selectedCard.priceHigh) {
        prices[1].innerText = selectedCard.priceHigh
    }
    else {
        prices[1].style.display = 'none'
    }
}

const arrowRight = document.getElementById('right')
const arrowLeft = document.getElementById('left')
const imgSelectors = Array.from(document.querySelectorAll('.img-selectors'))

arrowRight.addEventListener('click', setNextPhoto)
arrowLeft.addEventListener('click', setBeforePhoto)

imgSelectors[0] = {
    src: selectedCard.photoLink
}

let item = 0

function setNextPhoto() {
    const mainPhoto = Array.from(document.querySelectorAll('.img-main'))[0]
    
    if (++item > imgSelectors.length - 1) {
        item = 0
    }
    console.log(item)
    mainPhoto.src = imgSelectors[item].src
}

function setBeforePhoto() {
    const mainPhoto = Array.from(document.querySelectorAll('.img-main'))[0]
    
    if (--item < 0) {
        item = imgSelectors.length - 1
    }
    
    mainPhoto.src = imgSelectors[item].src
}

