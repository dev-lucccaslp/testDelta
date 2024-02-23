import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: ${(props) => props.theme['blue-600']};
  color: #fff;
  width: 16%;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
