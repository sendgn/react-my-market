import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Sidebar from '../Sidebar/Sidebar';
import ComparisonChart from '../ComparisonChart/ComparisonChart';

function PageProduct() {
    return (
        <>
            {/* TOP OF THE PAGE */}
            <div id="top"></div>

            <Breadcrumbs links={ [ {
                    name: 'Электроника',
                    url: '/',
                }, {
                    name: 'Смартфоны и гаджеты',
                    url: '/',
                }, {
                    name: 'Мобильные телефоны',
                    url: '/',
                }, {
                    name: 'Apple',
                    url: '/',
                } 
            ] } />

            {/* MAIN */}
            <main className="product container">
                {/* Product header */}
                <div className="product__header">
                    {/* Product name */}
                    <h2 className="product__name font__h2">Смартфон Apple iPhone 13, синий</h2>
                    {/* Product gallery */}
                    <div className="product__gallery">
                        <div className="product__img-wrapper">
                            <img className="product__img" src="/img/image-1.webp" alt="iPhone 13 - вид спереди и сзади" />
                        </div>
                        <div className="product__img-wrapper">
                            <img className="product__img" src="/img/image-2.webp" alt="iPhone 13 - вид спереди" />
                        </div>
                        <div className="product__img-wrapper">
                            <img className="product__img" src="/img/image-3.webp" alt="iPhone 13 - вид спереди и сзади, повернут боком" />
                        </div>
                        <div className="product__img-wrapper">
                            <img className="product__img" src="/img/image-4.webp" alt="Камера iPhone 13" />
                        </div>
                        <div className="product__img-wrapper">
                            <img className="product__img" src="/img/image-5.webp" alt="iPhone 13 - вид сзади и спереди" />
                        </div>
                    </div>
                </div>
                {/* Product body */}
                <div className="product__body">
                    {/* Product main */}
                    <div className="product__main">
                        {/* Product info */}
                        <div className="product__info">
                            {/* Properties */}
                            <div className="product__properties">
                                {/* Color property */}
                                <div className="product__property property">
                                    <h5 className="property__heading font__h5">
                                        Цвет товара: <span className="property__value">Синий</span>
                                    </h5>
                                    <div className="property__options">
                                        <div className="property__option property__option_img btn btn_border">
                                            <img src="/img/color-1.png" alt="Красный iPhone 13" />
                                        </div>
                                        <div className="property__option property__option_img btn btn_border">
                                            <img src="/img/color-2.png" alt="Зелёный iPhone 13" />
                                        </div>
                                        <div className="property__option property__option_img btn btn_border">
                                            <img src="/img/color-3.png" alt="Розовый iPhone 13" />
                                        </div>
                                        <div className="property__option property__option_img btn btn_border btn_border_selected">
                                            <img src="/img/color-4.png" alt="Бирюзовый iPhone 13" />
                                        </div>
                                        <div className="property__option property__option_img btn btn_border">
                                            <img src="/img/color-5.png" alt="Синий iPhone 13" />
                                        </div>
                                        <div className="property__option property__option_img btn btn_border">
                                            <img src="/img/color-6.png" alt="Чёрный iPhone 13" />
                                        </div>
                                    </div>
                                </div>
                                {/* RAM property */}
                                <div className="product__property property">
                                    <h5 className="property__heading font__h5">
                                        Конфигурация памяти: <span className="property__value">128 ГБ</span>
                                    </h5>
                                    <div className="property__options">
                                        <div className="property__option btn btn_border btn_border_selected">128 ГБ</div>
                                        <div className="property__option btn btn_border">256 ГБ</div>
                                        <div className="property__option btn btn_border">512 ГБ</div>
                                    </div>
                                </div>
                                {/* Characteristics property */}
                                <div className="product__property property">
                                    <h5 className="property__heading font__h5">Характеристики товара</h5>
                                    <ul className="property__list list">
                                        <li className="list__item list__item_property">
                                            <span className="list__item-content list__item-content_property">Экран: <b>6.1</b></span>
                                        </li>
                                        <li className="list__item list__item_property">
                                            <span className="list__item-content list__item-content_property">Встроенная память: <b>128 ГБ</b></span>
                                        </li>
                                        <li className="list__item list__item_property">
                                            <span className="list__item-content list__item-content_property">Операционная система: <b>iOS 15</b></span>
                                        </li>
                                        <li className="list__item list__item_property">
                                            <span className="list__item-content list__item-content_property">Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></span>
                                        </li>
                                        <li className="list__item list__item_property">
                                            <span className="list__item-content list__item-content_property">
                                                Процессор: &nbsp;
                                                    <a
                                                        className="link link_property_list"
                                                        href="https://ru.wikipedia.org/wiki/Apple_A15"
                                                        rel="noreferrer noopener"
                                                        target="_blank"
                                                    >
                                                        Apple A15 Bionic
                                                    </a>
                                            </span>
                                        </li>
                                        <li className="list__item list__item_property">
                                            <span className="list__item-content list__item-content_property">Вес: <b>173 г</b></span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Description */}
                                <div className="product__description property">
                                    <h5 className="property__heading font__h5">Описание</h5>
                                    <div className="property__text">
                                        <p>
                                            Наша самая совершенная система двух камер.<br/>
                                            Особый взгляд на прочность дисплея.<br/>
                                            Чип, с которым всё супербыстро.<br/>
                                            Аккумулятор держится заметно дольше.<br/>
                                            <i>iPhone 13 - сильный мира всего.</i>
                                        </p>
                                        <p>Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.</p>
                                        <p>Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.</p>
                                        <p>Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.</p>
                                    </div>
                                </div>
                                {/* Model comparison chart */}
                                <div className="product__comparison property">
                                    <h5 className="property__heading font__h5">Сравнение моделей</h5>
                                    <ComparisonChart table={{
                                        header: [ 'Модель', 'Вес', 'Высота', 'Ширина', 'Толщина', 'Чип', 'Объем памяти', 'Аккумулятор' ],
                                        rows: [
                                            [ 'iPhone 11', '194 г', '150.9 мм', '75.7 мм', '8.3 мм', 'A13 Bioniс', 'до 128 Гб', 'до 17 часов' ],
                                            [ 'iPhone 12', '164 г', '146.7 мм', '71.5 мм', '7.4 мм', 'A14 Bioniс', 'до 256 Гб', 'до 19 часов' ],
                                            [ 'iPhone 13', '174 г', '146.7 мм', '71.5 мм', '7.65 мм', 'A15 Bioniс', 'до 512 Гб', 'до 19 часов' ],
                                        ]
                                    }} />
                                </div>
                            </div>
                        </div>
                        {/* Reviews */}
                        <div className="reviews">
                            {/* Reviews title */}
                            <div className="reviews__title">
                                <h3 className="reviews__heading font__h3">Отзывы</h3>
                                <h3 className="reviews__count font__h3">425</h3>
                            </div>
                            {/* Reviews items */}
                            <div className="reviews__items">
                                {/* Review */}
                                <div className="product__review reviews__item review feedback">
                                    <div className="feedback__aside">
                                        {/* Review image */}
                                        <img className="review__img" src="/img/review-1.jpeg" alt="Фото рецензента" />
                                    </div>
                                    {/* Review info */}
                                    <div className="review__info">
                                        <div className="review__title">
                                            {/* Reviewer name */}
                                            <h4 className="review__name font__h4">Марк Г.</h4>
                                            {/* Review rating */}
                                            <div className="review__rating rating">
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Review details */}
                                        <div className="review__details">
                                            <p className="review__detail"><b>Опыт использования:</b> менее месяца</p>
                                            <p className="review__detail"><b>Достоинства:</b><br/> это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.</p>
                                            <p className="review__detail"><b>Недостатки:</b><br/> к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Divider */}
                                <div className="feedback">
                                    <div className="feedback__aside"></div>
                                    <div className="reviews__divider"></div>
                                </div>
                                {/* Review */}
                                <div className="reviews__item review feedback">
                                    <div className="feedback__aside">
                                        {/* Review image */}
                                        <img className="review__img" src="/img/review-2.jpeg" alt="Фото рецензента" />
                                    </div>
                                    {/* Review info */}
                                    <div className="review__info">
                                        <div className="review__title">
                                            {/* Reviewer name */}
                                            <h4 className="review__name font__h4">Валерий Коваленко</h4>
                                            {/* Review rating */}
                                            <div className="review__rating rating">
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div className="rating__img-wrapper">
                                                    <img className="rating__img" src="/img/star-empty.svg" alt="Пустая звезда" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Review details */}
                                        <div className="review__details">
                                            <p className="review__detail"><b>Опыт использования:</b> менее месяца</p>
                                            <p className="review__detail"><b>Достоинства:</b><br/> OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго</p>
                                            <p className="review__detail"><b>Недостатки:</b><br/> Плохая ремонтопригодность</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Feedback */}
                        <div className="feedback feedback_add-review">
                            <div className="feedback__aside"></div>
                            <div className="feedback__main property">
                                <h5 className="feedback__title font__h5">Добавить свой отзыв</h5>
                                <form className="feedback__form form" id="form">
                                    <div className="feedback__inputs form__row">
                                        <div className="feedback__input">
                                            <input
                                                className="feedback__fullname form__input form__field"
                                                type="text"
                                                name="fullname"
                                                placeholder="Имя и фамилия"
                                                id="fullname"
                                            />
                                            <div className="form__field-error hidden"></div>
                                        </div>
                                        <div className="feedback__input">
                                            <input
                                                className="feedback__rating form__input form__field"
                                                type="number"
                                                name="rating"
                                                min="1"
                                                max="5"
                                                placeholder="Оценка"
                                                id="rating"
                                            />
                                            <div className="form__field-error hidden"></div>
                                        </div>    
                                    </div>
                                    <div className="feedback__input">
                                        <textarea className="feedback__textarea form__textarea form__field" name="feedback" placeholder="Текст отзыва" id="comment"></textarea>
                                        <div className="form__field-error hidden"></div>
                                    </div>
                                    <div className="form__submit btn">Отправить отзыв</div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <Sidebar />
                </div>
            </main>
        </>
    );
}

export default PageProduct;
