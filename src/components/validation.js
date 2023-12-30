//Добавляем класс ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

//Удаляем класс ошибки
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('form__input-error_active');  
};
 
//Добавляем текст ошибки в зависимости от валидности формы
const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};

//Проверка полей на валидность
const hasInvalidInput = (iputList) => {
    return iputList.some((inputElement) => {
      return !inputElement.validity.valid
    }) 
}

//Отключение кнопки
const toggleButtonState = (inputList, buttonElement, formData) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(formData.inactiveButtonClass);
      buttonElement.disabled = true;
    }
    else { 
      buttonElement.classList.remove(formData.inactiveButtonClass);
      buttonElement.disabled = false;
    }
}
//Событие ввода инпута
const setEventListeners = (formElement, formData) => {
    const inputList = Array.from(formElement.querySelectorAll(formData.inputSelector));
    const buttonElement = formElement.querySelector(formData.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, formData)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement, formData)
      });
    });
  };

//Событие сабмита инпута
const enableValidation = (formData) => {
    const formList = Array.from(document.querySelectorAll(formData.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
        setEventListeners(formElement, formData);
    })
    }

//Функция отчиски ошибок валидации при закрытии формы    
const clearValidation = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.disabled = true;
    inputList.forEach((inputElement) => {
      hideInputError(formElement, inputElement, validationConfig.inputErrorClass, validationConfig.errorClass);
      inputElement.setCustomValidity("");
    });
};

export {enableValidation, clearValidation};