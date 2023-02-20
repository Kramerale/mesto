let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let popupName = document.querySelector('.popup__name');
let popupOccupation = document.querySelector('.popup__occupation');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupOccupation.value = profileOccupation.textContent;
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});