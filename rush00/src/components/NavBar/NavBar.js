import React from "react";
import NavBarStyled from "./NavBar.styles";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavBarStyled>
      <Link to="/">HOME</Link>
      <Link to="/profile">PROFILE</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/board">BOARD</Link>
    </NavBarStyled>
  );
}

export default NavBar;
