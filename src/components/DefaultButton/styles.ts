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
`