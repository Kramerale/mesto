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

//Функция создания карточки

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

//Функция для добавления новой карточки на страницу

function renderCard (card, cardsContainer) {
  const newCard = createCard(card);

  cardsContainer.prepend(newCard);
};

//Общая функция для открытия попапов

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

//Функция для открытия попапа редактирования информации о пользователе

function openEditPopup () {
  popupProfileName.value = profileName.textContent;
  popupProfileOccupation.value = profileOccupation.textContent;

  openPopup(popupEdit);
};

//Функция для открытия попапа с полноразмерной фотографией

function openPhotoPopup (evt) {
  popupImage.setAttribute('src', evt.target.closest('.card__image').src);
  popupImage.setAttribute('alt', evt.target.closest('.card__image').alt);
  popupTitle.textContent = evt.target.closest('.card__image').alt;

  openPopup(popupPhoto);
};

//Общая функция для закрытия попапов

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

//Функция для закрытия попапа при нажатии ecs

function closePopupByEsc (evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

//Функция для обработки формы редактирования инфо о пользователе

function handleEditFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = popupProfileName.value;
  profileOccupation.textContent = popupProfileOccupation.value;

  closePopup (popupEdit);
};

//Функция для обработки формы создания новой карточки

function createCardFromAddPopup (evt) {
  evt.preventDefault();

  renderCard({name: popupPlaceName.value, link: popupPlaceLink.value}, cardsContainer);

  closePopup (popupAdd);

  evt.target.reset();
};

//Функция для добавления лайков на карточки

function likeCard (evt) {
  evt.target.classList.toggle('card__like-button_active');
};

//Функция для удаления карточек

function deleteCard (evt) {
  evt.target.closest('.card').remove();
};

initialCards.forEach(card => renderCard(card, cardsContainer));

buttonEdit.addEventListener('click', openEditPopup);
buttonAdd.addEventListener('click', () => openPopup(popupAdd));

buttonsClose.forEach(button => {
  button.addEventListener('click', () => closePopup(button.closest('.popup')));
});

//Закрытие попапа по нажатию на overlay

popupslist.forEach(popup => {
  popup.addEventListener('click', evt => {
    if(evt.target === popup) {
      closePopup(popup);
    };
  });
});

popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupAddForm.addEventListener('submit', createCardFromAddPopup);
