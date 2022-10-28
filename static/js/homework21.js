'use strict';

// Exercise 1
/**
 * Determines if the passed object is empty
 * @param {object} obj Any object
 * @returns {boolean}
 */
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let user = {};
console.log(isEmpty(user));

user.age = 12;
console.log(isEmpty(user));

// Exercise 2
// See data.js

// Exercise 3
let salaries = {
    John: 100000,
    Ann: 160000,
    Pete: 130000,
};

/**
 * Повышает зарплату всем сотрудникам
 * @param {number} percent Процент повышения зарплаты сотрудника
 * @param {object} salaries Объект, где ключ - имя сотрудника, значение - его зарплата
 * @returns Возвращает новый объект, где ключ - имя сотрудника, значение - его зарплата, с учетом повышения
 */
function raiseSalary(percent, salaries) {
    let newSalaries = {};
    for (let key in salaries) {
        newSalaries[key] = salaries[key] + salaries[key] / 100 * percent;
    }
    return newSalaries;
}

function calcTotalSalary(salaries) {
    let totalSalary = 0;
    for (let key in salaries) {
        totalSalary += salaries[key];
    }
    return totalSalary;
}

console.log(calcTotalSalary(raiseSalary(10, salaries)));
