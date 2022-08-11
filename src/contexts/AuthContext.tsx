import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { getUserLocalStorage, setUserLocalStorage } from "./utils";

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

    useEffect(() => {
        getUserLocalStorage() && setUser(user)
    }, [])

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
            setUserLocalStorage(payload)
            
        } catch (error) {
            return null
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