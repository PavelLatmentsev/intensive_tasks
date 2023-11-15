import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/Button";
import LoginForm from "../../components/ui/loginForm/LoginFrom";
import styles from "./LoginPage.module.scss"
const LoginPage = () => {
    return ( 
        <div className={styles.loginWrapper}>
        <div className={styles.login}>
        <span className={styles.login__title}>Авторизуйтесь, чтобы войти в систему</span>
        <LoginForm/>
        <span className={styles.login__alternative}>Или</span>
        <Button belonging="google" background="#FFF">Войти через Google</Button>
        <span className={styles.login__subtitle}>У вас еще нет аккаунта?</span>
       <Link to={"/register"}> <Button >Зарегистрироваться</Button></Link>
        </div>
        </div>
     );
}
 
export default LoginPage;