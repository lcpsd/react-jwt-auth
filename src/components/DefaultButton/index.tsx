import { Styles } from "./styles";

interface DefaultButtonProps{
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