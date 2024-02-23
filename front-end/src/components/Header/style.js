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
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
