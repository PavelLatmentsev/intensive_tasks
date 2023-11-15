import { Button } from "../../common/button/Button";
import { Input } from "../../common/form/Input";
import styles from "./LoginForm.module.scss";
const LoginForm = () => {
    return ( 
        <form className={styles.loginForm}>
            <Input placeholder="Электронная почта" type="email"/>
            <Input placeholder="Пароль" type="password"/>
            <Button belonging="user" background="#74CCD8"><span>Авторизоваться</span></Button>
        </form>
     );
}
 
export default LoginForm;