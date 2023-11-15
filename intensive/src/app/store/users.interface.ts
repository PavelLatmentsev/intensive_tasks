import { ILoginForm } from "../components/ui/loginForm/LoginForm.interface";
export interface IUserState {
    fetchUsers: () => Promise<void>;
    users: ILoginForm[];
    isLoading: boolean;
    errors: string[];
    addUser: (formData: {    login: string;    password: string;}) => void;
  }