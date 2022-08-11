import { useAuthContext } from "../../contexts/AuthContext"

export function ProtectedLayout({children}:{children: JSX.Element}){

    const {user} = useAuthContext()

    if(!user){
        return(
            <h1>Acesso Negado</h1>
        )
    }

    return(children)
}