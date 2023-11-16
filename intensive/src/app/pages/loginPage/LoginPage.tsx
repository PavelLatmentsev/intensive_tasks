import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/Button";
import LoginForm from "../../components/ui/loginForm/LoginFrom";
import styles from "./LoginPage.module.scss"
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const navigate = useNavigate()
    return ( 
        <div className={styles.loginWrapper}>
        <div className={styles.login}>
        <span className={styles.login__title}>Авторизуйтесь, чтобы войти в систему</span>
        <LoginForm/>
        <span className={styles.login__alternative}>Или</span>
        <Button belonging="google" background="#FFF" onClick={()=> navigate("/", {replace: true}) }>Войти через Google</Button>
        <span className={styles.login__subtitle}>У вас еще нет аккаунта?</span>
       <Link to={"/register"}  className={styles.login__link}> Зарегистрироваться</Link>
        </div>
        </div>
     );
}
 
export default LoginPage;