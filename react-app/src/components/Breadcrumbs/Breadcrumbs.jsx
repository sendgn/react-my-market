function Breadcrumbs(props) {
    const { links } = props;

    return (
        <nav className="breadcrumbs container mt-after-header mb-md">
            { links.map((link, index) => {
                return (
                    <div className="breadcrumbs__item" key={index}>
                        <a className="link link_breadcrumbs" href={ link.url }>{ link.name }</a>
                    </div>
                );
            }) }
        </nav>
    );
}

export default Breadcrumbs;
