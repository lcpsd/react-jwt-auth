import { Style } from "./style";

interface ProfileInfoCardProps{
    children: JSX.Element | JSX.Element[]
}

export function ProfileInfoCard({children}:ProfileInfoCardProps){

    return(
        <Style>
            {children}
        </Style>
    )
}