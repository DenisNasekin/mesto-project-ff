import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, likeIt} from './components/card.js';
import {openPopap, closePopap} from './components/modal.js';

//Получение списка карточек
const cardList = document.querySelector('.places__list');

//Получение модальных окон
const popapProfile = document.querySelector('.popup_type_edit');
const popapAddCard = document.querySelector('.popup_type_new-card');
const popapCard = document.querySelector('.popup_type_image');

//Получение данных формы редактирования профиля
const formElement = document.querySelector('[name = "edit-profile"]');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput  = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription  = document.querySelector('.profile__description');

//Получение данных формы создания карточки
const formNewPlace = document.querySelector('[name = "new-place"]');
const nameCard = document.querySelector('[name = "place-name"]');
const linkCard  = document.querySelector('[name = "link"]');

//Получение данных формы увеличения карточки
const popapImage = popapCard.querySelector('.popup__image');
const popapCaption = popapCard.querySelector('.popup__caption');

//Получение кнопок открытия попапов
const buttonPopapProfile = document.querySelector('.profile__edit-button');
const buttonPopapAddCard = document.querySelector('.profile__add-button');

//Редактирование профиля
buttonPopapProfile.addEventListener('click', function() {
  openPopap(popapProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopap(popapProfile);
};
formElement.addEventListener('submit', handleFormSubmit);

//Добавление карточки
buttonPopapAddCard.addEventListener('click', function() {
  openPopap(popapAddCard);
});
function addNewCard(evt) {
  evt.preventDefault();
  const item = {name : nameCard.value,
                link : linkCard.value} 
  const newCard = createCard(item, deleteCard, likeIt, openCard);
  cardList.prepend(newCard);
  nameCard.value = '';
  linkCard.value = '';
  closePopap(popapAddCard);
}
formNewPlace.addEventListener('submit', addNewCard);

//Увеличение карточки
function openCard(itemLink, itemName) {
  openPopap(popapCard);
  popapImage.src = itemLink;
  popapImage.alt = itemName;
  popapCaption.textContent = itemName;
}

//Закрытие карточки по клику на крестик
document.addEventListener('click', (event) => {
  const target = event.target;
  if(target.matches('.popup__close')){
    closePopap(popapProfile);
    closePopap(popapAddCard);
    closePopap(popapCard);
  }
});

//Закрытие карточки по клику на кнопку Esc
document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closePopap(popapProfile);
    closePopap(popapAddCard);
    closePopap(popapCard);
  }
});

//Закрытие карточки по клику на кнопку оверлею
document.addEventListener('click', (event) => {
  const target = event.target;
  if(target.matches('.popup')){
    closePopap(popapProfile);
    closePopap(popapAddCard);
    closePopap(popapCard);
  }
});

//Вывод карточек на экран
initialCards.forEach(item => { // Выводим карточки на экран 
  cardList.append(createCard(item, deleteCard, likeIt, openCard));
});