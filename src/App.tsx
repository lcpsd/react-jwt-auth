import { Container } from "./styles/Container.styled";
import {FormikValues} from 'formik'
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { useAuthContext } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import { notify } from "./components/Toast";

function App() {

  const {login, register} = useAuthContext()

  async function handleLogin({email, password}: FormikValues){
    login(email, password)
  }

  async function handleRegister({email, password, name}: FormikValues){
    const res = await register(email, password, name)
    if(!res){
      notify('Usuário já existe!')
    }
  }

  return (
    <Container>
      <RegisterForm onSubmitFn={handleRegister}/>
      <LoginForm onSubmitFn={handleLogin}/>
      <ToastContainer />
    </Container>
  );
}

export default App;
