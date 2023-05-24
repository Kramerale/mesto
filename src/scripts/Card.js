export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate () {
    const cardElement = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  _likeCard () {
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _deleteCard () {
    this._newCard.remove();
  }

  _setEventListeners () {
    this._likeButton.addEventListener('click', () => this._likeCard());
    this._deleteButton.addEventListener('click', () => this._deleteCard());
    this._cardImage.addEventListener('click', () => this._handleCardClick());
  }

  generateCard () {
    this._newCard = this._getTemplate();

    this._cardTitle = this._newCard.querySelector('.card__title');
    this._cardTitle.textContent = this._name;

    this._cardImage = this._newCard.querySelector('.card__image');
    this._cardImage.setAttribute('src', this._link);
    this._cardImage.setAttribute('alt', this._name);

    this._likeButton = this._newCard.querySelector('.card__like-button');
    this._deleteButton = this._newCard.querySelector('.card__delete-button');

    this._setEventListeners();

    return this._newCard;
  }
}
