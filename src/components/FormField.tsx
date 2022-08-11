import { ErrorMessage, Field } from "formik";

interface FormFieldProps{
    name: string;
    placeHolderText: string;
}

export function FormField({name, placeHolderText}:FormFieldProps){

    return(
        <>
            <Field name={name} className="form-field" placeHolder={placeHolderText}/>
            <ErrorMessage component="span" name="email" className="form-error"/>
        </>
    )
}