
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/Button";
import LoginForm from "../../components/ui/loginForm/LoginFrom";
import RegisterForm from "../../components/ui/registerForm/RegisterForm";
import userIcon from "../../../assets/images/icons/man-user.svg";
import styles from "./AuthLayout.module.scss"

const AuthLayout = () => {
const navigate = useNavigate();
const { type } = useParams();
const [formType, setFormType] = useState(
  type === "register" ? type : "login"
);
const tooggleFormType = () => {
  setFormType((prevState) =>
    prevState === "register" ? "login" : "register"
  );
};
    return ( 
<>

{formType === "login" ?         <div className={styles.loginWrapper}>
        <div className={styles.login}>
        <span className={styles.login__title}>Авторизуйтесь, чтобы войти в систему</span>
        <LoginForm/>
        <span className={styles.login__alternative}>Или</span>
        <Button belonging="google" background="#FFF" onClick={()=> navigate("/googlesign", {replace: true}) }>Войти через Google</Button>
        <span className={styles.login__subtitle}>У вас еще нет аккаунта?</span>
       <Link to={"/"}  className={styles.login__link} onClick={()=>tooggleFormType()}> Зарегистрироваться</Link>
        </div>
        </div> :   <div className={styles.registerWrapper}>
        <div className={styles.register}>
        <span className={styles.register__title}>Зарегистрируйтесь, чтобы авторизоваться.</span>
        <RegisterForm/>
        <span className={styles.register__subtitle}>Если у вас есть аккаунт:</span>
        <Link to={"/"}  onClick={()=>tooggleFormType()} className={styles.register__link} ><img className={styles.register__picture} src={userIcon} alt="userIcon" />Войти</Link>
        </div>
        </div>}
</>


       
     );
}
 
export default AuthLayout;

