import classNames from 'classnames';
import Rating from '../rating/rating';

function Review(props) {
    const { className, info: { author, rating, details }  } = props;
    
    return (
        <div className={classNames('review', {
            [className]: className || ''
        })}>
            <div className="review__aside">
                <img className="review__img" src={author.img} alt={author.alt} />
            </div>
            {/* Review main */}
            <div className="review__main">
                <div className="review__mobile-header">
                    <img className="review__img review__img_mobile" src={author.img} alt={author.alt} />
                    <div className="review__mobile-title">
                        <h4 className="review__name font__h4">{author.name}</h4>
                        <Rating className="review__rating" score={rating} />
                    </div>
                </div>
                <div className="review__title">
                    <h4 className="review__name font__h4">{author.name}</h4>
                    <Rating className="review__rating" score={rating} />
                </div>
                {/* Review details */}
                <div className="review__details">
                    {details.map((detail, index) => {
                        return (
                            <p
                                className="review__detail"
                                key={detail.value}
                            >
                                <b>{detail.title}</b>
                                {index !== 0 && <br />}
                                {detail.value}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Review;