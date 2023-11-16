import { GoogleLogin } from '@react-oauth/google';
const AuthLayout = () => {

    return ( 
<div>
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
</div>
       
     );
}
 
export default AuthLayout;