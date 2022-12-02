import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import { Link } from 'react-router-dom'; 

function PageIndex() {
    return (
        <>
            <Header id="top" />
            <div className="page-index">
                <p className="page-index__description">
                    Здесь должно быть содержимое главной страницы.
                    Но в рамках курса главная страница  используется лишь
                    в демонстрационных целях
                </p>
                <Link to="/product" className="link">Перейти на страницу товара</Link>
            </div>
            <Footer />
        </>
    );
}

export default PageIndex;
