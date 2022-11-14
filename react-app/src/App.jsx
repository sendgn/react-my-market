import useImportScript from './hooks/useImportScript';
import PageProduct from './components/PageProduct/PageProduct';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
