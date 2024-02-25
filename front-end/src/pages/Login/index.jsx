import { useEffect, useState } from 'react';
import { newApi } from '../../services/newApi';

import {
  Input,
  Header,
  LoginScreen,
  LoginForm,
  LoginFormContainer,
  LoginLink,
  RegisterLink,
  SubmitButton
} from './style';

import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useStudents } from '../../context/StudentsContext';


export function Login() {

  const { setItem } = useStudents();

  const [active, setActive] = useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);


  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newApi.post('/login', {
        email: email,
        password: password,
      });

      setItem(response.data)

      setLoginStatus(false);
      navigate('/dashboard', { replace: true });

    } catch (error) {
      console.error(error.message);
      setLoginStatus(true); 
      toast.error('Falha no login. Por favor, verique email e senha.');
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault(); 
  
    const email = event.target[0].value;
    const confirmEmail = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;
  
    if (email !== confirmEmail) {
      toast.error("O email e o email de confirmação devem ser iguais.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("A senha e a senha de confirmação devem ser iguais.");
      return;
    }
    try {
      const response = await newApi.post('/register', {
        email: email,
        password: password,
      });
      toast.success("Usuário criado com sucesso!")
      setActive(true)
    } catch (error) {
      console.log(error.message)
      if(error.response.status === 409){
        toast.error('Este email já foi cadastrado, insira outro')
      }
    }
  };

  return (
    <LoginScreen>
      <LoginFormContainer>

        <Header>
          <LoginLink active={active} onClick={() => setActive(true)}>Login</LoginLink>
          <RegisterLink active={!active} onClick={() => setActive(false)}>Registrar</RegisterLink>
        </Header>

        {active ? (

          <LoginForm onSubmit={(event) => handleLoginSubmit(event)}>
            <p>Email</p>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>Senha</p>
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <SubmitButton type="submit">Entrar</SubmitButton>
          </LoginForm>
        ) : (

          <LoginForm onSubmit={handleRegisterSubmit}>
            <Input type="email" placeholder="Email" required />
            <Input type="email" placeholder="Confirmar Email" required />
            <Input type="password" placeholder="Senha" required />
            <Input type="password" placeholder="Confirmar Senha" required />
            <SubmitButton type="submit">Registrar</SubmitButton>
          </LoginForm>

        )}

      </LoginFormContainer>
    </LoginScreen>
  );
}

