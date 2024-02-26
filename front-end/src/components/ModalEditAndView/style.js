import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  width: 40%;

  h2 {
    color: ${(props) => props.theme['gray-800']};
  }

  header {
    display: flex;
    justify-content: end;
  }
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #FFF;
  
  &:hover {
    color: red;
  }
`;

export const StudentForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top:20px;
  margin-bottom: 30px;

  select {
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: ${(props) => props.theme['gray-500']};
  font-size: 16px;
  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme['gray-200']};
  }
  }

  option {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;

  &:disabled {
    cursor: not-allowed;
    color: #ccc
  }

`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme['green-300']};
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.theme['green-500']};
  }
`;