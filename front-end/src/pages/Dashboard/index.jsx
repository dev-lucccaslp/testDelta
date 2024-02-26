import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Grid from "../../components/Grid";

import { DashboardContainer, DashboardContent } from "./style";
import { ModalAddStudent } from "../../components/ModalAddStudent";
import { ModalEditAndView } from "../../components/ModalEditAndView";

export const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenEdit, setModalIsOpenEdit] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState()
  const [modalType, setModalType] = useState()
  const [dadsStudents, setDadsStudents] = useState({})

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const openModalEdit = (id, type, dadsStudents) => {
    setModalIsOpenEdit(true);
    setCurrentStudentId(id)
    setModalType(type)
    setDadsStudents(dadsStudents)
  };

  const closeModalEdit = () => {
    setModalIsOpenEdit(false);
    setCurrentStudentId('')
    setModalType('')
    setDadsStudents({})
  };

  return (
    <DashboardContainer>
      <Menu />
      <DashboardContent>
        <Header onAddStudent={openModal} />
        <ModalAddStudent isOpen={modalIsOpen} onClose={closeModal} />
        <ModalEditAndView
          isOpen={modalIsOpenEdit}
          onClose={closeModalEdit}
          idStudent={currentStudentId}
          isType={modalType}
          isDadsStudents={dadsStudents}
        />
        <Grid
         openModal={openModalEdit}
        />
      </DashboardContent>
    </DashboardContainer>
  );
};

