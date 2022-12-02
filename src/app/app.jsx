import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageProduct from '../pages/page-product/page-product';
import PageIndex from '../pages/page-index/page-index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageIndex />} />
                <Route path='/product' element={<PageProduct />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
