import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
const GoogleSignPage = () => {
    const navigate = useNavigate()
    return ( 
        
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse)
     return navigate("/personal", {replace: true})
  }}
  onError={() => {
   return  'Login Failed'
  }}
/>
    )
}
 
export default GoogleSignPage;