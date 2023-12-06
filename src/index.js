import './pages/index.css'; // Импорт стилей
import {initialCards} from './scripts/cards.js'; // Импорт массива данных
import {createCard, deleteCard} from './components/card.js'; // Импорт функций работы с карточками


const cardTemplate = document.querySelector('#card-template').content; // Подключаем блок карт
const cardList = document.querySelector('.places__list'); // Подключаем список карточек

createCard(cardElement);



initialCards.forEach(item => { // Выводим карточки на экран 
  cardList.append(createCard(item, deleteCard));
});






 