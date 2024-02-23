import React from "react";
import { useNavigate } from 'react-router-dom';
import { MenuContainer } from "./style";
import { useStorage } from "../../hooks/useStorage";
import { IoMdExit } from "react-icons/io";

const Menu = () => {
  const { getItem, clear } = useStorage();
  const data = getItem('data')
  
  const navigate = useNavigate();

  const singOut = () => {
    navigate('/')
    clear('data')
  }

  return (
    <MenuContainer>
      <header>
        <ul>
          <li>Usuário:</li>
          <li>{data.email}</li>
        </ul>
      </header>
      <footer>
        <a onClick={singOut}>Sair <IoMdExit size={18}/> </a>
      </footer>
    </MenuContainer>
  );
};

export default Menu;