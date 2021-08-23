import React, { useState } from "react";
import styled from "styled-components";

const JoinFormStyled = styled.div`
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

function JoinForm() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirm_passwd, setConfirmPasswd] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswd = (e) => {
    setPasswd(e.target.value);
  };

  const handleComfirmPasswd = (e) => {
    setConfirmPasswd(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email, passwd, confirm_passwd);
  };

  return (
    <JoinFormStyled>
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
              onChange={handlePasswd} />
          </div>
          <div>
            <label htmlFor="confirm_passwd">Confirm Password: </label>
            <input
              id="confirm_passwd"
              type="password"
              value={confirm_passwd}
              onChange={handleComfirmPasswd}
            />
          </div>
          <button onClick={handleClick}>Sign in</button>
        </form>
      </div>
    </JoinFormStyled>
  );
}

export default JoinForm;
