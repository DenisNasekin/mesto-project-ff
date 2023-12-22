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
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('button_inactive');
      buttonElement.setAttribute('disabled', 'disabled');
    }
    else { buttonElement.classList.remove('button_inactive');
           buttonElement.removeAttribute('disabled');
    }
}

const setEventListeners = (formElement) => {
    toggleButtonState(inputList, buttonElement);
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement)
      });
    });
  };

const clearValidation = (form, validationStting) => {
    setEventListeners();
    inputList.forEach((input) => {
      if(input.validity.valid) {
        input.setCustomValidity("");
        input.removeAttribute("data-validation")
      }
    });
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.setAttribute("disabled", "");
      }
}  

  
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
        setEventListeners(formElement);
    })
    }

export {enableValidation, clearValidation};