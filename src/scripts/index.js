import '../pages/index.css';

import {Card} from './Card.js';

import {FormValidator} from './FormValidator.js';

import {initialCards,
        validationConfig,
        cardsContainer,
        buttonsClose,
        popupsList,
        buttonEdit,
        buttonAdd,
        popupAdd,
        popupEditForm,
        popupAddForm} from './constants.js';

import {openPopup,
        openEditPopup,
        closePopup,
        handleEditFormSubmit,
        createCard,
        createCardFromAddPopup} from './functions.js';

initialCards.forEach((item) => {
  createCard(item, '.card-template');
});

buttonEdit.addEventListener('click', openEditPopup);

buttonAdd.addEventListener('click', () => {
  addFormValidation.disableButton();
  openPopup(popupAdd)
});

buttonsClose.forEach(button => {
  button.addEventListener('click', () => closePopup(button.closest('.popup')));
});

//Закрытие попапа по нажатию на overlay

popupsList.forEach(popup => {
  popup.addEventListener('click', evt => {
    if(evt.target === popup) {
      closePopup(popup);
    };
  });
});

popupEditForm.addEventListener('submit', handleEditFormSubmit);

popupAddForm.addEventListener('submit', createCardFromAddPopup);

const editFormValidation = new FormValidator(validationConfig, popupEditForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, popupAddForm);
addFormValidation.enableValidation();
