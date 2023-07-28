import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  const clientId: string | undefined = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <div>
      {clientId && (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </GoogleOAuthProvider>
      )}
    </div>
  );
};

export default Login;