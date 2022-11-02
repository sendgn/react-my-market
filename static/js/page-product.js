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
        } else if (value.length < 2) {
            errorText = errorList['tooShort'];
        } else {
            makeFieldValid(inputFullname);
            return { isValid: true, errorText: errorText };
        }

        makeFieldInvalid(inputFullname, errorText);
        return { isValid: false, errorText: errorText };
    },
    rating: function (value) {
        let errorText = '';
        const valueNum = +value;
        const errorList = objectForm.rating.errorList;

        if (!valueNum || Number.isNaN(valueNum) || valueNum > 5 || valueNum < 1) {
            errorText = errorList['notInRange'];
        } else {
            makeFieldValid(inputRating);
            return { isValid: true, errorText };
        }

        makeFieldInvalid(inputRating, errorText);
        return { isValid: false, errorText };
    },
    comment: function (value) {
        // validation logic
        return { isValid: true, errorText: '' };
    },
}

function highlightField(field) {
    field.classList.add('form__field_invalid');
}

function lowlightField(field) {
    field.classList.remove('form__field_invalid');
}

function showFieldError(field, errorText) {
    const errorBox = field.parentElement.querySelector('.form__field-error');
    errorBox.textContent = errorText;
    errorBox.classList.remove('hidden');
}

function hideFieldError(field) {
    const errorBox = field.parentElement.querySelector('.form__field-error');
    errorBox.classList.add('hidden');
}

function toggleFieldError(field) {
    const errorBox = field.parentElement.querySelector('.form__field-error');
    errorBox.classList.toggle('hidden');
}

function makeFieldValid(field) {
    hideFieldError(field);
    lowlightField(field);
}

function makeFieldInvalid(field, errorText) {
    showFieldError(field, errorText);
    highlightField(field);
}

let timeoutId;
function onInputChange(event) {
    const { target } = event;
    const targetValue = target.value;

    const name = target.getAttribute('id');
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
        // Save input value to local storage
        localStorage.setItem(name, targetValue);

        const { isValid, errorText } = validators[name](targetValue);

        objectForm[name].value = targetValue;
        objectForm[name].error = !isValid;
        objectForm[name].errorText = errorText;
    }, 500);
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
    // On input focus out
    form.addEventListener('focusout', onInputChange);
    // On input focus in
    form.addEventListener('focusin', function (event) {
        const { target } = event;
        hideFieldError(target);
        lowlightField(target);
        fields.forEach(field => hideFieldError(field));
    });
}

document.addEventListener('DOMContentLoaded', initForms);
