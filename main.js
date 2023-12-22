(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o){var i=e.querySelector(".card").cloneNode(!0),c=i.querySelector(".card__image");return c.src=t.link,c.alt=t.alt,i.querySelector(".card__title").textContent=t.name,i.querySelector(".card__delete-button").addEventListener("click",(function(){return n(i)})),i.querySelector(".card__like-button").addEventListener("click",r),c.addEventListener("click",(function(){o(t.link,t.name)})),i}function n(e){e.remove()}function r(e){e.target.classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",c)}function i(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",c)}function c(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}var u,a=function(e,t){e.some((function(e){return!e.validity.valid}))?(t.classList.add("button_inactive"),t.setAttribute("disabled","disabled")):(t.classList.remove("button_inactive"),t.removeAttribute("disabled"))},d=document.querySelector(".places__list"),l=document.querySelector(".popup_type_edit"),p=document.querySelector(".popup_type_new-card"),s=document.querySelector(".popup_type_image"),m=document.querySelector('[name = "edit-profile"]'),_=document.querySelector(".popup__input_type_name"),v=document.querySelector(".popup__input_type_description"),y=document.querySelector(".profile__title"),f=document.querySelector(".profile__description"),S=document.querySelector('[name = "new-place"]'),q=document.querySelector('[name = "place-name"]'),k=document.querySelector('[name = "link"]'),b=s.querySelector(".popup__image"),L=s.querySelector(".popup__caption"),E=document.querySelector(".profile__edit-button"),g=document.querySelector(".profile__add-button");function h(e,t){o(s),b.src=e,b.alt=t,L.textContent=t}E.addEventListener("click",(function(){o(l),_.value=y.textContent,v.value=f.textContent})),m.addEventListener("submit",(function(e){e.preventDefault(),y.textContent=_.value,f.textContent=v.value,i(l)})),g.addEventListener("click",(function(){o(p)})),S.addEventListener("submit",(function(e){e.preventDefault();var o=t({name:q.value,link:k.value},n,r,h);d.prepend(o),q.value="",k.value="",i(p)})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return i(t)})),t.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&i(t)}))})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){d.append(t(e,n,r,h))})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");a(t,n),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("form__input_type_error"),n.textContent="",n.classList.remove("form__input-error_active")}(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("form__input_type_error"),r.textContent=n,r.classList.add("form__input-error_active")}(e,t,t.validationMessage)}(e,r),a(t,n)}))}))}(e)})),formSelector,validationConfig,u=Array.from(formElement.querySelectorAll(".popup__input")),formElement.querySelector(".popup__button"),u.forEach((function(e){e.validity.valid&&(e.setCustomValidity(""),e.removeAttribute("data-validation"))})),submitButton&&(submitButton.disabled=!1,submitButton.setAttribute("disabled",""))})();