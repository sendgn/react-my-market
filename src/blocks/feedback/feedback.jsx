import Btn from "../btn/btn";

function Feedback() {
    return (
        <div className="feedback">
            <div className="feedback__aside"></div>
            <div className="feedback__main">
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
                    <Btn className="form__submit">
                        Отправить отзыв
                    </Btn>
                </form>
            </div>
        </div>
    );
}

export default Feedback;
