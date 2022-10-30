'use strict';

// Exercise 1
function timer() {
    let numberString = prompt('Введите число');
    let number = +numberString;

    if (numberString === null) {
        console.log('Пользователь отменил ввод.');
    } else if (numberString === '') {
        console.log('Пользователь ничего не ввел.');
    } else {
        if (Number.isNaN(number)) {
            console.log('Пользователь ввел не число.');
        } else {
            let promise = Promise.resolve(1);

            while (number > 0) {
                let someNumber = number;
                promise = promise.then(function(result) {
                    return new Promise(function (resolve) {
                        setTimeout(function () {
                            console.log(`Осталось ${someNumber}`);
                            resolve(result);
                        }, 1000);
                    });
                });
                number--;
            }

            promise.then(function () {
                console.log('Время вышло!');
            });
        }
    }
}
timer();

// Exercise 2
let users = {};
const promise = fetch('https://reqres.in/api/users');

promise
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        users = response.data;
    })
    .catch(function(error) {
        console.error(`Ошибка: ${error}.`);
    });
    
let counter = 0;
const intervalId = setInterval(function() {
    if (Object.keys(users).length === 0) {
        counter++;
    } else {
        console.log(`Время выполнения запроса: ${counter} мс`);
        users.forEach(function (user) {
            console.log(`— ${user.first_name} ${user.last_name} (${user.email})`);
        });
        clearInterval(intervalId);
    }
}, 1);
