import '../pages/index.css';

import {Card} from '../components/Card.js';

import {Section} from '../components/Section.js';

import {FormValidator} from '../components/FormValidator.js';

import {PopupWithForm} from '../components/PopupWithForm.js';

import {PopupWithImage} from '../components/PopupWithImage.js';

import {UserInfo} from '../components/UserInfo.js';

import {Api} from '../components/Api.js';

import {PopupWithSubmit} from '../components/PopupWithSubmit.js';

import {validationConfig,
        cardsContainer,
        buttonEdit,
        buttonAdd,
        buttonEditAvatar,
        popupEditForm,
        popupAddForm,
        popupEditAvatarForm,
        popupProfileName,
        popupProfileOccupation} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-70',
  headers: {
    authorization: '8fe60504-aa52-4743-868a-71782c18b288',
    'Content-Type': 'application/json'
  }
});

api.getPageData()
.then(res => {
  const [userData, cardData] = res;
  userInfo.setUserInfo({userName: userData.name, userOccupation: userData.about});
  userInfo.setUserAvatar(userData.avatar);
  userInfo.keepUserId(userData._id);
  cardList.renderItems(cardData);
});

const popupImage = new PopupWithImage('.popup_type_photo');
popupImage.setEventListeners();

const popupConfirm = new PopupWithSubmit('.popup_type_confirm');
popupConfirm.setEventListeners();

const userInfo = new UserInfo({
  profileNameSelector: '.profile__name',
  profileOccupationSelector: '.profile__occupation',
  profileAvatarSelector: '.profile__avatar'
});

function createCard (data, templateSelector) {
  const isUserOwner = data.owner._id === userInfo.getUserId();
  const card = new Card (data, templateSelector, {
    handleCardClick: () => {
      popupImage.open({imageLink: data.link, imageName: data.name});
    },
    handleLikeClick: () => {
      if (card.hasLike()) {
        api.deleteCardLike(card.getCardId())
        .then(data => {
          card.updateLikeCount(data.likes.length);
        })
        .catch(err => {
          console.error(err);
        });
      } else {
        api.addCardLike(card.getCardId())
        .then(data => {
          card.updateLikeCount(data.likes.length);
        })
        .catch(err => {
          console.error(err);
        });
      };
    },
    handleDeleteClick: () => {
      popupConfirm.open();
      popupConfirm.setHandleConfirmFunction((evt) => {
        evt.preventDefault();
        api.deleteUserCard(card.getCardId())
        .then(() => {
          cardItem.remove();
          popupConfirm.close();
        })
        .catch(err => {
          console.error(err);
        })
      })
    }
  },
  isUserOwner
  );
  const cardItem = card.generateCard();
  // cardsContainer.prepend(cardItem); //????
  return cardItem;
};

const cardList = new Section({
  renderer: item => {
    const cardElement = createCard(item, '.card-template');
    cardList.addItem(cardElement);
  },
  containerSelector: '.elements__card-list'
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleSubmitFunction: data => { //data здесь  - это объект с данными юзера, которые он ввел в форму редактирования профиля
    popupEditProfile.showLoadingInfo(true);
    userInfo.setUserInfo(data);
    api.editUserInfo({name: data.userName, about: data.userOccupation})
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      popupEditProfile.showLoadingInfo(false);
    })
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
  handleSubmitFunction: data => { //data здесь  - это объект с названием места и ссылкой на фото, которые пользователь добавил через форму добавления карточки
    api.addCard(data)
    .then(data => {
      const newCard = createCard(data, '.card-template');
      cardList.addItem(newCard);
    })
    .catch(err => {
      console.error(err);
    })
  }
});

popupAddNewPlace.setEventListeners();

buttonAdd.addEventListener('click', () => {
  addFormValidation.disableButton();

  popupAddNewPlace.open();
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_type_edit-avatar',
  handleSubmitFunction: data => {
    popupEditAvatar.showLoadingInfo(true);
    userInfo.setUserAvatar(data.link);
    api.editUserAvatar({avatar: data.link})
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      popupEditAvatar.showLoadingInfo(false);
    });
  }
});

popupEditAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
});

const editFormValidation = new FormValidator(validationConfig, popupEditForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, popupAddForm);
addFormValidation.enableValidation();

const editAvatarFormValidation = new FormValidator(validationConfig, popupEditAvatarForm);
editAvatarFormValidation.enableValidation();
