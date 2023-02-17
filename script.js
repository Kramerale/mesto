let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});