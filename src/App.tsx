import { AppStyles } from "./styles/AppStyles";
import { Container } from "./styles/Container.styled";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'
import { FormField } from "./components/FormField";
import { LoginForm } from "./components/LoginForm";


function App() {
  return (
    <Container>
      <AppStyles>
        <LoginForm onSubmitFn={() => {}}/>
      </AppStyles>
    </Container>
  );
}

export default App;
