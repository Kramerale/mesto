import '../pages/index.css';

import {Card} from './Card.js';

import {Section} from './Section.js';

import {FormValidator} from './FormValidator.js';

import { PopupWithForm } from './PopupWithForm.js';

import { PopupWithImage } from './PopupWithImage';

import { UserInfo } from './UserInfo.js';

import {initialCards,
        validationConfig,
        cardsContainer,
        buttonEdit,
        buttonAdd,
        popupEditForm,
        popupAddForm,
        popupProfileName,
        popupProfileOccupation} from './constants.js';

const popupImage = new PopupWithImage('.popup_type_photo');
popupImage.setEventListeners();

function createCard (data, templateSelector) {
  const card = new Card(data, templateSelector, () => {
    popupImage.open({
      imageLink: data.link,
      imageName: data.name
    });
  });
  const cardItem = card.generateCard();
  cardsContainer.prepend(cardItem);
  return cardItem;
};

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileOccupationSelector: '.profile__occupation'
});

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item, '.card-template');
    cardList.addItem(cardElement);
  },
  containerSelector: '.elements__card-list'
});

cardList.renderItems();

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleSubmitFunction: data => {
    userInfo.setUserInfo({
      profileName: data.name,
      profileOccupation: data.occupation
    });
  }
});

popupEditProfile.setEventListeners();

buttonEdit.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  popupProfileName.value = profileInfo.profileName;
  popupProfileOccupation.value = profileInfo.profileOccupation;

  popupEditProfile.open()
});

const popupAddNewPlace = new PopupWithForm({
  popupSelector: '.popup_type_add',
  handleSubmitFunction: data => {
    const newCard = {
      name: data.title,
      link: data.link
    };

    createCard(newCard, '.card-template');
  }
});

popupAddNewPlace.setEventListeners();

buttonAdd.addEventListener('click', () => {
  addFormValidation.disableButton();

  popupAddNewPlace.open();
});

const editFormValidation = new FormValidator(validationConfig, popupEditForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, popupAddForm);
addFormValidation.enableValidation();
