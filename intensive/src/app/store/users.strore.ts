import { create } from "zustand";
import { IUserState } from "./users.interface";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import { ILoginForm } from "../components/ui/loginForm/LoginForm.interface";
import { API } from "../helpers/api";

export const useUserStore = create<IUserState>()(immer((set) => ({
    users: [],
    isLoading: false,
    errors: [],
    fetchUsers: async () => {
        const { data } = await axios.get<ILoginForm[]>(API.users.allUsers);
        set({users:data})
  },
    addUser: (formData: {login: string, password:string}) =>  set(async (state) => {
        const { data } = await axios.post<ILoginForm>(API.users.allUsers, { ...formData, id:Date.now() });
      state.users.push(data)
      })
  })));