import React, { useState } from "react";
import styled from "styled-components";

const JoinFormStyled = styled.div`
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

function JoinForm() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirm_passwd, setConfirmPasswd] = useState("");
  const [error, setError] = useState(null);

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
    if (passwd !== confirm_passwd) {
      e.preventDefault();
      setError("입력하신 비밀번호가 다릅니다.");
      setPasswd("");
      setConfirmPasswd("");
    } else {
      e.preventDefault();
      setError(null);
      console.log(email, passwd, confirm_passwd);
    }
  };

  return (
    <JoinFormStyled>
      <div>
        <h2>회원가입</h2>
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
          <div>
            {error ? <div className="error">{error}</div> : <div></div>}
            <label htmlFor="confirm_passwd">Confirm Password: </label>
            <input
              id="confirm_passwd"
              type="password"
              value={confirm_passwd}
              onChange={handleComfirmPasswd}
            />
          </div>
          <button className="uploadButton" onClick={handleClick}>
            Sign in
          </button>
        </form>
      </div>
    </JoinFormStyled>
  );
}

export default JoinForm;
