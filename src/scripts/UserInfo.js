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

  setUserInfo ({profileName, profileOccupation}) {
    this._profileNameSelector.textContent = profileName;
    this._profileOccupationSelector.textContent = profileOccupation;
  }
}
