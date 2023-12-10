function openPopap(event) {
  event.classList.add('popup_is-animated');
  setTimeout(() => {event.classList.add('popup_is-opened');},5)
};
function closePopap(event) {
  event.classList.remove('popup_is-opened');
};
export {openPopap, closePopap}