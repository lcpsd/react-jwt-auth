import { useAuthContext } from "../../contexts/AuthContext"

export function Profile(){

    const {user} = useAuthContext()

    return(
        <h1>{user?.email}</h1>
    )
}