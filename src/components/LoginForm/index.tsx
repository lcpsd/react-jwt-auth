import { Form, Formik, FormikValues } from "formik";
import { FormField } from "../FormField";
import * as yup from 'yup'
import {Styles} from "./styles";
import { DefaultButton } from "../DefaultButton";

interface LoginFormProps{
    onSubmitFn: (values:FormikValues) => void | Promise<void>;
}

export function LoginForm({onSubmitFn}:LoginFormProps){

  const formValidation = yup.object().shape({
    email: yup.string().email("Inválido").required("Obrigatório!"),
    password: yup.string().min(8).required("Obrigatório!")
  })

  return(
    <Styles>
      <Formik initialValues={{}} onSubmit={onSubmitFn} validationSchema={formValidation}>
        <Form className="login-form">
          <h4>Logar</h4>
          <FormField name="email" placeHolderText="E-mail"/>
          <FormField name="password" placeHolderText="Senha"/>

          <div className="buttons-row">
            <DefaultButton theme="purple" title="Entrar"/>
          </div>
        </Form>
      </Formik>
    </Styles>
  )
}