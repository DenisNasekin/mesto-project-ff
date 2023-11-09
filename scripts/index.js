// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
// @todo: Функция создания карточки
const createCard = function(cardLink, cardTitle) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector('.card__image').src = cardLink;
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardList.append(cardElement); 
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
};
// @todo: Функция удаления карточки     
  deleteCard = (event) =>{ 
  const item = event.target.closest(".card");
  item.remove();
  }
// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {  
  createCard(item.link, item.name);
});