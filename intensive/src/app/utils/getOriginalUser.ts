import { ILoginForm } from "../components/ui/loginForm/LoginForm.interface";

export const getOriginalUser = (formData:{login:string, password:string}, users: ILoginForm[]):string|boolean => {
     const user = users.find((el) => el.login === formData.login);
     if (user && user.login===formData.login && user.password===formData.password) {
        return "auth"
 } else if (user && user.login===formData.login){
          return "register"
     }   else {
          return false
     }
}
    