import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitFunction}) {
    super(popupSelector);
    this._handleSubmit = handleSubmitFunction;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  _getInputValues () {
    this._inputList = this._popupForm.querySelectorAll('.popup__input');

    this._inputValueList = {};

    this._inputList.forEach(input => {
      const inputName = input.name;
      const inputValue = input.value;

      this._inputValueList[inputName] = inputValue;
    });

    return this._inputValueList;
  }

  setEventListeners () {
    this._popupForm.addEventListener('submit', () => {
      this._inputValues = this._getInputValues();

      this._handleSubmit(this._inputValues);

      this.close();
    });

    super.setEventListeners();
  }

  close () {
    super.close();
    this._popupForm.reset();
  }
}
