import { useEffect } from 'react';
import PageProduct from './components/PageProduct/PageProduct';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/js/page-product.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return (
        <div className="font">
            <Header />
            <PageProduct />
            <Footer />
        </div>
    );
}

export default App;
