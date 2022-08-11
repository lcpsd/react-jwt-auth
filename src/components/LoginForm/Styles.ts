import styled from "styled-components";

export const Styles = styled.div`
    h4{
        text-align: center;
    }
    .login-form{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        border: ${({theme}) => theme.colors.quaternary} 1px solid;
        border-radius: 10px;
        padding: 20px;
        gap: 0.5rem;
    }
`

export default Styles;