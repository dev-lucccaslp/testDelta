import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { VscOpenPreview } from "react-icons/vsc";


import {
  GridContainer,
  Table,
  EditButton,
  ExcludeButton,
  ViewButton,
  FilterInput // Novo componente de entrada para filtrar pelo nome
} from "./style";

import { newApi } from "../../services/newApi";
import { useStudents } from "../../context/StudentsContext";
import { toast } from "sonner";

const Grid = ({ openModal }) => {
  const { studentList, setStudentList, userState: userDads } = useStudents();

  const [filterName, setFilterName] = useState("");

  const handleDeleteStudent = async (id) => {
    try {
      const userConfirmation = new Promise((resolve, reject) => {
        const confirmed = window.confirm(
          "Tem certeza que deseja excluir este estudante?"
        );
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
      const filterStudentList = studentList.filter((item) => item.id !== id);
      setStudentList(filterStudentList);
      toast.success("Estudante excluído com sucesso");
    } catch (error) {
      console.log(error.message);
    }
  };

  const filteredStudents = studentList.filter((student) =>
    student.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <GridContainer>
      <FilterInput
        type="text"
        placeholder="Filtre pelo nome"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Email</th>
            <th>Ver</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.state}</td>
              <td>{student.email}</td>
              <td>
                <ViewButton
                  onClick={() => openModal(student.id, "view", student)}
                >
                  <VscOpenPreview size={20} />
                </ViewButton>
              </td>
              <td>
                <EditButton
                  onClick={() => openModal(student.id, "edit", student)}
                >
                  <FaRegEdit size={20} />
                </EditButton>
              </td>
              <td>
                <ExcludeButton
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  <FaRegTrashCan size={20} />
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
