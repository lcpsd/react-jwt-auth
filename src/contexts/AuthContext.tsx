import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";

interface AuthContextProps{
    user: PayloadProps | undefined;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    register: (email: string, password: string, name: string) => Promise<any>;
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

    useEffect(() => {
        const user  = getUserLocalStorage()
        if(user)
         setUser(user)
    }, [])

    const [user, setUser] = useState<PayloadProps>()

    async function register(name: string, email: string, password: string){
        try {
            const res = await api.post("/auth/register", {
                name,
                email,
                password,
                confirmpassword: password
            })
            
            return res
        } catch (error) {
            return error
        }
    }

    async function login(email: string, password: string){
        try {
            const {data} = await api.post<APIresponseProps>('/auth/login', {email, password})
            
            const payload = {
                token: data.token,
                email,
            }
            
            setUser(payload)
            console.log(user)
            setUserLocalStorage(payload)

            return payload
            
        } catch (error) {
            return error
        }
    }

    async function logout(){
        setUser(undefined)
        setUserLocalStorage(null)
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