import { Button } from "../../common/button/Button";
import { Input } from "../../common/form/Input";
import styles from "./LoginForm.module.scss";
import { ILoginForm} from "./LoginForm.interface";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/users.strore";
import { getOriginalUser } from "../../../utils/getOriginalUser.ts";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }, reset  } = useForm<ILoginForm>();
    const fetchUsers = useUserStore(state=> state.fetchUsers)
    useEffect(() => {
        fetchUsers()
    },[fetchUsers])
    const users = useUserStore(state=> state.users)
	const [error, setError] = useState<string>();
    const navigate = useNavigate()
    const onSubmit = (formData: {login:string, password:string}) => {
        const data = getOriginalUser(formData, users)
        if (data === "auth") {
            reset();
            return navigate("/", {replace: true});
        } else {
            setError('Не правильный логин или пароль');
        }
	};

    return ( 
        <>
        {
        error ? <div>{error}</div> : (
            (
                <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Электронная почта" type="email"	error={errors.login} {...register('login', { required: { value: true, message: 'Заполните email' },  pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,17}$/,
            message: "Пожалуйста, введите корректный email!",
          }  })}/>
                <Input placeholder="Пароль" type="password" error={errors.password} {...register('password', { required: { value: true,  message: 'Заполните пароль' },  minLength:{value:6, message:"Минимальная длина 6 символов"}, maxLength: {value:20, message:"Максимальная длина 20 символов"} })}/>
                <Button belonging="user" background="#74CCD8" type="submit"><span>Авторизоваться</span></Button>
            </form>
                ) 
        )
        }
        </>
     );
}
 
export default LoginForm;