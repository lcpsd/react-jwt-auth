import { useAuthContext } from "../../contexts/AuthContext"
import { Profile } from "../Profile"

export function ProtectedLayout(){

    const {user} = useAuthContext()
    console.log(user)
    if(!user){
        return(
            <h1>Acesso Negado</h1>
        )
    }

    return(
        <>
            <Profile/>
        </>
    )
}