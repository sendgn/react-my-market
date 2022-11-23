import Review from '../review/review';

function Reviews(props) {
    const { title, count, items } = props; 

    return (
        <div className="reviews">
            {/* Title */}
            <div className="reviews__title">
                <h3 className="reviews__heading font__h3">{title}</h3>
                <h3 className="reviews__count font__h3">{count}</h3>
            </div>
            {/* Items */}
            <div className="reviews__items">
                {items.map((item) => {
                    return <Review className="reviews__item" info={item} key={item.author.id}/>;
                })}
            </div>
        </div>
    );
}

export default Reviews;