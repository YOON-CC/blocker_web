import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { deleteCookie } from "../utils/cookieUtils";
import Login from '../pages/Login';
import appStore from '../store/appStore';


const Header = () => {
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // dropdown 메뉴 상태

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    //쿠키삭제
    const handleLogoutClick = () => {
        // deleteCookie('쿠키이름');
        
        //쿠키삭제 이런코드
        navigate('/login');
    };

    /*로그인으로 이동하도록 하기*/
    const handleGotoLogin = () => {
        appStore.setValue(2)
    };
    

    return (
        <Container>
            <StyledLink to="/" style={{ textDecoration: 'none' }}>
                <Container_title>
                    BLOCKER
                </Container_title>
            </StyledLink>
            <Container_menu>
                

                <StyledLink to="/board" style={{ textDecoration: 'none' }}>
                    <Container_menu_item>
                        게시글
                    </Container_menu_item>
                </StyledLink>
                <Container_menu_item onClick={handleGotoLogin}> 
                    게시글
                </Container_menu_item>


                <StyledLink to="/postwrite" style={{ textDecoration: 'none' }}>
                    <Container_menu_item>
                        게시글작성
                    </Container_menu_item>
                </StyledLink>
                <StyledLink to="/contracts" style={{ textDecoration: 'none' }}>
                    <Container_menu_item>
                        진행상황
                    </Container_menu_item>
                </StyledLink>
                <StyledLink to="/vertification" style={{ textDecoration: 'none' }}>
                    <Container_menu_item>
                        검증
                    </Container_menu_item>
                </StyledLink>
            </Container_menu>
            <Container_login>
                <Container_login_btn  onClick={toggleDropdown}>
                    <img src="../image/user.png" style={{ width: "23px", height: "23px"}}></img>
                    <img src="../image/menu.png" style={{ width: "23px", height: "23px", marginLeft:"10px"}}></img>
                    {isDropdownOpen &&         
                    <DropdownContainer>
                        <StyledLink to="/mypage" style={{ textDecoration: 'none' }}>
                            <DropdownItem>마이페이지</DropdownItem>
                        </StyledLink>
                        <DropdownItem onClick={handleLogoutClick}>로그아웃</DropdownItem>
                    </DropdownContainer>
                    }
                </Container_login_btn>     
            </Container_login>

        </Container>
    );
};


const handleLogout = () => {
    // 로그아웃 처리를 여기에 구현
};
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black; /* 원하는 색상으로 변경 */
  
  &:visited {
    color: black; /* 방문한 링크의 색상도 동일하게 유지 */
  }
`;
const Container = styled.div`
    background : white;
    position : fixed;
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    display : flex;
    justify-content : space-between;
    z-index : 1;
`;
const Container_title = styled.div`
    // background : red;
    width : 200px;
    height : 100%;

    font-size : 20px;
    // font-weight : bold;

    display : flex;
    justify-content : center;
    align-items : center;
    font-family: 'Rubik Mono One', sans-serif;
    // text-shadow: 2px 2px 4px #4CC6A9; /* 그림자 스타일 지정 */
`;
const Container_menu = styled.div`
    // background : blue;
    width : 500px;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    margin-left: 10px
`;

const Container_menu_item = styled.div`
    padding: 10px;
    width:100px;
    height:60px;
    cursor: pointer;
    color : #000000;
    font-weight:bold;
    &:hover {
        background-color: #dfdfdf;
    }
    
    font-size : 13px;
    display : flex;
    justify-content : center;
    align-items : center;
`;
const Container_login = styled.div`
    // background : red;
    width : 200px;
    height : 30px;

    font-size : 15px;
    font-weight : bold;

    display : flex;
    justify-content : center;
    align-items : center;

    margin-top : 25px;

`;
const Container_login_btn = styled.div`
    // background : aqua;
    width : 100px;
    height : 100%;

    border-radius:5px;
    font-size : 15px;
    font-weight : bold;

    display : flex;
    justify-content : center;
    align-items : center;
    cursor : pointer;
    margin-left:65px;
`;
const DropdownContainer = styled.div`
    background : white;
    position: absolute;
    width : 98px;
    right: 0;
    border: 1px solid #dfdfdf;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    z-index: 1;
    margin-top : 105px;
    margin-right:16px;
`;

const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #dfdfdf;
    }
    
    font-size : 13px;
    display : flex;
    justify-content : center;
    align-items : center;
`;


export default Header;