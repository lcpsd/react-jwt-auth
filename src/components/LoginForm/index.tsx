import { Form, Formik, FormikValues } from "formik";
import { FormField } from "../FormField";
import * as yup from 'yup'
import Styles from "./Styles";

interface LoginFormProps{
    onSubmitFn: (values:FormikValues) => void | Promise<void>;
}

export function LoginForm({onSubmitFn}:LoginFormProps){

  const formValidation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  return(
    <Styles>
      <Formik initialValues={{}} onSubmit={onSubmitFn} validationSchema={formValidation}>
        <Form className="login-form">
          <h4>Login</h4>
          <FormField name="email" placeHolderText="E-mail"/>
          <FormField name="password" placeHolderText="Senha"/>
          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </Styles>
  )
}