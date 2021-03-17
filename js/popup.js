const link = document.querySelector('.contacts-button');
const popup = document.querySelector('.feedback');
const close = document.querySelector('.modal-close');
const name = popup.querySelector('[name=user-name]');
const email = popup.querySelector('[name=user-email]');
const text = popup.querySelector('[name=user-text]');
const form = popup.querySelector('.feedback-form');
const storage_name = localStorage.getItem('name');
const storage_email = localStorage.getItem('email');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-display-none');
  name.focus();
if (storage_name){
  name.value = storage_name;
}
if (storage_email){
  email.value = storage_email;
}
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-display-none');
  popup.classList.remove("modal-error");
}
);

form.addEventListener('submit', function(evt) {
  if (!name.value || !email.value || !text.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  console.log('нужно заполнить все поля');
}
  else {
  if (isStorageSupport) {
    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("modal-display-none")) {
      evt.preventDefault();
      popup.classList.add("modal-display-none");
      popup.classList.remove("modal-error");
    }
  }
});
