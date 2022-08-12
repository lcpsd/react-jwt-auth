import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import { Container } from "../../styles/Container.styled"
import { DefaultButton } from "../DefaultButton"
import { ProfileInfoCard } from "../ProfileInfoCard"

export function Profile(){

    const {user, logout} = useAuthContext()
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate("/")
    }

    return(
        <Container>
            <ProfileInfoCard>
                <h5>E-mail</h5>
                <p>{user?.email}</p>
            </ProfileInfoCard>

            <div style={{width:"100%", maxWidth: '250px'}}>
                <DefaultButton title="Sair" theme="purple" onClick={() => handleLogout()}/>
            </div>
        </Container>
    )
}