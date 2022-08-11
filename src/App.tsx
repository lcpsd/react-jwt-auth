import { Container } from "./styles/Container.styled";
import {FormikValues} from 'formik'
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { api } from "./services/api";
import { useAuthContext } from "./contexts/AuthContext";

function App() {

  const {login, register} = useAuthContext()

  async function handleLogin({email, password}: FormikValues){
    login(email, password)
  }

  async function handleRegister({email, password}: FormikValues){
    register(email, password)
  }

  return (
    <Container>
      <RegisterForm onSubmitFn={handleRegister}/>
      <LoginForm onSubmitFn={handleLogin}/>
    </Container>
  );
}

export default App;
