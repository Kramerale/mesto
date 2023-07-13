import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  setEventListeners () {
    this._popupForm.addEventListener('submit', (evt) => {
      this._handleConfirmFunction(evt);
    });
    super.setEventListeners();
  }

  setHandleConfirmFunction (confirmFunction) {
    this._handleConfirmFunction = confirmFunction;
  }
}
