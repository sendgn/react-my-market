import useImportScript from './hooks/useImportScript';
import PageProduct from './components/product/product';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
    useImportScript('/js/page-product.js');

    return (
        <div className="font">
            <Header />
            <PageProduct />
            <Footer />
        </div>
    );
}

export default App;
