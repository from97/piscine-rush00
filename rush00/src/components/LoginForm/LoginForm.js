import React, { useState } from "react";
import styled from "styled-components";

const LoginFormStyled = styled.div`
  div {
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  button {
    padding: 3px;
    border: 1px solid black;
  }
`;

function LoginForm() {
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
    console.log(email, passwd);
  };

  return (
    <LoginFormStyled>
      <div>
        <h2>로그인</h2>
        <form>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label htmlFor="passwd">Password: </label>
            <input
              id="passwd"
              type="password"
              value={passwd}
              onChange={handlePasswd}
            />
          </div>
          <button onClick={handleClick}>Log in</button>
        </form>
      </div>
    </LoginFormStyled>
  );
}

export default LoginForm;
