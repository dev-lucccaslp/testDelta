import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  padding: 10px;
`;

export const AddButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px  2px #0056b3;

  &:hover {
    background-color: #0056b3;
    box-shadow: 3px 3px  2px #007bff;
  }
`;
