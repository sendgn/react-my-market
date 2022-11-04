'use strict';

class Form {
    constructor() {
        this.highlightField = this.highlightField.bind(this);
        this.lowlightField = this.lowlightField.bind(this);
        this.showFieldError = this.showFieldError.bind(this);
        this.hideFieldError = this.hideFieldError.bind(this);
        this.makeFieldLookValid = this.makeFieldLookValid.bind(this);
        this.makeFieldLookInvalid = this.makeFieldLookInvalid.bind(this);
        this.updateFormValidity = this.updateFormValidity.bind(this);
        this.handleFocusout = this.handleFocusout.bind(this);
        this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
    }

    // Properties
    fields = {};

    formElement = document.getElementById('form');
    formFieldsElements = this.formElement.querySelectorAll('.form__field');
    
    isValid = false;

    // Methods
    highlightField(field) {
        field.classList.add('form__field_invalid');
    }

    lowlightField(field) {
        field.classList.remove('form__field_invalid');
    }

    showFieldError(field, errorText) {
        const errorBox = field.parentElement.querySelector('.form__field-error');
        errorBox.textContent = errorText;
        errorBox.classList.remove('hidden');
    }

    hideFieldError(field) {
        const errorBox = field.parentElement.querySelector('.form__field-error');
        errorBox.classList.add('hidden');
    }

    makeFieldLookValid(field) {
        this.hideFieldError(field);
        this.lowlightField(field);
    }

    makeFieldLookInvalid(field, errorText) {
        this.showFieldError(field, errorText);
        this.highlightField(field);
    }

    updateFormValidity() {
        for (let field in this.fields) {
            if (this.fields[field].error) {
                this.formFieldsElements.forEach(formField => this.hideFieldError(formField));
                this.validators[field](this.fields[field].value);
                this.isFormValid = false;
                return false;
            }
        }

        this.isFormValid = true;
        return true;
    }

    handleFocusout(event) {
        let timeoutId;
        const { target } = event;
        const targetValue = target.value;

        const name = target.getAttribute('id');
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            // Save input value to local storage
            localStorage.setItem(name, targetValue);

            const { isValid, errorText } = this.validators[name](targetValue);

            this.fields[name].value = targetValue;
            this.fields[name].error = !isValid;
            this.fields[name].errorText = errorText;

            this.updateFormValidity(this);
        }, 300);
    }

    loadFromLocalStorage() {
        for (let field in this.fields) {
            this.fields[field].value = localStorage.getItem(field) || '';
        }
    }

    fillFieldsFromLocalStorage() {
        this.formFieldsElements.forEach((element) => {
            element.value = this.fields[element.id].value;
        });
    }

    initForm() {
        this.loadFromLocalStorage();
        this.fillFieldsFromLocalStorage()

        // On input focus out
        this.formElement.addEventListener('focusout', this.handleFocusout);
        // On input focus in
        this.formElement.addEventListener('focusin', (event) => {
            const { target } = event;
            setTimeout(() => {
                this.makeFieldLookValid(target);
            }, 350);
        });
    }
}

class AddReviewForm extends Form {
    constructor() {
        super();
    }

    fields = {
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
    };

    validators = {
        fullname: value => {
            const domElement = document.getElementById('fullname');
            let errorText = '';
            const errorList = this.fields.fullname.errorList;

            if (!value) {
                errorText = errorList['empty'];
            } else if (value.length < 2) {
                errorText = errorList['tooShort'];
            } else {
                this.makeFieldLookValid(domElement);
                return { isValid: true, errorText: errorText };
            }
            

            this.makeFieldLookInvalid(domElement, errorText);
            return { isValid: false, errorText: errorText };
        },
        rating: value => {
            let errorText = '';
            const domElement = document.getElementById('rating');
            const valueNum = +value;
            const errorList = this.fields.rating.errorList;

            if (!valueNum || Number.isNaN(valueNum) || valueNum > 5 || valueNum < 1) {
                errorText = errorList['notInRange'];
            } else {
                this.makeFieldLookValid(domElement);
                return { isValid: true, errorText };
            }

            this.makeFieldLookInvalid(domElement, errorText);
            return { isValid: false, errorText };
        },
        comment: value => {
            // validation logic
            return { isValid: true, errorText: '' };
        },
    }
}

let reviewForm = new AddReviewForm();
reviewForm.initForm();
