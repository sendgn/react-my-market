'use strict';

let product = {
    name: 'Смартфон Apple iPhone 13, синий',
    colorPicked: 'Синий',
    ramPicked: '128Гб',
    images: [
        '../../static/media/img/image-1.webp',
        '../../static/media/img/image-2.webp',
        '../../static/media/img/image-3.webp',
        '../../static/media/img/image-4.webp',
        '../../static/media/img/image-5.webp',
    ],
    colors: [
        {
            name: 'Красный',
            url: '../../static/media/img/color-1.png',
        },
        {
            name: 'Зеленый',
            url: '../../static/media/img/color-2.png',
        },
        {
            name: 'Розовый',
            url: '../../static/media/img/color-3.png',
        },
        {
            name: 'Бирюзовый',
            url: '../../static/media/img/color-4.png',
        },
        {
            name: 'Синий',
            url: '../../static/media/img/color-5.png',
        },
        {
            name: 'Черный',
            url: '../../static/media/img/color-6.png',
        },
    ],
    ram: [
        '128 ГБ',
        '256 ГБ',
        '512 ГБ',
    ],
    delivery: [
        {
            name: 'Самовывоз',
            date: 'четверг, 1 сентября',
            cost: 0,
        },
        {
            name: 'Курьером',
            date: 'четверг, 1 сентября',
            cost: 0,
        },
    ],
    characteristics: {
        screen: '6.1',
        ram: '128Гб',
        os: 'iOS 15',
        wireless: ['NFC', 'Bluetooth', 'Wi-Fi'],
        cpu: 'Apple A15 Bionic',
        weight: '173 г',
    },
    description: {
        features: [
            'Наша самая совершенная система двух камер.',
            'Особый взгляд на прочность дисплея.',
            'Чип, с которым всё супербыстро.',
            'Аккумулятор держится заметно дольше.',
            'iPhone 13 - сильный мира всего.',
        ],
        paragraphs: [
            'Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.',
            'Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.',
            'Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.',
        ],
    },
    currentPrice: '67 990₽',
    oldPrice: '75 990₽',
    discount: '8%',
};

let reviews = [
    {
        author: {
            name: 'Марк Г.',
            img: '../../static/media/img/review-1.jpeg',
        },
        rating: 5,
        details: {
            exp: 'менее месяца',
            pros: 'это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.',
            cons: 'к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное',
        },
    },
    {
        author: {
            name: 'Валерий Коваленко',
            img: '../../static/media/img/review-2.jpeg',
        },
        rating: 4,
        details: {
            exp: 'менее месяца',
            pros: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
            cons: 'Плохая ремонтопригодность',
        },
    },
];