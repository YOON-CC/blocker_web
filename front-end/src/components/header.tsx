import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
        <Link to="/">
            <Logo src="./image/logo.png"></Logo>
        </Link>
        <ButtonContainer>
            <ButtonContainer_Logout>LOGOUT</ButtonContainer_Logout>
            <ButtonContainer_Mypage>MYPAGE</ButtonContainer_Mypage>
        </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
    position : absolute;
    height: 40px;
    width: 100%;
    background : #000000;
    display : flex;
    justify-content: space-between;
`;
const Logo = styled.img`
    position : relative;
    height: 30px;
    width: 185px;
    margin-top : 5px;
    margin-left : 8px;
`;
const ButtonContainer = styled.div`
    position : relative;
    height: 100%;
    width: 180px;
    display : flex;
    justify-content: space-between;
`;
const ButtonContainer_Logout = styled.div`
    position : relative;
    height: 100%;
    width: 90px;
    display : flex;
    justify-content: center;
    align-items : center;

    font-size: 17px;
    font-weight:bold;
    color : #8BF5FD;

`;
const ButtonContainer_Mypage = styled.div`
    position : relative;
    height: 100%;
    width: 90px;
    display : flex;
    justify-content: center;
    align-items : center;

    font-size: 17px;
    font-weight:bold;
    color : #8BF5FD;
`;


export default Header;