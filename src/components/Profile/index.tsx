import { useAuthContext } from "../../contexts/AuthContext"
import { Container } from "../../styles/Container.styled"
import { DefaultButton } from "../DefaultButton"
import { ProfileInfoCard } from "../ProfileInfoCard"

export function Profile(){

    const {user} = useAuthContext()

    return(
        <Container>
            <ProfileInfoCard>
                <h5>E-mail</h5>
                <p>{user?.email}</p>
            </ProfileInfoCard>

            <DefaultButton title="Sair" theme="purple" />
        </Container>
    )
}