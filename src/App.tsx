import { Container } from "./styles/Container.styled";
import {FormikValues} from 'formik'
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";


function App() {

  function handleLogin(values: FormikValues){

  }

  function handleRegister(values: FormikValues){

  }

  return (
    <Container>
      <RegisterForm onSubmitFn={handleRegister}/>
      <LoginForm onSubmitFn={handleLogin}/>
    </Container>
  );
}

export default App;
