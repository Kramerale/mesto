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
        createCardFromAddPopup} from './functions.js';

initialCards.forEach((item) => {
  const card = new Card(item, '.card-template');
  const cardItem = card.createCard();
  cardsContainer.prepend(cardItem);
});

buttonEdit.addEventListener('click', openEditPopup);

buttonAdd.addEventListener('click', () => {
  const submitButton = popupAdd.querySelector('.popup__submit-button');
  addFormValidation.disableButton(submitButton);
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

const editFormValidation = new FormValidator(validationConfig, '.popup__form_type_edit');
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, '.popup__form_type_add');
addFormValidation.enableValidation();
