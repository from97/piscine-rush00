import axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import { UserAuthenticated } from "../App";

const LogoutPageStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #ddd;
  border-radius: 20px;
  margin: 90px auto;
  padding: 30px 0 60px 0;
  letter-spacing: 0.05em;
  h2 {
    font-size: 21px;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.1em;
    margin-bottom: 45px;
  }
`;

function LogoutPage() {
  const [state, actions] = useContext(UserAuthenticated);
  const handleLogout = async () => {
    await axios
      .get("http://localhost:4242/auth/signout")
      .then(() => {
        alert("로그아웃되셨습니다.");
        window.location.replace("/");
      })
      .catch((e) => alert(e));
  };

  actions.setNickname(null);
  actions.setEmail(null);
  handleLogout();

  return (
    <LogoutPageStyled>
      <h2>로그아웃 페이지입니다.</h2>
    </LogoutPageStyled>
  );
}

export default LogoutPage;
