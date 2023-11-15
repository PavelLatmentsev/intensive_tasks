import { Button } from "../../common/button/Button";
import { Input } from "../../common/form/Input";
import styles from "./LoginForm.module.scss";
import { ILoginForm} from "./LoginForm.interface";
import { useForm } from "react-hook-form";
import { API } from "../../../helpers/api";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors }, reset  } = useForm<ILoginForm>();
	const [error, setError] = useState<string>();
    const navigate = useNavigate()
    const onSubmit = async (formData: ILoginForm) => {
		try {
			const { data } = await axios.post<ILoginForm>(API.users.allUsers, { ...formData, id:Date.now() });
            console.log(data)
			if (data.login) {
              reset();
              return navigate("/", {replace: true});
	
			} else {
				setError('Что-то пошло не так');
			}
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};

    
    return ( 
        <>
        {
        error ? <div>что то пошло не так</div> : (
            (
                <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Электронная почта" type="email" 		error={errors.login} {...register('login', { required: { value: true, message: 'Заполните email' },  pattern: {
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