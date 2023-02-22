let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupName = popup.querySelector('.popup__input_type_name');
let popupOccupation = popup.querySelector('.popup__input_type_occupation');
let closeButton = popup.querySelector('.popup__close-button');

function openPopup () {
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupOccupation.value = profileOccupation.textContent;
};

function closePopup () {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  closePopup ();
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', handleFormSubmit);
