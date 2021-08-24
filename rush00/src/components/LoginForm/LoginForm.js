import React, { useContext, useState } from "react";
import LoginDb from "./LoginDb";
import styled from "styled-components";
import { UserAuthenticated } from "../../App";

const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    letter-spacing: 0.1em;
  }
  form {
    width: 320px;
    height: 290px;
    box-sizing: border-box;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login_field {
    label {
      font-weight: 500;
    }
    width: 100%;
    margin-bottom: 25px;
    letter-spacing: 0.1em;
  }
  input {
    width: 100%;
    height: 25px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    margin: 1px 1px 1px 1px;
    color: #036581;
  }
  .error {
    color: red;
  }
  .uploadButton {
    width: 80px;
    text-align: center;
    border: 1px solid #343a3f;
    border-radius: 20px;
    padding: 6px 10px;
    font-weight: 600;
    margin: 40px auto 60px;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
  }
`;

function LoginForm() {
  const [state, actions] = useContext(UserAuthenticated);
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswd = (e) => {
    setPasswd(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    LoginDb([email, passwd, state, actions]);
    // window.location.replace("/");
  };

  return (
    <LoginFormStyled>
      <h2>로그인</h2>
      <form>
        <div className="login_field">
          <label htmlFor="email">Email : </label>
          <input id="email" type="email" value={email} onChange={handleEmail} />
        </div>
        <div className="login_field">
          <label htmlFor="passwd">Password : </label>
          <input
            id="passwd"
            type="password"
            value={passwd}
            onChange={handlePasswd}
          />
        </div>
        <button className="uploadButton" onClick={handleClick}>
          Log in
        </button>
        <p>로그인 후에 서비스를 이용할 수 있습니다. </p>
      </form>
    </LoginFormStyled>
  );
}

export default LoginForm;
