function Breadcrumbs(props) {
    const { items } = props;

    return (
        <nav className="breadcrumbs container mt-after-header mb-md">
            {items.map(item => {
                return (
                    <div className="breadcrumbs__item" key={item.url}>
                        <a className="link link_breadcrumbs" href={item.url}>{item.name}</a>
                    </div>
                );
            })}
        </nav>
    );
}

export default Breadcrumbs;
