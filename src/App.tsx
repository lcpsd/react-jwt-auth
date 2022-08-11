import { AppStyles } from "./styles/AppStyles";
import { Container } from "./styles/Container.styled";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { FormField } from "./components/FormField";


function App() {
  return (
    <Container>
      <AppStyles>
        <Formik initialValues={{}} onSubmit={() => {}}>
          <Form className="login-form">
            <FormField name="email" placeHolderText="E-mail"/>
          </Form>
        </Formik>
      </AppStyles>
    </Container>
  );
}

export default App;
