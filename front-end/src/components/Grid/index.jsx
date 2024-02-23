import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

import {
  GridContainer,
  Table,
  EditButton,
  ExcludeButton
} from "./style";

import { useStorage } from "../../hooks/useStorage";
import { newApi } from "../../services/newApi";
import { useStudents } from "../../context/StudentsContext"
import { toast } from "sonner";

const Grid = () => {
  const { getItem } = useStorage();
  const data = getItem('data');

  const { studentList, setStudentList } = useStudents();

  console.log('contex:', studentList)

  const handleDeleteStudent = async (id) => {
    try {
      const userConfirmation = new Promise((resolve, reject) => {
        const confirmed = window.confirm("Tem certeza que deseja excluir este estudante?");
        if (confirmed) {
          resolve(); 
        } else {
          reject("Exclusão cancelada pelo usuário"); //
        }
      });
      
      await userConfirmation;
      const response = await newApi.delete(`students/${id}`, {
        headers: {
          Authorization: `${data.type} ${data.token}`
        }
      });
      const filterStudentList = studentList.filter((item) => item.id !== id)
      setStudentList(filterStudentList)
      toast.success('Estudante excluso com sucesso')

    } catch (error) {
      console.log(error.message);
      toast.success('Erro ao excluir estudante')
    }
  }

  return (
    <GridContainer>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {studentList.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.state}</td>
              <td>{student.email}</td>
              <EditButton><FaRegEdit /></EditButton>
              <ExcludeButton onClick={() => handleDeleteStudent(student.id)}>
                <FaRegTrashCan />
              </ExcludeButton>
            </tr>
          ))}
        </tbody>
      </Table>
    </GridContainer>
  );
};

export default Grid;
