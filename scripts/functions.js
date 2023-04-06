import {Card} from './Card.js';
import {cardsContainer,
        popupProfileName,
        profileName,
        popupProfileOccupation,
        profileOccupation,
        popupEdit,
        popupAdd,
        popupPlaceName,
        popupPlaceLink} from './constants.js';

//Общая функция для открытия попапов

export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

//Функция для открытия попапа редактирования информации о пользователе

export function openEditPopup () {
  popupProfileName.value = profileName.textContent;
  popupProfileOccupation.value = profileOccupation.textContent;

  openPopup(popupEdit);
};

//Общая функция для закрытия попапов

export function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

//Функция для закрытия попапа при нажатии ecs

export function closePopupByEsc (evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//Функция для обработки формы редактирования инфо о пользователе

export function handleEditFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = popupProfileName.value;
  profileOccupation.textContent = popupProfileOccupation.value;

  closePopup (popupEdit);
};

//Функция для обработки формы создания новой карточки

export function createCardFromAddPopup (evt) {
  evt.preventDefault();

  const newCard = {
    name: popupPlaceName.value,
    link: popupPlaceLink.value
  };

  const card = new Card(newCard, '.card-template');
  const cardItem = card.createCard();
  cardsContainer.prepend(cardItem);

  closePopup(popupAdd);

  evt.target.reset();
};
