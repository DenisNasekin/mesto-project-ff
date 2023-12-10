const cardTemplate = document.querySelector('#card-template').content; 

function createCard (item, deleteCard, likeIt, openCard) {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImageOpen = cardElement.querySelector('.card__image');  
  cardImageOpen.src = item.link; 
  cardImageOpen.alt = item.alt; 
  cardElement.querySelector('.card__title').textContent = item.name; 
    
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => deleteCard(cardElement)); 
    
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', likeIt);

  cardImageOpen.addEventListener('click', () => {openCard(item.link, item.name)});
  
  return cardElement;
};

function deleteCard(cardElement) { 
  cardElement.remove();
}; 
        
function likeIt(evt) {
  evt.target.classList.toggle('card__like-button_is-active')
};

export {createCard, deleteCard, likeIt};