import useImportScript from '../hooks/useImportScript';
import ProductPage from '../pages/product/product';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function App() {
    useImportScript('/js/page-product.js');

    return (
        <div className="app font">
            <Header />
            <ProductPage />
            <Footer />
        </div>
    );
}

export default App;
