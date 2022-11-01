'use strict';

const form = document.getElementById('form');
const fields = form.querySelectorAll('.form__field');

const inputFullname = document.getElementById('fullname');
const inputRating = document.getElementById('rating');
const inputComment = document.getElementById('comment');

let objectForm = {
    fullname: {
        id: 'fullname',
        value: undefined,
        error: false,
        errorList: { 
            empty: 'Вы забыли указать имя и фамилию',
            tooShort: 'Имя не может быть короче 2-х символов',
        },
    },
    rating: {
        id: 'rating',
        value: undefined,
        error: false,
        errorList: { 
            notInRange: 'Оценка должна быть от 1 до 5',
        },
    },
    comment: { 
        id: 'comment',
        value: undefined,
        error: false,
        errorList: {},
    },
    isFormValid: false,
};

const validators = {
    fullname: function (value) {
        let errorText = '';
        const errorList = objectForm.fullname.errorList;

        if (!value) {
            errorText = errorList['empty'];
            showFormFieldError(inputFullname, errorText);
        } else if (value.length < 2) {
            errorText = errorList['tooShort'];
            showFormFieldError(inputFullname, errorText);
        } else {
            hideFormFieldError(inputFullname);
            return { isValid: true, errorText: errorText };
        }

        return { isValid: false, errorText: errorText };
    },
    rating: function (value) {
        const valueNum = +value;
        let errorText = '';
        const errorList = objectForm.rating.errorList;

        if (!valueNum || Number.isNaN(valueNum) || valueNum > 5 || valueNum < 1) {
            errorText = errorList['notInRange'];
            showFormFieldError(inputRating, errorText);
        } else {
            hideFormFieldError(inputRating);
            return { isValid: true, errorText };
        }

        return { isValid: false, errorText };
    },
    comment: function (value) {
        // validation logic
        return { isValid: true, errorText: '' };
    },
}

function showFormFieldError(input, errorText) {
    const errorBox = input.parentElement.querySelector('.form__field-error');
    errorBox.textContent = errorText;
    errorBox.classList.remove('hidden');
    input.classList.add('form__field_invalid');
}

function hideFormFieldError(input) {
    const errorBox = input.parentElement.querySelector('.form__field-error');
    errorBox.classList.add('hidden');
    input.classList.remove('form__field_invalid');
}

let timeoutId;
function onInputChange(event) {
    const { target } = event;
    const targetValue = target.value;

    // How check if it really change input?

    const name = target.getAttribute('id');
    clearTimeout(timeoutId);

    // Если человек быстро перейдет в другой инпут, 
    // старый инпут перетрется, как это исправить?
    timeoutId = setTimeout(function () {
        // Save input value to local storage
        localStorage.setItem(name, targetValue);

        objectForm[name].value = targetValue;
        const { isValid, errorText } = validators[name](targetValue);

        objectForm[name].error = !isValid;
        objectForm[name].errorText = errorText;
    }, 1000);
}

function initForms() {
    objectForm.fullname.value = localStorage.getItem('fullname') || '';
    objectForm.rating.value = localStorage.getItem('rating') || '';
    objectForm.comment.value = localStorage.getItem('comment') || '';

    inputFullname.value = objectForm.fullname.value;
    inputRating.value = objectForm.rating.value;
    inputComment.value = objectForm.comment.value;

    // On input change
    form.addEventListener('change', onInputChange);
    // On input focus
    form.addEventListener('focusin', function (event) {
        hideFormFieldError(event.target);
    });
}

document.addEventListener('DOMContentLoaded', initForms);
