import './pages/index.css'; // Импорт стилей
import {initialCards} from './scripts/cards.js'; // Импорт массива

const cardTemplate = document.querySelector('#card-template').content; // Подключаем блок карт
const cardList = document.querySelector('.places__list'); // Подключаем ссписсок карточек


function createCard (item, deleteCard) { // Создание карточки с колбеком удаления 
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link; 
  cardElement.querySelector('.card__image').alt = item.alt; 
  cardElement.querySelector('.card__title').textContent = item.name; 
  const deleteButton = cardElement.querySelector('.card__delete-button'); 
  deleteButton.addEventListener('click', deleteCard); 
  return cardElement;
}
function deleteCard(event) { // Удаление карточки 
  const item = event.target.closest('.card'); 
  item.remove(); 
}
initialCards.forEach(item => { // Выводим карточки на экран 
  cardList.append(createCard(item, deleteCard));
});

 