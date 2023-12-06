// Функции для работы с карточками проекта Mesto



export function createCard (item, deleteCard) { // Создание карточки с колбеком удаления 
         const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
         cardElement.querySelector('.card__image').src = item.link; 
         cardElement.querySelector('.card__image').alt = item.alt; 
         cardElement.querySelector('.card__title').textContent = item.name; 
         const deleteButton = cardElement.querySelector('.card__delete-button'); 
         deleteButton.addEventListener('click', deleteCard); 
         return cardElement;
        };


export  function deleteCard(event) { // Удаление карточки 
          const item = event.target.closest('.card'); 
          item.remove(); 
        };  

