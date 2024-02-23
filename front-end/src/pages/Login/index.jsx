import { useState } from 'react';
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

import { useAuthContext } from '../../context/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { useStorage } from '../../hooks/useStorage';


export function Login() {

  const [active, setActive] = useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const { setItem } = useStorage();

  const navigate = useNavigate();
  const { addData, data } = useAuthContext();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newApi.post('/login', {
        email: email,
        password: password,
      });

      setItem('data', response.data)

      addData(response.data);

      setLoginStatus(true);
      navigate('/dashboard', { replace: true });

    } catch (error) {
      console.error(error.message);
      setLoginStatus(false); 
      alert('Falha no login. Por favor, tente novamente.');
    }
  };

  const handleRegisterSubmit = (email, confirmEmail, password, confirmPassword) => {
    if (email !== confirmEmail) {
      alert("O email e o email de confirmação devem ser iguais.");
      return;
    }

    if (password !== confirmPassword) {
      alert("A senha e a senha de confirmação devem ser iguais.");
      return;
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
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Senha"
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

