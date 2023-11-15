import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/Button";
import RegisterForm from "../../components/ui/registerForm/RegisterForm";
import styles from "./RegisterPage.module.scss"
const RegisterPage = () => {
    return ( 
        <div className={styles.registerWrapper}>
        <div className={styles.register}>
        <span className={styles.register__title}>Зарегистрируйтесь, чтобы авторизоваться.</span>
        <RegisterForm/>
        <span className={styles.register__subtitle}>Если у вас есть аккаунт:</span>
        <Link to={"/login"}><Button belonging="user" background="#74CCD8">Войти</Button></Link>
        </div>
        </div>
     );
}
 
export default RegisterPage;
