
import styled from "styled-components";

export const LoginScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginFormContainer = styled.div`
  background-color: ${(props) => props.theme['blue-600']};
  width: 30%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const LoginLink = styled.a`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;

export const RegisterLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;

`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;