import React from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Grid from "../../components/Grid";

import { DashboardContainer, DashboardContent } from "./style";

export const Dashboard = () => {
  // Simulando dados de alunos
  const students = [
    { id: 1, name: "John Doe", city: "New York", state: "NY", email: "john@example.com" },
    { id: 2, name: "Jane Smith", city: "Los Angeles", state: "CA", email: "jane@example.com" },
    // Adicione mais dados de alunos conforme necessário
  ];

  const handleAddStudent = () => {
    // Implemente a lógica para adicionar alunos
    console.log("Adicionar alunos");
  };

  return (
    <DashboardContainer>
      <Menu />
      <DashboardContent>
        <Header onAddStudent={handleAddStudent} />
        <Grid students={students} />
      </DashboardContent>
    </DashboardContainer>
  );
};

