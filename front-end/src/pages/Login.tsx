import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import appStore from '../store/appStore';
import Cookies from 'js-cookie';



const Login = () => {

  //api 요청
  const handleMypage_user_info = async (credentialResponse: any) => {

    const decodedToken : any = jwtDecode(credentialResponse.credential);

    
    console.log(decodedToken.email);
    console.log(decodedToken.name);
    console.log(decodedToken.picture);

    try {   
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {
        email : decodedToken.email,
        name : decodedToken.name,
        picture : decodedToken.picture
      });

      if (response.status === 200) {
        console.log("상태값 200",response.data)
        const refresh_token = response.headers['cookie']
        const access_token = response.headers['authorization']

        Cookies.set('X-REFRESH-TOKEN', refresh_token);
        localStorage.setItem('access-token', access_token)


        console.log(refresh_token, access_token)
        appStore.setValue(1) // 나중에 1로 바꿔야함
      }
      if (response.status === 201) {
        console.log("상태값 201", response.data)
        const refresh_token = response.headers['cookie']
        const access_token = response.headers['authorization']

        Cookies.set('X-REFRESH-TOKEN', refresh_token);
        localStorage.setItem('access-token', access_token)
        appStore.setValue(3)
      }

      // if (appStore.value === 1){
      //   console.log("dfdfdf")
      //   navigate('/signature');
      // }

    } catch (error) {
      
    }
  };


  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const clientId: string | undefined = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const handleLogInCancel = () => {
    appStore.setValue(1)
  };

  return (
    <div>
      <Container>
        <Container_finish_login_button>
          <Container_login_cancel onClick={handleLogInCancel}>
            <img src="./image/close.png" style={{ width: "25px", height: "25px", marginTop:"10px", marginLeft:"15px"}}></img>
          </Container_login_cancel>
            <img src="./image/login_logo.png" style={{ width: "100px", height: "100px", marginLeft:"100px"}}></img>
          <Cotainer_login_title>LOGIN</Cotainer_login_title>
          <Container_login_btn>
            {clientId && (
              <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                  onSuccess={handleMypage_user_info}
                  onError={handleLoginError}
                  logo_alignment = "center"
                  shape = "square"
                  type = "standard"
                  text='signin_with'
                />
              </GoogleOAuthProvider>
            )}
          </Container_login_btn>
        </Container_finish_login_button>
      </Container>
    </div>
  );
};
const Container = styled.div`
    position : fixed;
    background : red;
    height: 100%;
    width: 100%;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    z-index : 1;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2.5px); 
`;
const Container_login_cancel = styled.div`
    // background : red;
    width : 50px;
    height : 50px;
    display : flex;
    margin-left :250px;

    cursor : pointer;
`;
const Cotainer_login_title = styled.div`
    // background : red;
    display : flex;
    justify-content : center;
    align-items : center;
    font-family: 'Rubik Mono One', sans-serif;
    font-size : 23px;
    margin-top : 5px;
`;
const Container_finish_login_button = styled.div`
    position : relative;
    background : #ffffff;
    height: 300px;
    width: 300px;
    border-radius : 5px;

    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
`;
const Container_login_btn = styled.div`
    position : relative;
    // background : red;
    height: fit-content;
    width: 100%;

    display : flex;
    align-items : center;
    justify-content : center;

    margin-top : 25px;
`;



export default Login;