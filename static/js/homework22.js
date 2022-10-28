'use strict';

// Exercise 1
let arr0 = [1, 2, 10, 5];
let arr1 = ['a', {}, 3, 3, -2];
let arr2 = [1, 2, '3', 4, [1, 3, [1, 2, 3]], {a: 1, '2': -1}];
let arr3 = [
    1,
    1n,
    Symbol('z'),
    {
        a: null,
        b: [
            3,
            undefined,
            5,
            [
                {
                    a: '6',
                    b: [
                        7,
                        {
                            c:
                            true,
                            'x': {
                                a: 10
                            }
                        },
                        [11, 12]
                    ]
                }
            ]
        ]
    }
];

// Возвращает сумму всех значений чисел (и строк, которые возможно привести к числу)
// содержащихся в переданном массиве на любой глубине вложенности
function getSum(arr) {
    let sum = 0;
    // Shallow array copying
    let resArr = [...arr];

    while (resArr.length) {
        let item = resArr.pop();

        // Objects 
        if (item === Object(item)) {
            resArr.push(...Object.values(item));
        // Primitives
        } else {
            let converted = typeof item === 'symbol' ? 0 : Number(item);
            if (Number.isNaN(converted) || typeof item === 'boolean') continue;
            else sum += converted;
        }
    }

    return sum;
}

console.log(getSum(arr0));
console.log(getSum(arr1));
console.log(getSum(arr2));
console.log(getSum(arr3));

// Exercise 2
// See data.js

// Exercise 3
// Cart has one product
let cart = new Set([4884]);
console.log('Initial cart: ', cart);
// Add to cart
cart.add(3456);
console.log('After add: ', cart);
// Add to cart existing product
cart.add(3456);
console.log('After the same add: ', cart);
// Remove product
cart.delete(4884);
console.log('After delete: ', cart);
