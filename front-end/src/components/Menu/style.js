import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme['blue-700']};
  color: #fff;
  width: 20%;
  box-shadow: 1px 0px 12px #000;
  border-radius: 0 0 20px 0;

  display:  flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 5px 0 3px 10px;
  }

  footer {
    border-top: 1px solid #fff;
    padding: 10px;
    margin-bottom: 15px;
  }

  a {
    color: ${(props) => props.theme['white']};;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 5px;
     
    cursor: pointer;
    &:hover{
      color: ${(props) => props.theme['red-500']};
      text-decoration: underline;
    }
  }
`;
