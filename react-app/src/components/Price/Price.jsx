import Badge from '../badge/badge';

function Price(props) {
    return (
        <div className="price">
            <div className="price__old">
                <s className="price__former">{ props.old }</s>
                <Badge value="-8%" />
            </div>
            <div className="price__total">{ props.total }</div>
        </div>
    );
}

export default Price;