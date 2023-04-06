import {popupPhoto, popupImage, popupTitle} from './constants.js';
import {openPopup} from './functions.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = templateSelector;
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

  _openPhotoPopup () {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupTitle.textContent = this._name;

    openPopup(popupPhoto);
  }

  _setEventListeners () {
    this._likeButton.addEventListener('click', () => this._likeCard());
    this._deleteButton.addEventListener('click', () => this._deleteCard());
    this._cardImage.addEventListener('click', () => this._openPhotoPopup());
  }

  createCard () {
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
