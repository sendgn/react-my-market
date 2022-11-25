import { useState } from "react";

function Feedback() {
    // Fullname
    const [fullname, setFullname] = useState(localStorage.getItem('fullname') || '');
    const [fullnameError, setFullnameError] = useState(null);

    // Rating
    const [rating, setRating] = useState(localStorage.getItem('rating') || '');
    const [ratingError, setRatingError] = useState(null);

    // Comment
    const [comment, setComment] = useState(localStorage.getItem('comment') || '');

    // Functions
    const resetForm = () => {
        // Clear errors
        setFullnameError(null);
        setRatingError(null);

        // Clear fields
        setFullname('');
        setRating('');
        setComment('');

        // Clear local Storage
        localStorage.removeItem('fullname');
        localStorage.removeItem('rating');
        localStorage.removeItem('comment');
    }

    // Handlers
    const handleOnChange = (fieldname, value) => {
        if (fieldname === 'fullname') {
            setFullname(value);
            localStorage.setItem('fullname', value);
        } else if (fieldname === 'rating') {
            setRating(value);
            localStorage.setItem('rating', value);
        } else if (fieldname === 'comment') {
            setComment(value);
            localStorage.setItem('comment', value);
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();        

        if (fullname.trim() === '') {
            setFullnameError('Вы забыли указать имя и фамилию');
            return;
        } else if (fullname.trim().length < 2) {
            setFullnameError('Имя не может быть короче 2-х символов');
            return;
        }

        const ratingNum = +(rating.trim())
        if (rating.trim() === '' || ratingNum > 5 || ratingNum < 1 || Number.isNaN(ratingNum)) {
            setRatingError('Оценка должна быть от 1 до 5');
            return;
        }

        resetForm();
    }

    const handleOnFocus = (fieldname) => {
        if (fieldname === 'fullname') {
            setFullnameError(null);
        }
        if (fieldname === 'rating') {
            setRatingError(null);
        }
    }

    return (
        <div className="feedback">
            <div className="feedback__aside"></div>
            <div className="feedback__main">
                <h5 className="feedback__title font__h5">Добавить свой отзыв</h5>
                <form onSubmit={e => handleOnSubmit(e)} className="feedback__form form">
                    <div className="feedback__inputs form__row">
                        <div className="feedback__input">
                            <input
                                className="feedback__fullname form__input form__field"
                                type="text"
                                name="fullname"
                                placeholder="Имя и фамилия"
                                value={fullname}
                                onChange={(e) => { handleOnChange('fullname', e.target.value) }}
                                onFocus={() => handleOnFocus('fullname')}
                            />
                            {fullnameError && <div className="form__field-error">{fullnameError}</div>}
                        </div>
                        <div className="feedback__input">
                            <input
                                className="feedback__rating form__input form__field"
                                type="text"
                                name="rating"
                                placeholder="Оценка"
                                value={rating}
                                onChange={(e) => { handleOnChange('rating', e.target.value) }}
                                onFocus={() => handleOnFocus('rating')}
                            />
                            {ratingError && <div className="form__field-error">{ratingError}</div>}
                        </div>    
                    </div>
                    <div className="feedback__input">
                        <textarea
                            className="feedback__textarea form__textarea form__field"
                            name="comment"
                            placeholder="Текст отзыва"
                            value={comment}
                            onChange={(e) => { handleOnChange('comment', e.target.value) }}
                        >
                        </textarea>
                    </div>
                    <button className="btn form__submit">Отправить отзыв</button>
                </form>
            </div>
        </div>
    );
}

export default Feedback;
