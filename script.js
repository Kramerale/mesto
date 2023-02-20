let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');
let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');
let popupName = popup.querySelector('.popup__name');
let popupOccupation = popup.querySelector('.popup__occupation');
let closeButton = popup.querySelector('.popup__close-button');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupOccupation.value = profileOccupation.textContent;
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);