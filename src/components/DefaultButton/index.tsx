import { Button } from "./styles";

interface DefaultButton extends React.HTMLAttributes<HTMLButtonElement>{
    title: string;
    theme: 'purple' | 'dark';
}

export function DefaultButton({title, theme, ...rest}:DefaultButton){

    return(
        <Button colorTheme={theme} {...rest} type="submit">
            {title}
        </Button>
    )
}