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

const InputWithLabel = ({ label, ...rest }) => (
  <div>
    <label>{label}</label>
    <input {...rest} />
  </div>
);

function JoinForm() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirm_passwd, setConfirmPasswd] = useState("");
  const [nickname, setNickname] = useState("");
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

  const handleNickname = (e) => {
    setNickname(e.target.value);
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
      console.log(email, passwd, confirm_passwd, nickname);
    }
  };

  return (
    <JoinFormStyled>
      <div>
        <h2>회원가입</h2>
        <form>
          <InputWithLabel
            label="Email: "
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <InputWithLabel
            label="Password: "
            id="passwd"
            type="password"
            value={passwd}
            onChange={handlePasswd}
          />
          <InputWithLabel
            label="Confirm Password: "
            id="confirm_passwd"
            type="password"
            value={confirm_passwd}
            onChange={handleComfirmPasswd}
          />
          {error ? <div className="error">{error}</div> : <div></div>}
          <InputWithLabel
            label="Nickname: "
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNickname}
          />
          <button className="uploadButton" onClick={handleClick}>
            Sign in
          </button>
        </form>
      </div>
    </JoinFormStyled>
  );
}

export default JoinForm;
