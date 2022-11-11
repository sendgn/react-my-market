function PageProduct() {
    return (
        <div class="font">
            {/* TOP OF THE PAGE */}
            <div id="top"></div>
             {/* HEADER */}
            <header class="header">
                <div class="header__container container">
                    <div class="header__logo logo">
                        <img class="logo__img" src="../../static/media/img/logo.svg" alt="Логотип" />
                        <h1 class="logo__title font__h1"><span class="colored">Мой</span>Маркет</h1>
                    </div>
                    <div class="header__icons">
                        <div class="header__icon icon">
                            <svg width="44" height="35" viewBox="0 0 44 35" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z" />
                            </svg>
                            <div class="icon__counter">12</div>
                        </div>
                        <div class="header__icon icon">
                            <svg width="42" height="41" viewBox="0 0 42 41" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.720947 0.915039H8.01813H9.72605L10.061 2.5228L11.0138 7.09618H39.3531H41.8122L41.4081 9.42498L39.2618 21.7872L38.9716 23.4584H37.2068H14.4226L15.3062 27.7H37.2068V31.7H13.5983H11.8904L11.5554 30.0922L7.26297 9.4884L9.30586 9.09618L7.26297 9.4884L6.3102 4.91504H0.720947V0.915039ZM11.8471 11.0962L13.5893 19.4584H35.442L36.8937 11.0962H11.8471ZM19.2129 36.6778C19.2129 38.5186 17.6624 40.007 15.7449 40.007C13.8273 40.007 12.2769 38.5186 12.2769 36.6778C12.2769 34.837 13.8273 33.3876 15.7449 33.3876C17.6624 33.3876 19.2129 34.837 19.2129 36.6778ZM32.9162 40.007C34.8337 40.007 36.3841 38.5186 36.3841 36.6778C36.3841 34.837 34.8337 33.3876 32.9162 33.3876C30.9985 33.3876 29.4481 34.837 29.4481 36.6778C29.4481 38.5186 30.9985 40.007 32.9162 40.007Z" />
                            </svg>
                            <div class="icon__counter hidden" id="cart-counter"></div>
                        </div>
                    </div>
                </div>
            </header>
            {/* BREADCRUMBS */}
            <nav class="breadcrumbs container css css_margin_top_after-header css_margin_bottom_sm">
                <div class="breadcrumbs__item"><a class="link link_breadcrumbs" href="/">Электроника</a></div>
                <div class="breadcrumbs__item"><a class="link link_breadcrumbs" href="/">Смартфоны и гаджеты</a></div>
                <div class="breadcrumbs__item"><a class="link link_breadcrumbs" href="/">Мобильные телефоны</a></div>
                <div class="breadcrumbs__item"><a class="link link_breadcrumbs" href="/">Apple</a></div>
            </nav>
            {/* MAIN */}
            <main class="product container">
                {/* Product header */}
                <div class="product__header">
                    {/* Product name */}
                    <h2 class="product__name font__h2">Смартфон Apple iPhone 13, синий</h2>
                    {/* Product gallery */}
                    <div class="product__gallery">
                        <div class="product__img-wrapper">
                            <img class="product__img" src="/img/image-1.webp" alt="iPhone 13 - вид спереди и сзади" />
                        </div>
                        <div class="product__img-wrapper">
                            <img class="product__img" src="/img/image-2.webp" alt="iPhone 13 - вид спереди" />
                        </div>
                        <div class="product__img-wrapper">
                            <img class="product__img" src="/img/image-3.webp" alt="iPhone 13 - вид спереди и сзади, повернут боком" />
                        </div>
                        <div class="product__img-wrapper">
                            <img class="product__img" src="/img/image-4.webp" alt="Камера iPhone 13" />
                        </div>
                        <div class="product__img-wrapper">
                            <img class="product__img" src="/img/image-5.webp" alt="iPhone 13 - вид сзади и спереди" />
                        </div>
                    </div>
                </div>
                {/* Product body */}
                <div class="product__body">
                    {/* Product main */}
                    <div class="product__main">
                        {/* Product info */}
                        <div class="product__info">
                            {/* Properties */}
                            <div class="product__properties">
                                {/* Color property */}
                                <div class="product__property property">
                                    <h5 class="property__heading font__h5">
                                        Цвет товара: <span class="property__value">Синий</span>
                                    </h5>
                                    <div class="property__options">
                                        <div class="property__option property__option_img btn btn_border">
                                            <img src="../../static/media/img/color-1.png" alt="Красный iPhone 13" />
                                        </div>
                                        <div class="property__option property__option_img btn btn_border">
                                            <img src="../../static/media/img/color-2.png" alt="Зелёный iPhone 13" />
                                        </div>
                                        <div class="property__option property__option_img btn btn_border">
                                            <img src="../../static/media/img/color-3.png" alt="Розовый iPhone 13" />
                                        </div>
                                        <div class="property__option property__option_img btn btn_border btn_border_selected">
                                            <img src="../../static/media/img/color-4.png" alt="Бирюзовый iPhone 13" />
                                        </div>
                                        <div class="property__option property__option_img btn btn_border">
                                            <img src="../../static/media/img/color-5.png" alt="Синий iPhone 13" />
                                        </div>
                                        <div class="property__option property__option_img btn btn_border">
                                            <img src="../../static/media/img/color-6.png" alt="Чёрный iPhone 13" />
                                        </div>
                                    </div>
                                </div>
                                {/* RAM property */}
                                <div class="product__property property">
                                    <h5 class="property__heading font__h5">
                                        Конфигурация памяти: <span class="property__value">128 ГБ</span>
                                    </h5>
                                    <div class="property__options">
                                        <div class="property__option btn btn_border btn_border_selected">128 ГБ</div>
                                        <div class="property__option btn btn_border">256 ГБ</div>
                                        <div class="property__option btn btn_border">512 ГБ</div>
                                    </div>
                                </div>
                                {/* Characteristics property */}
                                <div class="product__property property">
                                    <h5 class="property__heading font__h5">Характеристики товара</h5>
                                    <ul class="property__list list">
                                        <li class="list__item list__item_property">
                                            <span class="list__item-content list__item-content_property">Экран: <b>6.1</b></span>
                                        </li>
                                        <li class="list__item list__item_property">
                                            <span class="list__item-content list__item-content_property">Встроенная память: <b>128 ГБ</b></span>
                                        </li>
                                        <li class="list__item list__item_property">
                                            <span class="list__item-content list__item-content_property">Операционная система: <b>iOS 15</b></span>
                                        </li>
                                        <li class="list__item list__item_property">
                                            <span class="list__item-content list__item-content_property">Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></span>
                                        </li>
                                        <li class="list__item list__item_property">
                                            <span class="list__item-content list__item-content_property">
                                                Процессор: <a class="link link_property_list" href="https://ru.wikipedia.org/wiki/Apple_
                                                A15" target="_blank">Apple A15 Bionic</a>
                                            </span>
                                        </li>
                                        <li class="list__item list__item_property">
                                            <span class="list__item-content list__item-content_property">Вес: <b>173 г</b></span>
                                        </li>
                                    </ul>
                                </div>
                                {/* Description */}
                                <div class="product__description property">
                                    <h5 class="property__heading font__h5">Описание</h5>
                                    <div class="property__text">
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
                                <div class="product__comparison property">
                                    <h5 class="property__heading font__h5">Сравнение моделей</h5>
                                    <div class="comparison-chart">
                                        {/* Chart header */}
                                        <div class="comparison-chart__header">
                                            <div class="comparison-chart__row">
                                                <div class="comparison-chart__col">Модель</div>
                                                <div class="comparison-chart__col">Вес</div>
                                                <div class="comparison-chart__col">Высота</div>
                                                <div class="comparison-chart__col">Ширина</div>
                                                <div class="comparison-chart__col">Толщина</div>
                                                <div class="comparison-chart__col">Чип</div>
                                                <div class="comparison-chart__col">Объем памяти</div>
                                                <div class="comparison-chart__col">Аккумулятор</div>
                                            </div>
                                        </div>
                                        {/* Chart body */}
                                        <div class="comparison-chart__body">
                                            <div class="comparison-chart__row">
                                                <div class="comparison-chart__col">iPhone 11</div>
                                                <div class="comparison-chart__col">194 г</div>
                                                <div class="comparison-chart__col">150.9 мм</div>
                                                <div class="comparison-chart__col">75.7 мм</div>
                                                <div class="comparison-chart__col">8.3 мм</div>
                                                <div class="comparison-chart__col">A13 Bioniс</div>
                                                <div class="comparison-chart__col">до 128 Гб</div>
                                                <div class="comparison-chart__col">до 17 часов</div>
                                            </div>
                                            <div class="comparison-chart__row">
                                                <div class="comparison-chart__col">iPhone 12</div>
                                                <div class="comparison-chart__col">164 г</div>
                                                <div class="comparison-chart__col">146.7 мм</div>
                                                <div class="comparison-chart__col">71.5 мм</div>
                                                <div class="comparison-chart__col">7.4 мм</div>
                                                <div class="comparison-chart__col">A14 Bioniс</div>
                                                <div class="comparison-chart__col">до 256 Гб</div>
                                                <div class="comparison-chart__col">до 19 часов</div>
                                            </div>
                                            <div class="comparison-chart__row">
                                                <div class="comparison-chart__col">iPhone 13</div>
                                                <div class="comparison-chart__col">174 г</div>
                                                <div class="comparison-chart__col">146.7 мм</div>
                                                <div class="comparison-chart__col">71.5 мм</div>
                                                <div class="comparison-chart__col">7.65 мм</div>
                                                <div class="comparison-chart__col">A15 Bioniс</div>
                                                <div class="comparison-chart__col">до 512 Гб</div>
                                                <div class="comparison-chart__col">до 19 часов</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Reviews */}
                        <div class="product__reviews reviews">
                            {/* Reviews title */}
                            <div class="reviews__title">
                                <h3 class="reviews__heading font__h3">Отзывы</h3>
                                <h3 class="reviews__count font__h3">425</h3>
                            </div>
                            {/* Reviews items */}
                            <div class="reviews__items">
                                {/* Review */}
                                <div class="product__review reviews__item review feedback">
                                    <div class="feedback__aside">
                                        {/* Review image */}
                                        <img class="review__img" src="../../static/media/img/review-1.jpeg" alt="Фото рецензента" />
                                    </div>
                                    {/* Review info */}
                                    <div class="review__info">
                                        <div class="review__title">
                                            {/* Reviewer name */}
                                            <h4 class="review__name font__h4">Марк Г.</h4>
                                            {/* Review rating */}
                                            <div class="review__rating rating">
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Review details */}
                                        <div class="review__details">
                                            <p class="review__detail"><b>Опыт использования:</b> менее месяца</p>
                                            <p class="review__detail"><b>Достоинства:</b><br/> это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.</p>
                                            <p class="review__detail"><b>Недостатки:</b><br/> к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Divider */}
                                <div class="feedback">
                                    <div class="feedback__aside"></div>
                                    <div class="reviews__divider"></div>
                                </div>
                                {/* Review */}
                                <div class="product__review reviews__item review feedback">
                                    <div class="feedback__aside">
                                        {/* Review image */}
                                        <img class="review__img" src="../../static/media/img/review-2.jpeg" alt="Фото рецензента" />
                                    </div>
                                    {/* Review info */}
                                    <div class="review__info">
                                        <div class="review__title">
                                            {/* Reviewer name */}
                                            <h4 class="review__name font__h4">Валерий Коваленко</h4>
                                            {/* Review rating */}
                                            <div class="review__rating rating">
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star.svg" alt="Полная звезда" />
                                                </div>
                                                <div class="rating__img-wrapper">
                                                    <img class="rating__img" src="../../static/media/img/star-empty.svg" alt="Пустая звезда" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Review details */}
                                        <div class="review__details">
                                            <p class="review__detail"><b>Опыт использования:</b> менее месяца</p>
                                            <p class="review__detail"><b>Достоинства:</b><br/> OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго</p>
                                            <p class="review__detail"><b>Недостатки:</b><br/> Плохая ремонтопригодность</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Feedback */}
                        <div class="feedback feedback_add-review">
                            <div class="feedback__aside"></div>
                            <div class="feedback__main property">
                                <h5 class="feedback__title font__h5">Добавить свой отзыв</h5>
                                <form class="feedback__form form" id="form">
                                    <div class="feedback__inputs form__row">
                                        <div class="feedback__input">
                                            <input
                                                class="feedback__fullname form__input form__field"
                                                type="text"
                                                name="fullname"
                                                placeholder="Имя и фамилия"
                                                id="fullname"
                                            />
                                            <div class="form__field-error hidden"></div>
                                        </div>
                                        <div class="feedback__input">
                                            <input
                                                class="feedback__rating form__input form__field"
                                                type="number"
                                                name="rating"
                                                min="1"
                                                max="5"
                                                placeholder="Оценка"
                                                id="rating"
                                            />
                                            <div class="form__field-error hidden"></div>
                                        </div>    
                                    </div>
                                    <div class="feedback__input">
                                        <textarea class="feedback__textarea form__textarea form__field" name="feedback" placeholder="Текст отзыва" id="comment"></textarea>
                                        <div class="form__field-error hidden"></div>
                                    </div>
                                    <div class="form__submit btn">Отправить отзыв</div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div class="product__sidebar">
                        {/* Product order card */}
                        <div class="product__order card">
                            <div class="card__content">
                                <div class="card__icons">
                                    <svg class="card__icon icon" width="44" height="35" viewBox="0 0 44 35" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z" />
                                    </svg>
                                </div>
                                <div class="product__price price">
                                    <div class="price__old">
                                        <s class="price__former">75 990₽</s>
                                        <span class="price__discount badge">-8%</span>
                                    </div>
                                    <div class="price__total">67 990₽</div>
                                </div>
                                <div class="product__delivery">
                                    <p>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></p>
                                    <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>
                                </div>
                                <div class="btn btn_lg" id="add-to-cart-btn">
                                    <span class="btn__text btn__text_cart">Добавить в корзину</span>
                                </div>
                            </div>
                        </div>
                        {/* Advertisement */}
                        <div class="ads">
                            <div class="ads__title">Реклама</div>
                            <div class="ads__content">
                                <iframe class="iframe" src="./ads.html">
                                <p class="iframe__placeholder">Произошла ошибка при загрузке контента.</p>
                                </iframe>
                                <iframe class="iframe" src="./ads.html">
                                    <p class="iframe__placeholder">Произошла ошибка при загрузке контента.</p>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* FOOTER */}
            <footer class="footer">
                <div class="footer__content container">
                    <div class="footer__info">
                        <p><b>&copy; ООО «<span class="colored">Мой</span>Маркет», 2018-2022.</b></p>
                        <p>Для уточнения информации звоните по номеру <a class="link" href="tel:79000000000">+7 900 000 0000</a>,</p>
                        <p>а предложения по сотрудничеству отправляйте на почту <a class="link" href="mailto:partner@mymarket.com">partner@mymarket.com</a></p>
                    </div>
                    <a class="footer__to-top link" href="#top">Наверх</a>
                </div>
            </footer>
        </div>
    );
}

export default PageProduct;