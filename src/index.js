import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard, deleteCard, likeIt, openCard} from './components/card.js';
import {openPopap, closePopap} from './components/modal.js';

const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

//Объявление попапов
const popapCard = document.querySelector('.popup_type_image');
const popapProfile = document.querySelector('.popup_type_edit');
const popapAddCard = document.querySelector('.popup_type_new-card');

//Объявление кнопок открытия попапов
const popapCardButton = document.querySelector('.card__image');
const popapProfileButton = document.querySelector('.profile__edit-button');
const popapAddCardButton = document.querySelector('.profile__add-button');
//Объявление кнопки закрытия попапов
const popapCloseButton = document.querySelectorAll('.popup__close');
//Объявление кнопки сохранения информации в попапе
const popapSaveButton = document.querySelector('popup__button');

popapProfileButton.addEventListener('click', openPopap(popapProfile))

popapAddCardButton.addEventListener('click', openPopap(popapAddCard));








initialCards.forEach(item => { // Выводим карточки на экран 
  cardList.append(createCard(item, deleteCard, likeIt, openCard));
});






 