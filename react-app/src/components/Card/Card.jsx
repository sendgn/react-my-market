import Price from '../price/price';

function Card() {
    return (
        <div className="card">
            <div className="card__content">
                <div className="card__icons">
                    <svg className="card__icon icon" width="44" height="35" viewBox="0 0 44 35" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z" />
                    </svg>
                </div>

                <Price old="75 990₽" total="67 990₽" />

                <div className="card__delivery">
                    <p>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></p>
                    <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>
                </div>
                <div className="btn btn_lg" id="add-to-cart-btn">
                    <span className="btn__text btn__text_cart">Добавить в корзину</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
