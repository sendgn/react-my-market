'use strict';


/* Упражнение 1 */
let a = '$100';
let b = '300$';
// Решение
let sum = +a.slice(1) + parseInt(b);
console.log(sum); // Должно быть 400


/* Упражнение 2 */
let message = ' привет, медвед      ';
// Решение
function trimString(string) {
    return string.trim();
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter(trimString(message))); // “Привет, медвед”


/* Упражнение 3 */
const age = +prompt('Сколько вам лет?');
// Решение
if (isNaN(age) || age < 0) {
    alert('Ошибка! Вы неправильно ввели возраст. Попробуйте еще раз.')
} else {
    let maturity =
        (age >= 0 && age <= 3) ? 'младенец' :
        (age >= 4 && age <= 11) ? 'ребенок' :
        (age >= 12 && age <= 18) ? 'подросток' :
        (age >= 19 && age <= 40) ? 'познаёте жизнь' :
        (age >= 41 && age <= 80) ? 'познали жизнь' :
        (age >= 81) ? 'долгожитель' : '';
    alert(`Вам ${age} лет и вы ${maturity}`);
}


/* Упражнение 4 */
message = 'Я работаю со строками, как профессионал!';
// Решение
let count = message.split(' ').length; 
console.log(count); // Должно быть 6
