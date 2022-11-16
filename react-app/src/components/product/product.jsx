import { useState } from 'react';
import { product } from '../../data/data';
import Sidebar from '../sidebar/sidebar';
import ComparisonChart from '../comparison-chart/comparisonChart';
import Property from '../property/property';
import List from '../list/list';

function Product() {
    const { properties, properties: { description } } = product;
    let [activeRamBtn, setActiveRamBtn] = useState(0);
    let [activeColorBtn, setActiveColorBtn] = useState(2);
    
    return (
        <main className="product container">
            {/* Product header */}
            <div className="product__header">
                {/* Product name */}
                <h2 className="product__name font__h2">{product.name}, {product.colorPicked}</h2>
                {/* Product gallery */}
                <div className="product__gallery">
                    {product.gallery.map(image => {
                        return (
                            <div className="product__img-wrapper" key={image.src}>
                                <img className="product__img" src={image.src} alt={image.alt} />
                            </div>
                        );
                    })}
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
                            {/* Color */}
                            <Property
                                className="product__property"
                                title={properties.color.title}
                                picked={product.colorPicked}
                            >
                                {properties.color.items.map((item, index) => {
                                    const active = index === activeColorBtn;
                                    let activeClass = active ? 'btn_border_selected' : '';
                                    return (
                                        <div
                                            className={`btn btn_border btn_border_img ${activeClass}`}
                                            onClick={() => {
                                                return setActiveColorBtn(index);
                                            }}
                                            key={item.src}
                                        >
                                            <img src={item.src} alt={item.alt} />
                                        </div>
                                    );
                                })}
                            </Property>
                            {/* RAM */}
                            <Property
                                className="product__property"
                                title={properties.ram.title}
                                picked={product.ramPicked}
                            >
                                {properties.ram.items.map((item, index) => {
                                    const active = index === activeRamBtn;
                                    let activeClass = active ? 'btn_border_selected' : '';
                                    return (
                                        <div
                                            className={`btn btn_border ${activeClass}`}
                                            key={item}
                                            onClick={() => {
                                                return setActiveRamBtn(index);
                                            }}
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </Property>
                            {/* Characteristics */}
                            <Property
                                className="product__property"
                                title={properties.charcs.title}
                            >
                                <List items={properties.charcs.items}/>
                            </Property>
                            {/* Description */}
                            <Property
                                className="product__property"
                                title={description.title}
                            >
                                <div className="paragraphs">
                                    <div>
                                        {description.features.map((feature, i) => {
                                            return (i !== description.features.length - 1 ?
                                                <div key={`${feature}`}>{feature}</div> :
                                                <i key={`${feature}`}>{feature}</i>
                                            );
                                        })}
                                    </div>
                                    {properties.description.paragraphs.map(para => {
                                        return <p key={para}>{para}</p>
                                    })}
                                </div>
                            </Property>
                            {/* Model comparison chart */}
                            <Property
                                className="product__property"
                                title={properties.comparison.title}
                            >
                                <ComparisonChart table={properties.comparison.table} />
                            </Property>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="product__reviews reviews">
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
    );
}

export default Product;
