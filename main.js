(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,r,o){var c=e.querySelector(".card").cloneNode(!0),i=c.querySelector(".card__image");return i.src=t.link,i.alt=t.alt,c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__delete-button").addEventListener("click",(function(){return n(c)})),c.querySelector(".card__like-button").addEventListener("click",r),i.addEventListener("click",(function(){o(t.link,t.name)})),c}function n(e){e.remove()}function r(e){e.target.classList.toggle("card__like-button_is-active")}var o=function(e,t){e.some((function(e){return!e.validity.valid}))?(t.classList.add("button_inactive"),t.setAttribute("disabled","disabled")):(t.classList.remove("button_inactive"),t.removeAttribute("disabled"))},c=function(e){e.querySelector(".form__input-error").forEach((function(e){e.textContent=""})),e.querySelector(".popup__input").forEach((function(e){e.classList.remove("form__input-error")}))};function i(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",a),c(e)}function u(e){e.classList.remove("popup_is-opened"),document.addEventListener("keydown",a)}function a(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}var d=document.querySelector(".places__list"),p=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),s=document.querySelector(".popup_type_image"),m=document.querySelector('[name = "edit-profile"]'),_=document.querySelector(".popup__input_type_name"),f=document.querySelector(".popup__input_type_description"),v=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),q=document.querySelector('[name = "new-place"]'),S=document.querySelector('[name = "place-name"]'),k=document.querySelector('[name = "link"]'),L=s.querySelector(".popup__image"),E=s.querySelector(".popup__caption"),b=document.querySelector(".profile__edit-button"),g=document.querySelector(".profile__add-button");function h(e,t){i(s),L.src=e,L.alt=t,E.textContent=t}b.addEventListener("click",(function(){i(p),_.value=v.textContent,f.value=y.textContent})),m.addEventListener("submit",(function(e){e.preventDefault(),v.textContent=_.value,y.textContent=f.value,u(p)})),g.addEventListener("click",(function(){i(l)})),q.addEventListener("submit",(function(e){e.preventDefault();var o=t({name:S.value,link:k.value},n,r,h);d.prepend(o),S.value="",k.value="",u(l)})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return u(t)})),t.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&u(t)}))})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){d.append(t(e,n,r,h))})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){o(t,n);var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");o(t,n),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("form__input_type_error"),n.textContent="",n.classList.remove("form__input-error_active")}(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("form__input_type_error"),r.textContent=n,r.classList.add("form__input-error_active")}(e,t,t.validationMessage)}(e,r),o(t,n)}))}))}(e)})),clearValidation(profileForm)})();