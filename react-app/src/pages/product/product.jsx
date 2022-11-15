import { breadcrumbsItems } from '../../data/data';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Product from '../../components/product/product';

function ProductPage() {
    return (
        <>
            <div id="top"></div>
            <Breadcrumbs items={breadcrumbsItems} />
            <Product />
        </>
    );
}

export default ProductPage;