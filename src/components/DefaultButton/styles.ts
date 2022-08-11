import styled from "styled-components";

interface Props{
    colorTheme: string;
}

export const Button = styled.button<Props>`

    background: ${({colorTheme, theme}) => colorTheme === "dark" ? theme.colors.quaternary : theme.colors.secondary};
    color: ${({colorTheme, theme}) => colorTheme === "dark" ? '#fff' : '#000'};

    border: 0;
    border-radius: 5px;
    padding: 0.5rem;

    font-weight: 600;
    font-size: 0.7rem;

    width: 100%;

    transition: all 0.2s;

    &:hover{
        filter: brightness(0.8);
        cursor: pointer;
    }
`