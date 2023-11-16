import { useForm } from "react-hook-form";
import { Button } from "../../common/button/Button";
import { Input } from "../../common/form/Input";
import styles from "./RegisterForm.module.scss";
import { IRegisterForm } from "./RegisterForm.interface";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../../../store/users.strore";
import { getOriginalUser } from "../../../utils/getOriginalUser";
const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, reset  } = useForm<IRegisterForm>();
	const [error, setError] = useState<string>();
    const users = useUserStore(state=> state.users);
    const addUser = useUserStore(state=>state.addUser)
    const navigate = useNavigate()
    const onSubmit = async (formData: IRegisterForm) => {
		try {
            const data = getOriginalUser(formData, users)
			if (!data) {
              await addUser(formData);
              reset();
              return navigate("/personal", {replace: true});
           
			} else {
				setError('Такой пользователь уже существует');
			}
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};
    return ( 
        error ? <div>{error}</div> : (
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