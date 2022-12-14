import Link from '../link/link';

function Breadcrumbs(props) {
    const { items } = props;

    return (
        <nav className="breadcrumbs container mt-after-header mb-md">
            {items.map(item => {
                return (
                    <div className="breadcrumbs__item" key={item.url}>
                        <Link className="link_breadcrumbs" href={item.url}>{item.name}</Link>
                    </div>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;
