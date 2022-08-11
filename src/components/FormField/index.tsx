import { ErrorMessage, Field } from "formik";
import { Styles } from "./styles";

interface FormFieldProps{
    name: string;
    placeHolderText: string;
}

export function FormField({name, placeHolderText}:FormFieldProps){

    return(
        <>
        <Styles>
            <Field name={name} className="form-field" placeHolder={placeHolderText}/>
            <ErrorMessage component="span" name={name} className="form-error"/>
        </Styles>
        </>
    )
}