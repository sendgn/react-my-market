'use strict';

// Cart
const cartCounter = document.getElementById('cart-counter');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const productName = document.querySelector('.product__name').textContent;

let objectCart = {
    products: [],
}

function showCartCounter() {
    cartCounter.classList.remove('hidden');
}

function hideCartCounter() {
    cartCounter.classList.add('hidden');
}

function makeAddToCartBtnInactive() {
    addToCartBtn.classList.add('btn_inactive');
    document.querySelector('.btn__text_cart').textContent = 'Товар уже в корзине';
}

function makeAddToCartBtnActive() {
    addToCartBtn.classList.remove('btn_inactive');
    document.querySelector('.btn__text_cart').textContent = 'Добавить в корзину';
}

if (localStorage.getItem('product')) {
    objectCart.products.push(localStorage.getItem('product'));
}

if (objectCart.products.length) {
    showCartCounter();
    makeAddToCartBtnInactive();
    cartCounter.textContent = `${objectCart.products.length}`;
}

addToCartBtn.addEventListener('click', function() {
    if (objectCart.products.includes(productName)) {
        hideCartCounter();
        makeAddToCartBtnActive();
        objectCart.products.pop();
        localStorage.removeItem('product');
    } else {
        showCartCounter();
        makeAddToCartBtnInactive();
        objectCart.products.push(productName);
        localStorage.setItem('product', objectCart.products[objectCart.products.length - 1]);
    }

    cartCounter.textContent = `${objectCart.products.length}`;
});

// Form
const form = document.getElementById('form');
const formFields = form.querySelectorAll('.form__field');

const inputFullname = document.getElementById('fullname');
const inputRating = document.getElementById('rating');
const inputComment = document.getElementById('comment');

let objectForm = {
    fields: {
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
    },
    isFormValid: false,
};

const validators = {
    fullname: function (value) {
        let errorText = '';
        const errorList = objectForm.fields.fullname.errorList;

        if (!value) {
            errorText = errorList['empty'];
        } else if (value.length < 2) {
            errorText = errorList['tooShort'];
        } else {
            makeFieldLookValid(inputFullname);
            return { isValid: true, errorText: errorText };
        }

        makeFieldLookInvalid(inputFullname, errorText);
        return { isValid: false, errorText: errorText };
    },
    rating: function (value) {
        let errorText = '';
        const valueNum = +value;
        const errorList = objectForm.fields.rating.errorList;

        if (!valueNum || Number.isNaN(valueNum) || valueNum > 5 || valueNum < 1) {
            errorText = errorList['notInRange'];
        } else {
            makeFieldLookValid(inputRating);
            return { isValid: true, errorText };
        }

        makeFieldLookInvalid(inputRating, errorText);
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

function makeFieldLookValid(field) {
    hideFieldError(field);
    lowlightField(field);
}

function makeFieldLookInvalid(field, errorText) {
    showFieldError(field, errorText);
    highlightField(field);
}

function updateFormValidity(objectForm) {
    for (let field in objectForm.fields) {
        if (objectForm.fields[field].error) {
            formFields.forEach(formField => hideFieldError(formField));
            validators[field](objectForm.fields[field].value);
            objectForm.isFormValid = false;
            return false;
        }
    }

    objectForm.isFormValid = true;
    return true;
}

let timeoutId;
function onFocusout(event) {
    const { target } = event;
    const targetValue = target.value;

    const name = target.getAttribute('id');
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
        // Save input value to local storage
        localStorage.setItem(name, targetValue);

        const { isValid, errorText } = validators[name](targetValue);

        objectForm.fields[name].value = targetValue;
        objectForm.fields[name].error = !isValid;
        objectForm.fields[name].errorText = errorText;

        updateFormValidity(objectForm);
    }, 300);
}

function initForms() {
    objectForm.fields.fullname.value = localStorage.getItem('fullname') || '';
    objectForm.fields.rating.value = localStorage.getItem('rating') || '';
    objectForm.fields.comment.value = localStorage.getItem('comment') || '';

    inputFullname.value = objectForm.fields.fullname.value;
    inputRating.value = objectForm.fields.rating.value;
    inputComment.value = objectForm.fields.comment.value;

    // On input focus out
    form.addEventListener('focusout', onFocusout);
    // On input focus in
    form.addEventListener('focusin', function (event) {
        const { target } = event;
        setTimeout(function () {
            makeFieldLookValid(target);
        }, 350);
    });
}

document.addEventListener('DOMContentLoaded', initForms);
