import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
    navigate('/');
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  //텍스트변환
  const texts: string[] = ['CONVENIENCE', 'PROVEN', 'INNOVATION', " IT'S ALL IN BLOCKER"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1180);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts]);

  const clientId: string | undefined = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div>

      <Container>
        <Contianer_block>
          <Container_block_1></Container_block_1>
          <Container_block_2></Container_block_2>
          <Container_block_3></Container_block_3>
          <Container_block_4></Container_block_4>
        </Contianer_block>

        <Container_text>
          {texts[currentIndex]}
        </Container_text>

      </Container>

      <Container_finish>
        <Container_finish_img>
          <img src="./image/logo.png" style={{ width: "100%", height: "100%"}}></img>
        </Container_finish_img>
        <Container_finish_login_button>
          {clientId && (
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
                shape = "circle"
                type = "icon"
              />
            </GoogleOAuthProvider>
          )}
        </Container_finish_login_button>
      </Container_finish>

    </div>
  );
};

const fadeInAnimation_1 = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div`
  position : absolute;
  // background : red;
  height: 400px;
  width: 400px;
  
  top : 50%;
  left : 50%;
  transform: translate(-50%, -50%);
  
  display : flex;
  justify-content : space-between;

  animation: ${fadeInAnimation_1} 0.5s forwards; /* 애니메이션을 1초 동안 실행, ease-out으로 느린 빠르기로 시작 */
  animation-delay: 4.2s; /* 애니메이션 시작을 3초로 지연 */
`;


const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(70px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Contianer_block = styled.div`
    position : absolute;
    // background : red;
    height: 60px;
    width: 60px;
    margin-left : 10px;
    display : flex;
    justify-content : space-between;
    animation: ${bounceAnimation} 1.13s infinite;

    top : 15%;
    left : 50%;
    margin-left : -35px;
`;
const Container_block_1 = styled.div`
  position : absolute;
  background: linear-gradient(to right, #8BF5FD, #B0F4F7);
  height: 28px;
  width: 28px;

  display : flex;
  justify-content : space-between;

  border-radius : 4px;

  box-shadow: 0px 0px 15px 0px #8BF5FD;
`;
const Container_block_2 = styled.div`
  position : absolute;
  background: linear-gradient(to right, #8BF5FD, #B0F4F7);
  height: 28px;
  width: 28px;
  margin-left : 32px;

  display : flex;
  justify-content : space-between;

  border-radius : 4px;

  box-shadow: 0px 0px 15px 0px #8BF5FD;
`;
const Container_block_3 = styled.div`
  position : absolute;
  background: linear-gradient(to right, #8BF5FD, #B0F4F7);
  height: 28px;
  width: 28px;
  margin-top : 32px;

  display : flex;
  justify-content : space-between;

  border-radius : 4px;

  box-shadow: 0px 0px 15px 0px #8BF5FD;
`;
const Container_block_4 = styled.div`
  position : absolute;
  background: linear-gradient(to right, #8BF5FD, #B0F4F7);
  height: 28px;
  width: 28px;
  margin-left : 32px;
  margin-top : 32px;

  display : flex;
  justify-content : space-between;

  border-radius : 4px;

  box-shadow: 0px 0px 15px 0px #8BF5FD;
`;
const Container_text = styled.div`
    position : absolute;
    // background : aqua;
    height: 60px;
    width: 100%;
    
    top : 55%;
    left : 50%;
    transform: translate(-50%, -50%);
    
    display : flex;
    justify-content : center;
    align-items : center;

    font-size: 40px;
    font-weight: bold;
    color: #fff;
`;
const fadeInAnimation_2 = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container_finish = styled.div`
    position : absolute;
    // background : aqua;
    height: 350px;
    width: 350px;
    
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
  
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    opacity : 0;

    animation: ${fadeInAnimation_2} 1s forwards; /* 애니메이션을 1초 동안 실행, ease-out으로 느린 빠르기로 시작 */
    animation-delay: 4.5s; /* 애니메이션 시작을 3초로 지연 */
`;
const Container_finish_img = styled.div`
    position : relative;
    // background : red;
    height: 40px;
    width: 240px;

    top : 40%;
    left : 50%;
    transform: translate(-50%, -50%);

`;
const Container_finish_login_button = styled.div`
    position : relative;
    // background : red;
    height: 50px;
    width: 40px;

    top : 45%;
    left : 50%;
    transform: translate(-50%, -50%);
`;


export default Login;