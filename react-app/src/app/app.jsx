import useImportScript from '../hooks/useImportScript';
import ProductPage from '../pages/product/product';
import Header from '../blocks/header/header';
import Footer from '../blocks/footer/footer';

function App() {
    useImportScript('/js/page-product.js');

    return (
        <div className="font">
            <Header />
            <ProductPage />
            <Footer />
        </div>
    );
}

export default App;
