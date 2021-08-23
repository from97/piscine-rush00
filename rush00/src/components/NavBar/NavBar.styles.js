import styled from "styled-components";

const NavBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #eee;
  margin: 10px 20px;
  border-radius: 5px;

  a {
    margin: 10px 20px;

    :hover {
      color: #036581;
    }
  }
`;

export default NavBarStyled;
