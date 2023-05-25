export class UserInfo {
  constructor({profileNameSelector, profileOccupationSelector}) {
    this._profileNameSelector = document.querySelector(profileNameSelector);
    this._profileOccupationSelector = document.querySelector(profileOccupationSelector);
  }

  getUserInfo () {
    return {
      profileName: this._profileNameSelector.textContent,
      profileOccupation: this._profileOccupationSelector.textContent
    }
  }

  setUserInfo ({userName, userOccupation}) {
    this._profileNameSelector.textContent = userName;
    this._profileOccupationSelector.textContent = userOccupation;
  }
}
