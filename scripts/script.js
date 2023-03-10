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

const cardList = document.querySelector('.elements__card-list');
// const cardImages = document.querySelectorAll('.card__image');
// console.log(cardImages);

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let editButton = document.querySelector('.profile__edit-button');
let addButton = document.querySelector('.profile__add-button');

let popupEdit = document.querySelector('.popup_type_edit');
let popupAdd = document.querySelector('.popup_type_add');
let popupPhoto = document.querySelector('.popup_type_photo');
let popupEditForm = document.querySelector('.popup__form_type_edit');
let popupAddForm = document.querySelector('.popup__form_type_add');
let popupName = document.querySelector('.popup__input_type_name');
let popupOccupation = document.querySelector('.popup__input_type_occupation');
let popupPlaceName = document.querySelector('.popup__input_type_place-name');
let popupPlaceLink = document.querySelector('.popup__input_type_place-link');
let closeButtons = document.querySelectorAll('.popup__close-button');

function createCard (card) {
  const newCard = document.querySelector('.card-template').content.cloneNode(true);
  const cardTitle = newCard.querySelector('.card__title');
  cardTitle.textContent = card.name;

  const cardImage = newCard.querySelector('.card__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);

  newCard.querySelector('.card__like-button').addEventListener('click', likeCard);

  newCard.querySelector('.card__delete-button').addEventListener('click', deleteCard);

  return newCard;
};

function renderCard (card, cardsContainer) {
  const newCard = createCard(card);

  cardsContainer.prepend(newCard);
};

function openPopup (popup) {
  popup.classList.add('popup_opened');
  popupName.value = profileName.textContent;
  popupOccupation.value = profileOccupation.textContent;
};

function closePopup (evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileOccupation.textContent = popupOccupation.value;

  closePopup (evt);
};

function createCardFromPopup (evt) {
  evt.preventDefault();

  renderCard({name: popupPlaceName.value, link: popupPlaceLink.value}, cardList);

  closePopup (evt);

  evt.target.reset();
};

function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_active');
};

function deleteCard (evt) {
  evt.target.closest('.card').remove();
};

initialCards.forEach(card => renderCard(card, cardList));

editButton.addEventListener('click', () => openPopup(popupEdit));
addButton.addEventListener('click', () => openPopup(popupAdd));
// cardImages.forEach(image => {
//   image.addEventListener('click', () => openPopup(popupPhoto));
// });

closeButtons.forEach(button => {
  button.addEventListener('click', closePopup);
});

popupEditForm.addEventListener('submit', handleFormSubmit);
popupAddForm.addEventListener('submit', createCardFromPopup);
