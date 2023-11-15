import { useForm } from "react-hook-form";
import { Button } from "../../common/button/Button";
import { Input } from "../../common/form/Input";
import styles from "./RegisterForm.module.scss";
import { IRegisterForm } from "./RegisterForm.interface";
import axios from "axios";
import { API } from "../../../helpers/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, reset  } = useForm<IRegisterForm>();
	const [error, setError] = useState<string>();
    const navigate = useNavigate()
    const onSubmit = async (formData: IRegisterForm) => {
		try {
			const { data } = await axios.post<IRegisterForm>(API.users.allUsers, { ...formData, id:Date.now() });
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
        error ? <div>что то пошло не так</div> : (
        <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="Электронная почта" type="email" error={errors.login} {...register('login', { required: { value: true, message: 'Заполните email' }, pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,17}$/,
            message: "Пожалуйста, введите корректный email!",
          }   })}/>
            <Input placeholder="Пароль" type="password" error={errors.password} {...register('password', { required: { value: true, message: 'Заполните пароль' },  minLength:{value:6, message:"Минимальная длина 6 символов"}, maxLength: {value:20, message:"Максимальная длина 20 символов"} })}/>
            <Button belonging="user">Зарегистрироваться</Button>
        </form> ))
}
 
export default RegisterForm;