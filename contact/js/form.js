
const viewAlert = (e) => {
    e.preventDefault();
    alert('フォームはデモです。');
}


const submitButton = document.querySelector('.form__submit__button');
submitButton.addEventListener('click', viewAlert);