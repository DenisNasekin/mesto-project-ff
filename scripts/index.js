const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');


function createCard (item, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link; 
  cardElement.querySelector('.card__image').alt = item.alt; 
  cardElement.querySelector('.card__title').textContent = item.name; 
  const deleteButton = cardElement.querySelector('.card__delete-button'); 
  deleteButton.addEventListener('click', deleteCard); 
  return cardElement;
}
function deleteCard(event) { 
  const item = event.target.closest('.card'); 
  item.remove(); 
}
initialCards.forEach(item => {
  cardList.append(createCard(item, deleteCard));
});

 