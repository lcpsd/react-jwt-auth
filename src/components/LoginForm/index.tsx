import { Form, Formik } from "formik";
import { FormField } from "../FormField";

interface LoginFormProps{
    onSubmitFn: () => void | Promise<void>;
}

export function LoginForm({onSubmitFn}:LoginFormProps){

    return(
        <Formik initialValues={{}} onSubmit={onSubmitFn}>
          <Form className="login-form">
            <FormField name="email" placeHolderText="E-mail"/>
            <FormField name="password" placeHolderText="Senha"/>
            <button type="submit">Entrar</button>
          </Form>
        </Formik>
    )
}