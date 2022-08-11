import { ErrorMessage, Field } from "formik";
import { Styles } from "./styles";

interface FormFieldProps{
    name: string;
    placeHolderText: string;
    type?: string;
}

export function FormField({name, placeHolderText, type}:FormFieldProps){

    return(
        <>
        <Styles>
            <Field name={name} className="form-field" placeHolder={placeHolderText} type={type}/>
            <ErrorMessage component="span" name={name} className="form-error"/>
        </Styles>
        </>
    )
}