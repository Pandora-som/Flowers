const cardsList = Array.from(document.querySelectorAll('.card-1'));

// Значения для заполнения good-card.html
const selectedCard = {
    name:      'ПАХИРА',
    priceLow:  '1608 Р',
    priceHigh: '3285 Р',
    photoLink: 'IMG/Pahira-IMG.svg',
};

for (const card of cardsList) {
    const block = Array.from(card.getElementsByClassName('line-block'))[0];
    const photoLink = Array.from(card.querySelectorAll('.img img'))[0];
    block.addEventListener('click', openGoods.bind(null, block, photoLink?.currentSrc));
}

function openGoods(card, photoLink, event) {
    const mainFile = event.view.location.pathname.split('/').at(-1);
    const elementName = Array.from(card.querySelectorAll('p'));
    selectedCard.name = elementName[0]?.innerText;
    selectedCard.priceLow = elementName[1]?.innerText;
    selectedCard.priceHigh = elementName[2]?.innerText;
    selectedCard.photoLink = photoLink;
    localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
    
    if (mainFile === 'index.html') {
        location.replace('good-card.html');
    }
    else {
        location.replace('good-card.html');
    }
}
