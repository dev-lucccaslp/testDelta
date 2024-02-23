import React from "react";
import { GridContainer, Table, EditButton } from "./style";

const Grid = ({ students }) => {
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
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.state}</td>
              <td>{student.email}</td>
              <EditButton>Editar</EditButton>
            </tr>
          ))}
          
        </tbody>
      </Table>
    </GridContainer>
  );
};

export default Grid;
