import { breadcrumbsItems } from '../../data/data';
import Breadcrumbs from '../../blocks/breadcrumbs/breadcrumbs';
import Product from '../../blocks/product/product';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';

function PageProduct() {
    return (
        <>
            <Header id="top" />
            <Breadcrumbs items={breadcrumbsItems} />
            <Product />
            <Footer />
        </>
    );
}

export default PageProduct;
