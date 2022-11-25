import { useEffect, useState } from "react";
import cn from 'classnames';

function Feedback() {
    // Fullname
    const [fullname, setFullname] = useState('');
    const [isFullnameError, setIsFullnameError] = useState(false);
    const [fullnameErrorText, setFullnameErrorText] = useState('');

    // Rating
    const [rating, setRating] = useState('');
    const [isRatingError, setIsRatingError] = useState(false);
    const [ratingErrorText, setRatingErrorText] = useState('');

    // Comment
    const [comment, setComment] = useState('');

    // On render use local storage form fields values
    useEffect(() => {
        setFullname(localStorage.getItem('fullname') || '');
        setRating(localStorage.getItem('rating') || '');
        setComment(localStorage.getItem('comment') || '');
    }, []);

    // Functions
    const resetForm = () => {
        // Clear errors
        setIsFullnameError(false);
        setIsRatingError(false);

        // Clear fields
        setFullname('');
        setRating('');
        setComment('');

        // Clear local Storage
        localStorage.setItem('fullname', '');
        localStorage.setItem('rating', '');
        localStorage.setItem('comment', '');
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
            setFullnameErrorText('Вы забыли указать имя и фамилию');
            setIsFullnameError(true);
            return;
        } else if (fullname.trim().length < 2) {
            setFullnameErrorText('Имя не может быть короче 2-х символов');
            setIsFullnameError(true);
            return;
        }

        const ratingNum = +(rating.trim())
        if (rating.trim() === '' || ratingNum > 5 || ratingNum < 1) {
            setRatingErrorText('Оценка должна быть от 1 до 5');
            setIsRatingError(true);
            return;
        }

        resetForm();
    }

    const handleOnFocus = (fieldname) => {
        if (fieldname === 'fullname') {
            setIsFullnameError(false);
        }
        if (fieldname === 'rating') {
            setIsRatingError(false);
        }
    }

    return (
        <div className="feedback">
            <div className="feedback__aside"></div>
            <div className="feedback__main">
                <h5 className="feedback__title font__h5">Добавить свой отзыв</h5>
                <form onSubmit={e => handleOnSubmit(e)} className="feedback__form form" id="form">
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
                            <div className={cn('form__field-error', { hidden: !isFullnameError })}>
                                {fullnameErrorText}
                            </div>
                        </div>
                        <div className="feedback__input">
                            <input
                                className="feedback__rating form__input form__field"
                                type="number"
                                name="rating"
                                placeholder="Оценка"
                                value={rating}
                                onChange={(e) => { handleOnChange('rating', e.target.value) }}
                                onFocus={() => handleOnFocus('rating')}
                            />
                            <div className={cn('form__field-error', { hidden: !isRatingError })}>
                                {ratingErrorText}
                            </div>
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
