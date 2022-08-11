import { ErrorMessage, Field } from "formik";

interface FormFieldProps{
    name: string;
    placeHolderText: string;
}

export function FormField({name, placeHolderText}:FormFieldProps){

    return(
        <>
        <div>
            <Field name={name} className="form-field" placeHolder={placeHolderText}/>
            <ErrorMessage component="span" name={name} className="form-error"/>
        </div>
        </>
    )
}