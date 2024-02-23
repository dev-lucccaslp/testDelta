import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Grid from "../../components/Grid";

import { DashboardContainer, DashboardContent } from "./style";
import { ModalAddStudent } from "../../components/ModalAddStudent";

export const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    
  };

  return (
    <DashboardContainer>
      <Menu />
      <DashboardContent>
        <Header onAddStudent={openModal} />
        <ModalAddStudent isOpen={modalIsOpen} onClose={closeModal} />
        <Grid />
      </DashboardContent>
    </DashboardContainer>
  );
};

