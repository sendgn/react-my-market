
// Breadcrumbs
export const breadcrumbsItems = [
    {
        url: '/electronics',
        name: 'Электроника',
    },
    {
        url: '/gadgets',
        name: 'Смартфоны и гаджеты',
    },
    {
        url: '/phones',
        name: 'Мобильные телефоны',
    },
    {
        url: '/apple',
        name: 'Apple',
    }
]

// Product
export const product = {
    name: 'Смартфон Apple iPhone 13',
    colorPicked: 'синий',
    ramPicked: '128Гб',
    gallery: [
        {
            src: '/img/image-1.webp',
            alt: 'iPhone 13 - вид спереди и сзади'
        },
        {
            src: '/img/image-2.webp',
            alt: 'iPhone 13 - вид спереди'
        },
        {
            src: '/img/image-3.webp',
            alt: 'iPhone 13 - вид спереди и сзади, повернут боком'
        },
        {
            src: '/img/image-4.webp',
            alt: 'Камера iPhone 13'
        },
        {
            src: '/img/image-5.webp',
            alt: 'iPhone 13 - вид сзади и спереди'
        },
    ],
    properties: {
        color: {
            title: 'Цвет товара:',
            items: [
                {
                    src: '/img/color-1.png',
                    alt: 'Красный iPhone 13',
                },
                {
                    src: '/img/color-2.png',
                    alt: 'Зеленый iPhone 13',
                },
                {
                    src: '/img/color-3.png',
                    alt: 'Розовый iPhone 13',
                },
                {
                    src: '/img/color-4.png',
                    alt: 'Бирюзовый iPhone 13',
                },
                {
                    src: '/img/color-5.png',
                    alt: 'Синий iPhone 13',
                },
                {
                    src: '/img/color-6.png',
                    alt: 'Черный iPhone 13',
                },
            ],
        },
        ram: {
            title: 'Конфигурация памяти:',
            items: [
                '128 ГБ',
                '256 ГБ',
                '512 ГБ',
            ],
        },
        charcs: {
            title: 'Характеристики товара',
            items: [
                {
                    title: 'Экран: ',
                    elements: [
                        {
                            value: '6.1',
                            isLink: false,
                        }
                    ],
                },
                {
                    title: 'Встроенная память: ',
                    elements: [
                        {
                            value: '128Гб',
                            isLink: false,
                        }
                    ],
                },
                {
                    title: 'Операционная система: ',
                    elements: [
                        {
                            value: 'iOS 15',
                            isLink: false,
                        },
                    ],
                },
                {
                    title: 'Беспроводные интерфейсы: ',
                    elements: [
                        {
                            value: 'NFC',
                            isLink: false,
                        },
                        {
                            value: 'Bluetooth',
                            isLink: false,
                        },
                        {
                            value: 'Wi-Fi',
                            isLink: false,
                        },
                    ],
                },
                {
                    title: 'Процессор: ',
                    elements: [
                        {
                            value: 'Apple A15 Bionic',
                            isLink: true,
                        },
                    ],
                },
                {
                    title: 'Вес: ',
                    elements: [
                        {
                            value: '173 г',
                            isLink: false,
                        },
                    ],
                },
            ],
        },
        description: {
            title: 'Описание',
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
        comparison: {
            title: 'Сравнение моделей',
            table: {
                header: [ 'Модель', 'Вес', 'Высота', 'Ширина', 'Толщина', 'Чип', 'Объем памяти', 'Аккумулятор' ],
                rows: [
                    [ 'iPhone 11', '194 г', '150.9 мм', '75.7 мм', '8.3 мм', 'A13 Bioniс', 'до 128 Гб', 'до 17 часов' ],
                    [ 'iPhone 12', '164 г', '146.7 мм', '71.5 мм', '7.4 мм', 'A14 Bioniс', 'до 256 Гб', 'до 19 часов' ],
                    [ 'iPhone 13', '174 г', '146.7 мм', '71.5 мм', '7.65 мм', 'A15 Bioniс', 'до 512 Гб', 'до 19 часов' ],
                ],
            },
        },
    },
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
    currentPrice: '67 990₽',
    oldPrice: '75 990₽',
    discount: '8%',
}

// Reviews
export const reviews = {
    title: 'Отзывы',
    count: '425',
    items: [
        {
            author: {
                id: 0,
                name: 'Марк Г.',
                img: '/img/review-1.jpeg',
                alt: 'Фото рецензента'
            },
            rating: 5,
            details: [
                {
                    title: 'Опыт использования: ',
                    value: 'менее месяца',
                },
                {
                    title: 'Достоинства: ',
                    value: 'это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.',
                },
                {
                    title: 'Недостатки: ',
                    value: 'к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное',
                },                    
            ],
        },
        {
            author: {
                id: 1,
                name: 'Валерий Коваленко',
                img: '/img/review-2.jpeg',
                alt: 'Фото рецензента'
            },
            rating: 4,
            details: [
                {
                    title: 'Опыт использования: ',
                    value: 'менее месяца',
                },
                {
                    title: 'Достоинства: ',
                    value: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
                },
                {
                    title: 'Недостатки: ',
                    value: 'Плохая ремонтопригодность',
                },  
            ],
        },
    ],
}
