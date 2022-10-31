'use strict';

const feedbackForm = document.querySelector('.feedback__form');
const feedbackSubmit = feedbackForm.querySelector('.form__submit');

function showFormFieldError(input, errorText) {
    const errorBox = input.parentElement.querySelector('.form__field-error');
    errorBox.classList.remove('hidden');
    errorBox.textContent = errorText;
    input.classList.add('form__field_invalid');
}

function hideFormFieldError(input) {
    const errorBox = input.parentElement.querySelector('.form__field-error');
    errorBox.classList.add('hidden');
    input.classList.remove('form__field_invalid');
}

function validateFeedbackFullname() {
    const input = feedbackForm.querySelector('.feedback__fullname');
    const inputValue = input.value;
    
    if (!inputValue) {
        showFormFieldError(input, 'Вы забыли указать имя и фамилию');
    } else if (inputValue.length < 2) {
        showFormFieldError(input, 'Имя не может быть короче 2-х символов');
    } else {
        hideFormFieldError(input);
        return true;
    }

    return false;
}

function validateFeedbackRating() {
    const input = feedbackForm.querySelector('.feedback__rating');
    const inputValue = +input.value;

    if (!inputValue || Number.isNaN(inputValue) || inputValue > 5 || inputValue < 1) {
        showFormFieldError(input, 'Оценка должна быть от 1 до 5');
    } else {
        hideFormFieldError(input);
        return true;
    }

    return false;
}

function validateFeedbackForm() {
    if (validateFeedbackFullname()) {
        validateFeedbackRating();
    }
}

feedbackSubmit.addEventListener('click', validateFeedbackForm);
