function Rating(props) {
    const { cn, score } = props;
    const arrScore = Array(5).fill(1).fill(0, score);

    return (
        <div className={`${cn} rating`}>
            {arrScore.map((item, index) => {
                return (
                    <div className="rating__img-wrapper" key={index}>
                        {item ?
                            <img className="rating__img" src="/img/star.svg" alt="Полная звезда" /> :
                            <img className="rating__img" src="/img/star-empty.svg" alt="Пустая звезда" />
                        }
                    </div> 
                );
            })}
        </div>
    );
}

export default Rating;
