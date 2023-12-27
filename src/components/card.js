//Импорт функции удаление карточки
import {deleteCardServ, setLike, deleteLike} from "./api.js" 

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
  //Проверка лайка
  const checkLike = item.likes.some((like) => like._id === userId);
  if (checkLike) {
    likeButton.classList.add('card__like-button_is-active')
  }
  //Ставим лайк при нажатие на кнопку
  likeButton.addEventListener('click', (evt) => {likeIt(evt, item._id)});
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
function likeIt(evt, cardId) {
  const carrentLike = evt.target.parentNode.querySelector('.card__like-count')
  if (evt.target.classList.contains('card__like-button_is-active')) {
    deleteLike(cardId)
    .then((card) => {
      evt.target.classList.remove('card__like-button_is-active');
      carrentLike.textContent = card.likes.length;
    })
    .catch((err) => {console.log(err)}); 
  } else {
    setLike(cardId)
    .then((card) => {
      evt.target.classList.add('card__like-button_is-active');
      carrentLike.textContent = card.likes.length;
    })
    .catch((err) => {console.log(err)});
  }
};

//Экспорт функций создания карточки, удаление и постановки лайка
export {createCard, deleteCard, likeIt};