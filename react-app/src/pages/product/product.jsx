import { breadcrumbsItems } from '../../data/data';
import Breadcrumbs from '../../blocks/breadcrumbs/breadcrumbs';
import Product from '../../blocks/product/product';

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