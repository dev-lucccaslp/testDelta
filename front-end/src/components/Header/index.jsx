import React from "react";
import { HeaderContainer, AddButton } from "./style";

const Header = ({ onAddStudent }) => {
  return (
    <HeaderContainer>
      <AddButton onClick={onAddStudent}>Adicionar Alunos</AddButton>
    </HeaderContainer>
  );
};

export default Header;
