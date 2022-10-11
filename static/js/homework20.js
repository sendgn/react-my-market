'use strict';


/* Упражнение 1 */
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


/* Упражнение 2 */
function sumUserInputs() {
    let sum = 0;
    let answer = '';

    for (let i = 0; i < 3; i++) {
        answer = +prompt('Введите число.', 0);
        if (!isNaN(answer)) {
            sum += answer;
        } else {
            alert('Ошибка, вы ввели не число.');
            return;
        }
    }

    alert(`Сумма введенных чисел: ${sum}`);
    return sum;
}

sumUserInputs();


/* Упражнение 3 */
function getNameOfMonth(month) {
    let months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    return months[month];
}

const numberOfMonths = 12;
for (let i = 0; i < numberOfMonths; i++) {
    if (i === 9) continue;
    console.log(getNameOfMonth(i));
}


/* Упражнение 4 */
// IIFE (Immediately Invoked Function Expression) - это функция, которая вызывается сразу же после ее определения.
// Пример:
;(function () { console.log('Я - IIFE'); })();
// ";" перед IIFE ставлю чтобы привыкнуть к BP, так как в некоторых командах возможно люди не ставят ";" после выражений, а ASI (Automatic Semicolon Insertion, механизм автоматической расстановки точек с запятой) не сработает перед скобками в начале строки с кодом согласно стандарту ES. Делается во избежание возникновения ошибок связанных с ";"
