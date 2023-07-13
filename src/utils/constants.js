export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};

export const cardsContainer = document.querySelector('.elements__card-list');

export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonEditAvatar = document.querySelector('.profile__edit-avatar');
export const buttonAdd = document.querySelector('.profile__add-button');

export const popupEditForm = document.forms.editform;
export const popupAddForm = document.forms.addform;
export const popupEditAvatarForm = document.forms.editAvatarForm;
export const popupProfileName = popupEditForm.elements.userName;
export const popupProfileOccupation = popupEditForm.elements.userOccupation;
