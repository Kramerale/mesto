const initialCards = [
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

const cardsContainer = document.querySelector('.elements__card-list');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonsClose = document.querySelectorAll('.popup__close-button');

const popupslist = document.querySelectorAll('.popup');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupPhoto = document.querySelector('.popup_type_photo');
const popupEditForm = document.querySelector('.popup__form_type_edit');
const popupAddForm = document.querySelector('.popup__form_type_add');
const popupProfileName = document.querySelector('.popup__input_type_name');
const popupProfileOccupation = document.querySelector('.popup__input_type_occupation');
const popupPlaceName = document.querySelector('.popup__input_type_place-name');
const popupPlaceLink = document.querySelector('.popup__input_type_place-link');
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');

function createCard (card) {
  const newCard = cardTemplate.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = card.name;

  const cardImage = newCard.querySelector('.card__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  newCard.querySelector('.card__like-button').addEventListener('click', likeCard);

  newCard.querySelector('.card__delete-button').addEventListener('click', deleteCard);

  cardImage.addEventListener('click', openPhotoPopup);

  return newCard;
};

function renderCard (card, cardsContainer) {
  const newCard = createCard(card);

  cardsContainer.prepend(newCard);
};

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

function openEditPopup () {
  popupProfileName.value = profileName.textContent;
  popupProfileOccupation.value = profileOccupation.textContent;

  openPopup(popupEdit);
};

function openPhotoPopup (evt) {
  popupImage.setAttribute('src', evt.target.closest('.card__image').src);
  popupImage.setAttribute('alt', evt.target.closest('.card__image').alt);
  popupTitle.textContent = evt.target.closest('.card__image').alt;

  openPopup(popupPhoto);
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

function closePopupByEsc (evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

function handleEditFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = popupProfileName.value;
  profileOccupation.textContent = popupProfileOccupation.value;

  closePopup (popupEdit);
};

function createCardFromAddPopup (evt) {
  evt.preventDefault();

  renderCard({name: popupPlaceName.value, link: popupPlaceLink.value}, cardsContainer);

  closePopup (popupAdd);

  evt.target.reset();
};

function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_active');
};

function deleteCard (evt) {
  evt.target.closest('.card').remove();
};

initialCards.forEach(card => renderCard(card, cardsContainer));

buttonEdit.addEventListener('click', openEditPopup);
buttonAdd.addEventListener('click', () => openPopup(popupAdd));

buttonsClose.forEach(button => {
  button.addEventListener('click', () => closePopup(button.closest('.popup')));
});

popupslist.forEach(popup => {
  popup.addEventListener('click', evt => {
    if(evt.target === popup) {
      closePopup(popup);
    };
  });
});

popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupAddForm.addEventListener('submit', createCardFromAddPopup);
