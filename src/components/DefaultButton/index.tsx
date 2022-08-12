import { HTMLAttributes } from "react";
import { Styles } from "./styles";

interface DefaultButtonProps extends HTMLAttributes<HTMLButtonElement>{
    title: string;
    theme: 'purple' | 'dark';
}

export function DefaultButton({title, theme, ...rest}:DefaultButtonProps){

    return(
        <Styles colorTheme={theme}>
            <button {...rest} type="submit">
                {title}
            </button>
        </Styles>
    )
}