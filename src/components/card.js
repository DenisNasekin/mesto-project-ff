//Импорт функции удаление карточки
import {deleteCardServ} from "./api.js" 

//Определяем теплейт
const cardTemplate = document.querySelector('#card-template').content; 

//Функция создание карточки
function createCard (item, userId, deleteCard, likeIt, openCard) {
  //Находим необходимые поля 
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImageOpen = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeCount = cardElement.querySelector(".card__like-count");
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  //Определяем значение полей
  cardElement.dataset.cardId = item._id;
  cardElement.dataset.ownerId = item.owner._id;
  cardImageOpen.src = item.link;
  cardImageOpen.alt = item.name;
  cardTitle.textContent = item.name;
  cardLikeCount.textContent = item.likes.length;
  //Проверка ид карточки и ид пользователя для функции удаления
  if (item.owner._id === userId) {
  deleteButton.addEventListener('click', (evt) => deleteCard(cardElement)); 
  } else {deleteButton.remove()}
  //Ставим лайк при нажатие на кнопку 
  likeButton.addEventListener('click', likeIt);
  //Раскрытие карточки при клике
  cardImageOpen.addEventListener('click', () => {
    openCard(cardImageOpen.src, cardImageOpen.alt, cardTitle.textContent)});
  //Возвращаем карточку
  return cardElement;
};

//Функция удаление карточки с сервера
function deleteCard(cardElement) { 
  deleteCardServ(cardElement.dataset.cardId);
  cardElement.remove();
}; 

//Функция постановки лайка      
function likeIt(evt) {
  evt.target.classList.toggle('card__like-button_is-active')
};

//Экспорт функций создания карточки, удаление и постановки лайка
export {createCard, deleteCard, likeIt};