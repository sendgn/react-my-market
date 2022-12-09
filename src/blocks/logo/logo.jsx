import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
    height: 43px;
    @media (max-width: 361px) {
        height: 30px;
    }
`;

function Logo() {
    return (
        <Img src={logo} alt="Логотип" />
    );
}

export default Logo;
