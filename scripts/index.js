//Реализация кнопки-добавления
const aboutButton = document.querySelector('.profile__edid-button');
//Реализация попапа
const aboutPopup = document.querySelector('.popup');
//Реализация кнопки-закрытия
const aboutCloseButton = document.querySelector('.popup__close-button');

const buttonSave = document.querySelector('.popup__save-button');
const profileName = document.querySelector('.profile__name');
const profileАctivity = document.querySelector('.profile__activity');
const inputName = document.querySelector('[name="input-name"]');
const inputАctivity = document.querySelector('[name="input-аctivity"]'); 
const profileInfo = document.querySelector('.popup__profile-text');

aboutButton.addEventListener('click', (Event) => {
    aboutPopup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputАctivity.value = profileАctivity.textContent;
})


function closePopup() {
    aboutPopup.classList.remove('popup_opened');
};

aboutCloseButton.addEventListener('click', closePopup);

//Сохранение информации в профиле
function handleFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileАctivity.textContent = inputАctivity.value;

    closePopup();
};

profileInfo.addEventListener('submit', handleFormSubmit);

//Изменение цвета сердца

const aboutHeart = Array.from(document.querySelectorAll('.photo__heart'));

aboutHeart.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('photo__heart_active');
    })
})