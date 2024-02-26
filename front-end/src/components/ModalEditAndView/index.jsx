import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ModalContainer, Overlay, CloseButton, StudentForm, Input, SubmitButton } from './style';
import { newApi } from '../../services/newApi';
import { Estados } from '../../data/estados';
import { useStudents } from '../../context/StudentsContext';
import { toast } from 'sonner';

export const ModalEditAndView = ({ isOpen, onClose, idStudent, isType, isDadsStudents }) => {
  if (!isOpen) return null;

  const { studentList, setStudentList, userState: userDads } = useStudents();
  const [formData, setFormData] = useState({
    name: isDadsStudents.name || '',
    email: isDadsStudents.email || '',
    city: isDadsStudents.city || '',
    state: isDadsStudents.state || '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const HandleEdit = async (event) => {
    event.preventDefault();

    try {
      const response = await newApi.put(`/students/${idStudent}`, {
        ...formData,
        user_id: userDads.user_id,
      }, {
        headers: {
          Authorization: `${userDads.type} ${userDads.token}`
        }
      });

      const updatedStudentList = studentList.map(student => {
        if (student.id === idStudent) {
          return response.data;
        }
        return student;
      });

      setStudentList(updatedStudentList);

      onClose(true);
      toast.success('Estudante Editado com sucesso');
    } catch (error) {
      console.log(error.message);
      toast.error('Não foi possível editar o estudante, por favor verifique.')
    }
  };

  return (
    <Overlay>
      {isType === 'edit' ? (
        <ModalContainer onSubmit={HandleEdit}>
          <div className="modal-content">
            <header>
              <CloseButton onClick={onClose}>
                <IoIosCloseCircleOutline size={23} />
              </CloseButton>
            </header>
            <h2>Editar estudante</h2>
            <StudentForm>
              <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} />
              <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <select name="state" value={formData.state} onChange={handleChange}>
                <option value="">Selecione o estado</option>
                {Estados.map((estado, index) => (
                  <option key={index} value={estado.sigla}>
                    {estado.sigla}
                  </option>
                ))}
              </select>
              <Input type="text" name="city" placeholder="Cidade" value={formData.city} onChange={handleChange} />
              <SubmitButton type="submit">Confirmar Edição</SubmitButton>
            </StudentForm>
          </div>
        </ModalContainer>
      ) : (
        <ModalContainer>
          <div className="modal-content">
            <header>
              <CloseButton onClick={onClose}>
                <IoIosCloseCircleOutline size={23} />
              </CloseButton>
            </header>
            <h2>Dados do estudante</h2>
            <StudentForm>
              <Input type="text" placeholder="Nome" value={formData.name} disabled />
              <Input type="email" placeholder="Email" value={formData.email} disabled />
              <select value={formData.state} onChange={handleChange} disabled>
                <option value="">Selecione o estado</option>
                {Estados.map((estado, index) => (
                  <option key={index} value={estado.sigla}>
                    {estado.sigla}
                  </option>
                ))}
              </select>
              <Input type="text" placeholder="Cidade" value={formData.city} disabled />
            </StudentForm>
          </div>
        </ModalContainer>
      )}
    </Overlay>
  );
};
