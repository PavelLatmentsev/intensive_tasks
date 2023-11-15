import { Button } from "../../common/button/Button";
import { Input } from "../../common/form/Input";
import styles from "./RegisterForm.module.scss";
const RegisterForm = () => {
    return ( 
        <form className={styles.loginForm}>
            <Input placeholder="Email" type="email"/>
            <Input placeholder="Password" type="password"/>
            <Button belonging="user">Зарегистрироваться</Button>
        </form>
     );
}
 
export default RegisterForm;