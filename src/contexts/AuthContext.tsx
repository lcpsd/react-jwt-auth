import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthContextProps{
    user: PayloadProps | undefined;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    register: (email: string, password: string) => void;
}

interface AuthContextProviderProps{
    children: JSX.Element | JSX.Element[];
}

interface APIresponseProps{
    token: string;
}

interface PayloadProps{
    token: string;
    email: string;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({children}: AuthContextProviderProps){

    const [user, setUser] = useState<PayloadProps>()

    async function register(email: string, password: string){
        try {
            const res = await api.post("/register", {
                email,
                password
            })

            return res
        } catch (error) {
            return null
        }
    }

    async function login(email: string, password: string){
        try {
            const {data} = await api.post<APIresponseProps>('/login', {email, password})

            const payload = {
                token: data.token,
                email,
            }

            setUser(payload)
            
        } catch (error) {
            return null
        }
    }

    async function logout(){
        setUser(undefined)
    }

    return(
        <AuthContext.Provider value={{user, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthContext)
}