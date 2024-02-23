import styled from "styled-components";

export const GridContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 10px;

  border-radius: 10px;
  tr {
   
  }

  th {
    text-align: left;
    color: ${(props) => props.theme['gray-50']};
    padding-bottom: 5px;
  }
  td {
    padding-top: 10px;
    color: ${(props) => props.theme['gray-50']};
    
    &:hover {
     
    }
  }
`;


export const EditButton = styled.button`
  background-color: #d39934;
  color: #fff;
  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b58c46;
  }
`;