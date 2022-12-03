import cn from 'classnames';

function Property(props) {
    const { title, picked, children, className } = props;
    return (
        <div className={cn('property', className)}>
            <h5 className="property__heading font__h5">
                {title} {picked && <span className="property__value">{picked}</span>}
            </h5>
            <div className="property__body">
                {children}
            </div>
        </div>
    );
}

export default Property;