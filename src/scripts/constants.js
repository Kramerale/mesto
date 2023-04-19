export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};

export const cardsContainer = document.querySelector('.elements__card-list');

export const profileName = document.querySelector('.profile__name');
export const profileOccupation = document.querySelector('.profile__occupation');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');
export const buttonsClose = document.querySelectorAll('.popup__close-button');

export const popupsList = document.querySelectorAll('.popup');

export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupEditForm = document.forms.editform;
export const popupAddForm = document.forms.addform;
export const popupProfileName = popupEditForm.elements.name;
export const popupProfileOccupation = popupEditForm.elements.occupation;
export const popupPlaceName = popupAddForm.elements.title;
export const popupPlaceLink = popupAddForm.elements.link;
export const popupImage = document.querySelector('.popup__image');
export const popupTitle = document.querySelector('.popup__image-title');

export const buttonsSubmit = document.querySelectorAll('.popup__submit-button');
