import React, { useState } from "react";
import NavBarStyled from "./NavBar.styles";
import { Link } from "react-router-dom";

function NavBar() {
  const [mode, setMode] = useState("home");

  return (
    <NavBarStyled>
      <NavBarStyled.LinkWrapper
        onClick={() => setMode("home")}
        isActive={mode === "home"}
      >
        <Link to="/">HOME</Link>
      </NavBarStyled.LinkWrapper>
      <NavBarStyled.LinkWrapper
        onClick={() => setMode("profile")}
        isActive={mode === "profile"}
      >
        <Link to="/profile">PROFILE</Link>
      </NavBarStyled.LinkWrapper>
      <NavBarStyled.LinkWrapper
        onClick={() => setMode("login")}
        isActive={mode === "login"}
      >
        <Link to="/login">LOGIN</Link>
      </NavBarStyled.LinkWrapper>
      <NavBarStyled.LinkWrapper
        onClick={() => setMode("board")}
        isActive={mode === "board"}
      >
        <Link to="/board">BOARD</Link>
      </NavBarStyled.LinkWrapper>
    </NavBarStyled>
  );
}

export default NavBar;
