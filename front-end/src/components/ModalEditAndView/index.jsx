
import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ModalContainer, Overlay, CloseButton, StudentForm, Input, SubmitButton } from './style';
import { newApi } from '../../services/newApi';
import { Estados } from '../../data/estados';
import { useStudents } from '../../context/StudentsContext';
import { toast } from 'sonner';

export const ModalAddStudent = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedState, setSelectedState] = useState('');


  const { studentList, setStudentList, userState : userDads } = useStudents();

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
 
  console.log(Estados)

  const ModalEditAndView = async (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const state = selectedState; 
    const city = event.target[3].value;

    try {
      const response = await newApi.post('/createstudent', {
        email: email,
        name: name,
        city: city,
        state: state,
        user_id: userDads.user_id
      }, {
        headers: {
          Authorization: `${userDads.type} ${ userDads.token}`
        }
      });
      
      setStudentList([...studentList, response.data])

      onClose(true);
      toast.success('Estudante cadastrado com sucesso');
    } catch (error) {
      console.log(error.message);
      toast.error('Não foi possível criar o estudante, por favor verifique.')
    }
  };

  return (
    <Overlay>
      <ModalContainer onSubmit={handleRegisterStudentSubmit}>
        <div className="modal-content">
          <header>
            <CloseButton onClick={onClose}><IoIosCloseCircleOutline size={23}/></CloseButton>
          </header>
          <h2>Cadastrar estudante</h2>
          <StudentForm >
            <Input type="text" placeholder="Nome" required />
            <Input type="email" placeholder="Email" required />
            <select value={selectedState} onChange={handleStateChange} required>
              <option value="">Selecione o estado</option>
              {Estados.map((estado) => (
                <option key={estado.sigla} value={estado.sigla}>
                  {estado.sigla} 
                </option>
              ))}
            </select>
            <Input type="text" placeholder="Cidade" required />
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </StudentForm>
        </div>
      </ModalContainer>
    </Overlay>
  );
};
