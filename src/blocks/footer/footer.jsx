import { useCurrentDate } from '@kundinos/react-hooks';
import Link from '../link/link';

function Footer() {
    const currentDate = useCurrentDate();
    const fullYear = currentDate.getFullYear();

    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__info">
                    <p><b>&copy; ООО «<span className="colored">Мой</span>Маркет», 2018-{`${fullYear}`}.</b></p>
                    <p>Для уточнения информации звоните по номеру <Link href="tel:79000000000">+7 900 000 0000</Link>,</p>
                    <p>а предложения по сотрудничеству отправляйте на почту <Link href="mailto:partner@mymarket.com">partner@mymarket.com</Link></p>
                </div>
                <Link href="#top">Наверх</Link>
            </div>
        </footer>
    );
}

export default Footer;
