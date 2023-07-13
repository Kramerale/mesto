export class Card {
  constructor(data, templateSelector, {handleCardClick, handleLikeClick, handleDeleteClick}, isUserOwner) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._likeCounter = data.likes.length;
    this._cardTemplateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
    this._isUserOwner = isUserOwner;
  }

  _getTemplate () {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  //для удаления карточки, для постановки и удаления лайка через Api
  getCardId () {
    return this._cardId;
  }

  hasLike () {
    return this._likeButton.classList.contains('card__like-button_active');
  }

  updateLikeCount (newCountData) {
    this._likeButton.classList.toggle('card__like-button_active');
    this._likeCounterElement.textContent = newCountData;
  }

  _setEventListeners () {
    this._cardImage.addEventListener('click', () => this._handleCardClick());
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    if (this._isUserOwner) {
      this._deleteButton.addEventListener('click', () => this._handleDeleteClick());
    } else {
      this._deleteButton.remove();
    }
  }

  generateCard () {
    this._newCard = this._getTemplate();
    this._cardTitle = this._newCard.querySelector('.card__title');
    this._cardImage = this._newCard.querySelector('.card__image');
    this._likeButton = this._newCard.querySelector('.card__like-button');
    this._deleteButton = this._newCard.querySelector('.card__delete-button');
    this._likeCounterElement = this._newCard.querySelector('.card__like-count');

    this._cardTitle.textContent = this._name;

    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    this._likeCounterElement.textContent = this._likeCounter;

    this._setEventListeners();

    return this._newCard;
  }
}
