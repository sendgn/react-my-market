function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__info">
                    <p><b>&copy; ООО «<span className="colored">Мой</span>Маркет», 2018-2022.</b></p>
                    <p>Для уточнения информации звоните по номеру <a className="link" href="tel:79000000000">+7 900 000 0000</a>,</p>
                    <p>а предложения по сотрудничеству отправляйте на почту <a className="link" href="mailto:partner@mymarket.com">partner@mymarket.com</a></p>
                </div>
                <a className="footer__to-top link" href="#top">Наверх</a>
            </div>
        </footer>
    );
}

export default Footer;