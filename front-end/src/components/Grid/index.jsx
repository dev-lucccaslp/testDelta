import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";

import {
  GridContainer,
  Table,
  EditButton,
  ExcludeButton,
  ViewButton
} from "./style";

import { newApi } from "../../services/newApi";
import { useStudents } from "../../context/StudentsContext"
import { toast } from "sonner";

const Grid = () => {
  const { studentList, setStudentList, userState: userDads } = useStudents();

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
          Authorization: `${userDads.type} ${userDads.token}`
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
              <td>
                <ViewButton>
                  <VscOpenPreview size={20}/>
                </ViewButton>
              </td>
              <td>
                <EditButton>
                  <FaRegEdit size={20}/>
                </EditButton>
              </td>
              <td>
                <ExcludeButton onClick={() => handleDeleteStudent(student.id)}>
                  <FaRegTrashCan size={20}/>
                </ExcludeButton>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </GridContainer>
  );
};

export default Grid;
