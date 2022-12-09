import Link from '../link/link';

function List(props) {
    const { items } = props;
    return (
        <ul className="list">
            {items.map(item => {
                return (
                    <li className="list__item" key={item.title}>
                        <span className="list__item-content">
                            {item.title}
                            {item.elements.map((el, i) => {
                                return (
                                    el.isLink ? 
                                        <Link
                                            href="https://ru.wikipedia.org/wiki/Apple_A15"
                                            rel="noreferrer noopener"
                                            target="_blank"
                                            key={`link-${el.value}`}
                                        >
                                            <b>{el.value}</b>
                                        </Link> :
                                        <b key={el.value}>
                                            {el.value}{i === item.elements.length - 1 ? '' : ', '}
                                        </b>
                                );
                            })}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default List;
