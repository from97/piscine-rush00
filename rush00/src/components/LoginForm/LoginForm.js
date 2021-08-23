import React, { useState } from "react";
import styled from "styled-components";

const LoginFormStyled = styled.div`
  div {
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    background-color: #f2f2f2;
    margin: 1px 1px 1px 1px;
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
    margin: 40px 0;
    :hover {
      background-color: #343a3f;
      color: #fff;
    }
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
          <button className="uploadButton" onClick={handleClick}>
            Log in
          </button>
        </form>
      </div>
    </LoginFormStyled>
  );
}

export default LoginForm;
