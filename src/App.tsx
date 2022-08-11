import { Container } from "./styles/Container.styled";
import {FormikValues} from 'formik'
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { api } from "./services/api";
import { useAuthContext } from "./contexts/AuthContext";

function App() {

  const {login, logout} = useAuthContext()

  async function handleLogin(values: FormikValues){
    const res = await api.get("/login", {
      params: values
    })

    console.log(res)
  }

  async function handleRegister(values: FormikValues){
    const res = await api.post("/user", values)
    console.log(res)
  }

  return (
    <Container>
      <RegisterForm onSubmitFn={handleRegister}/>
      <LoginForm onSubmitFn={handleLogin}/>
    </Container>
  );
}

export default App;
