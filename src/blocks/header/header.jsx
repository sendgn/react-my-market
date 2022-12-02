import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    const cartCount = useSelector((store) => {
        return store.cart.products.length;
    });

    return (
        <header className="header">
            <div className="header__container container">
                <Link to="/" className="header__logo link">
                    <Logo />
                    <h1 className="header__title font__h1"><span className="colored">Мой</span>Маркет</h1>
                </Link>
                <div className="header__icons">
                    <div className="header__icon icon">
                        <svg className="h-100" width="44" height="35" viewBox="0 0 44 35" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z" />
                        </svg>
                        <div className="icon__counter">2</div>
                    </div>
                    <div className="header__icon icon">
                        <svg className="h-100" width="42" height="41" viewBox="0 0 42 41" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.720947 0.915039H8.01813H9.72605L10.061 2.5228L11.0138 7.09618H39.3531H41.8122L41.4081 9.42498L39.2618 21.7872L38.9716 23.4584H37.2068H14.4226L15.3062 27.7H37.2068V31.7H13.5983H11.8904L11.5554 30.0922L7.26297 9.4884L9.30586 9.09618L7.26297 9.4884L6.3102 4.91504H0.720947V0.915039ZM11.8471 11.0962L13.5893 19.4584H35.442L36.8937 11.0962H11.8471ZM19.2129 36.6778C19.2129 38.5186 17.6624 40.007 15.7449 40.007C13.8273 40.007 12.2769 38.5186 12.2769 36.6778C12.2769 34.837 13.8273 33.3876 15.7449 33.3876C17.6624 33.3876 19.2129 34.837 19.2129 36.6778ZM32.9162 40.007C34.8337 40.007 36.3841 38.5186 36.3841 36.6778C36.3841 34.837 34.8337 33.3876 32.9162 33.3876C30.9985 33.3876 29.4481 34.837 29.4481 36.6778C29.4481 38.5186 30.9985 40.007 32.9162 40.007Z" />
                        </svg>
                        {cartCount !== 0 && <div className="icon__counter">{cartCount}</div>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;