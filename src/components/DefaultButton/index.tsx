import { Button } from "./styles";

interface DefaultButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    title: string;
    theme: 'purple' | 'dark';
}

export function DefaultButton({title, theme, ...rest}:DefaultButtonProps){

    return(
        <Button colorTheme={theme} {...rest} type="submit">
            {title}
        </Button>
    )
}