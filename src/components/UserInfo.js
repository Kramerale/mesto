export class UserInfo {
  constructor({profileNameSelector, profileOccupationSelector, profileAvatarSelector}) {
    this._profileNameSelector = document.querySelector(profileNameSelector);
    this._profileOccupationSelector = document.querySelector(profileOccupationSelector);
    this._profileAvatarSelector = document.querySelector(profileAvatarSelector);
  }

  getUserInfo () {
    return {
      profileName: this._profileNameSelector.textContent,
      profileOccupation: this._profileOccupationSelector.textContent
    }
  }

  setUserInfo ({userName, userOccupation}) {
    if (userName) {
      this._profileNameSelector.textContent = userName;
    };

    if (userOccupation) {
      this._profileOccupationSelector.textContent = userOccupation;
    };
    // this._profileNameSelector.textContent = userName;
    // this._profileOccupationSelector.textContent = userOccupation;
  }

  setUserAvatar (userAvatar) {
    if (userAvatar) {
      this._profileAvatarSelector.src = userAvatar;
    };
    // this._profileAvatarSelector.src = userAvatar;
  }

  keepUserId (userId) {
    this._userId = userId;
  }

  getUserId () {
    return this._userId;
  }
}
