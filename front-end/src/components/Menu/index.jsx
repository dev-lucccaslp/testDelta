import React from "react";
import { useNavigate } from 'react-router-dom';
import { MenuContainer } from "./style";
import { IoMdExit } from "react-icons/io";

import  Logo from '../../assets/logo.png'
import { useStudents } from "../../context/StudentsContext";

const Menu = () => {

  const { setStudentList, userState, clear } = useStudents();
  
  const navigate = useNavigate();

  const logOut = () => {
    clear();
    setStudentList([]);
    navigate('/', { replace: true });
  }

  return (
    <MenuContainer>
      <header>
        <img
        src={Logo}
        />
        <ul>
          <li>Usuário:</li>
          <li>{userState.email}</li>
        </ul>
      </header>
      <footer>
        <a onClick={logOut}>Sair <IoMdExit size={18}/> </a>
      </footer>
    </MenuContainer>
  );
};

export default Menu;