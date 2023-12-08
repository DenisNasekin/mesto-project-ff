function openPopap() {
  const popap = document.querySelector('.popap');  
  popap.classList.add('popup_is-animated');
};

function closePopap(popap) {
  popap.classList.remove('.popup_is-animated');
};

export {openPopap, closePopap}

//окно редактирование профиля + переменные, которые понадобятся
const buttonEditProfile = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const formElement =document.querySelector('.poput__form');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
//окно редактирование профиля
buttonEditProfile.addEventListener('click', function(){
  openModal(popupTypeEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

// Обработчик «отправки» формы, хотя пока, она никуда отправляться не будет
function handleFormSubmit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Получите значение полей jobInput и nameInput из свойства value, Вставьте новые значения с помощью textContent
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(event.target.closest('.popup'));
}
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);