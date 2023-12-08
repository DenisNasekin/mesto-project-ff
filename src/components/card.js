function createCard (item, deleteCard, likeIt, openCard) {
    
    const cardTemplate = document.querySelector('#card-template').content; 
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    
    cardElement.querySelector('.card__image').src = item.link; 
    cardElement.querySelector('.card__image').alt = item.alt; 
    cardElement.querySelector('.card__title').textContent = item.name; 
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard); 
    
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeIt);

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.addEventListener('click', openCard);
    
    return cardElement;
};

function deleteCard(event) { 
    const item = event.target.closest('.card'); 
    item.remove();
}; 
        
function likeIt(event) {
    if (event.target.classList.contains('card__like-button_is-active')) {
    event.target.classList.remove('card__like-button_is-active');
    } else {
    event.target.classList.add('card__like-button_is-active');
    }
};

function openCard(itemLink, itemName) {
    

};

export {createCard, deleteCard, likeIt, openCard};