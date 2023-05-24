import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__image-title');
  }

  open ({imageLink, imageName}) {
    this._popupImage.src = imageLink;
    this._popupImage.alt = imageName;
    this._popupTitle.textContent = imageName;

    super.open();
  }
}
