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
    const {response} = await login(email, password)

    if(response?.status == 404){
      notify("Usuário não cadastrado")
      return
    }

    notify("Logado")
  }

  async function handleRegister({email, password, name}: FormikValues){
    const {response} = await register(name, email, password)

    if(response?.status == 422){
      notify('Usuário já existe!')
      return
    }

    notify("Cadastrado com sucesso!")
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
