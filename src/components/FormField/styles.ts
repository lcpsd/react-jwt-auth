import styled from "styled-components";

export const Styles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    .form-field{
        background: ${({theme}) => theme.colors.quaternary};
        border: 0;
        padding: 0.5rem;
        border-radius: 5px;
        color: #fff;
    }

    .form-error{
        font-size: 10px;
    }
`