import styled from "styled-components";

export const GridContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme['gray-400']};
  padding: 10px;
  box-shadow: 3px 3px  10px #000;
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


export const EditButton = styled.a`
  color: ${(props) => props.theme['gray-50']};

  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: #b58c46;
  }

`;

export const ExcludeButton = styled.a`
  color:${(props) => props.theme['red-500']};
  border: none;
  padding: 2px;

  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['red-700']};;
  }
`;