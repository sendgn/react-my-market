
// Breadcrumbs
export const breadcrumbsItems = [
    {
        id: 0,
        name: 'Электроника',
        url: '/',
    },
    {
        id: 1,
        name: 'Смартфоны и гаджеты',
        url: '/',
    },
    {
        id: 2,
        name: 'Мобильные телефоны',
        url: '/',
    },
    {
        id: 3,
        name: 'Apple',
        url: '/',
    }
]

// Product
export const product = {
    name: 'Смартфон Apple iPhone 13',
    colorPicked: 'синий',
    ramPicked: '128Гб',
    images: [
        {
            id: 0,
            url: '/img/image-1.webp',
            alt: 'iPhone 13 - вид спереди и сзади'
        },
        {
            id: 1,
            url: '/img/image-2.webp',
            alt: 'iPhone 13 - вид спереди'
        },
        {
            id: 2,
            url: '/img/image-3.webp',
            alt: 'iPhone 13 - вид спереди и сзади, повернут боком'
        },
        {
            id: 3,
            url: '/img/image-4.webp',
            alt: 'Камера iPhone 13'
        },
        {
            id: 4,
            url: '/img/image-5.webp',
            alt: 'iPhone 13 - вид сзади и спереди'
        },
    ],
    colors: [
        {
            id: 0,
            alt: 'Красный iPhone 13',
            url: '/img/color-1.png',
        },
        {
            id: 1,
            alt: 'Зеленый iPhone 13',
            url: '/img/color-2.png',
        },
        {
            id: 2,
            alt: 'Розовый iPhone 13',
            url: '/img/color-3.png',
        },
        {
            id: 3,
            alt: 'Бирюзовый iPhone 13',
            url: '/img/color-4.png',
        },
        {
            id: 4,
            alt: 'Синий iPhone 13',
            url: '/img/color-5.png',
        },
        {
            id: 5,
            alt: 'Черный iPhone 13',
            url: '/img/color-6.png',
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
}

// Reviews
export const reviews = [
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
]