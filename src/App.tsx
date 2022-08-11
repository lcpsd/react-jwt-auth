import { Container } from "./styles/Container.styled";
import {FormikValues} from 'formik'
import { LoginForm } from "./components/LoginForm";


function App() {

  function handleLogin(values: FormikValues){

  }

  return (
    <Container>
      <LoginForm onSubmitFn={handleLogin}/>
    </Container>
  );
}

export default App;
