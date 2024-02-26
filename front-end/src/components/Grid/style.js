import styled from "styled-components";

export const GridContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  background-color: ${(props) => props.theme['blue-700']};
  padding: 10px;
  box-shadow: 3px 3px 10px #000;
  border-radius: 10px;

  th {
    text-align: left;
    color: ${(props) => props.theme['gray-50']};
    padding-bottom: 5px;
  }

  td {
    padding-top: 10px;
    color: ${(props) => props.theme['gray-50']};
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme['gray-100']};
  border-radius: 10px;
  color: #fff;
  background-color: ${(props) => props.theme['blue-700']};

  &::placeholder {
    color: ${(props) => props.theme['gray-50']};
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    
  }
`;

export const EditButton = styled.a`
  color: ${(props) => props.theme['gray-50']};
  border: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme['gray-100']};
  }
`;

export const ExcludeButton = styled.a`
  color:${(props) => props.theme['red-500']};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['red-700']};
  }
`;

export const ViewButton = styled.a`
  color:${(props) => props.theme['green-500']};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['green-300']};
  }
`;
