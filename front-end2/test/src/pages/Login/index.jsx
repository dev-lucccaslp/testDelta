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
} from './style'

export function Login() {

  const [active, setActive] = useState(true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    try {
      // const response = await newApi.post('/login', {
      //   email: email,
      //   password: password,

      // },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },

      //   }
      // )

      // console.log(response.data);
      // alert('teste');

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "email": "lucas@teste.com",
        "password": "teste123"
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:8080/login", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Erro durante a solicitação:", error);
      console.log("Ocorreu um erro durante a solicitação: " + error.data);

      console.log(email)
      console.log(password)
    }
  }


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

