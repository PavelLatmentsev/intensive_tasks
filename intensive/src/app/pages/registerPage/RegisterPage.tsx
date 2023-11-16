import { Link } from "react-router-dom";
import RegisterForm from "../../components/ui/registerForm/RegisterForm";
import styles from "./RegisterPage.module.scss"
import userIcon from "../../../assets/images/icons/man-user.svg";
const RegisterPage = () => {
    return ( 
        <div className={styles.registerWrapper}>
        <div className={styles.register}>
        <span className={styles.register__title}>Зарегистрируйтесь, чтобы авторизоваться.</span>
        <RegisterForm/>
        <span className={styles.register__subtitle}>Если у вас есть аккаунт:</span>
        <Link to={"/login"} className={styles.register__link}><img className={styles.register__picture} src={userIcon} alt="userIcon" />Войти</Link>
        </div>
        </div>
     );
}
 
export default RegisterPage;
