import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();

    const onSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {

        console.log('로그인 성공:', response);
        navigate('/'); 
    };

    const onFailure = (error: any) => {
        // 로그인 실패 시 호출되는 콜백 함수
        console.error('로그인 실패:', error);
    };

    return (
        <div>
            <GoogleLogin
                clientId="189071197221-f8uhug19sdap87tk03t1ffdbu7aiefpi.apps.googleusercontent.com" 
                buttonText="구글 로그인" 
                onSuccess={onSuccess} 
                onFailure={onFailure} 
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;