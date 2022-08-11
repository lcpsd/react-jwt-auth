import { Form, Formik, FormikValues } from "formik";
import { FormField } from "../FormField";
import * as yup from 'yup'
import {Styles} from "./styles";
import { DefaultButton } from "../DefaultButton";

interface RegisterFormProps{
    onSubmitFn: (values:FormikValues) => void | Promise<void>;
}

export function RegisterForm({onSubmitFn}:RegisterFormProps){

  const formValidation = yup.object().shape({
    name: yup.string().required("Obrigatório!"),
    email: yup.string().email("Inválido").required("Obrigatório!"),
    password: yup.string().min(8).required("Obrigatório!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Senhas divergentes!"),
  })

  return(
    <Styles>
      <Formik initialValues={{}} onSubmit={onSubmitFn} validationSchema={formValidation}>
        <Form className="register-form">
          <h4>Registrar</h4>
          <FormField name="name" placeHolderText="Nome"/>
          <FormField name="email" placeHolderText="E-mail"/>
          <FormField name="password" placeHolderText="Senha" type="password"/>
          <FormField name="confirmPassword" placeHolderText="Confirme a senha" type="password"/>

          <div className="buttons-row">
            <DefaultButton theme="purple" title="Registrar"/>
          </div>
        </Form>
      </Formik>
    </Styles>
  )
}