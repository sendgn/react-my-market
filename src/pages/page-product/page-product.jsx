import { breadcrumbsItems } from '../../data/data';
import useImportScript from '../../hooks/useImportScript';
import Breadcrumbs from '../../blocks/breadcrumbs/breadcrumbs';
import Product from '../../blocks/product/product';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';

function PageProduct() {
    useImportScript('/js/page-product.js');

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
