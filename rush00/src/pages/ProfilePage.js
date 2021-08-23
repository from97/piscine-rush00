import React from "react";
import styled from "styled-components";

const ProfilePageStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.05em;
  border: 1px dashed #ddd;
  margin: 90px auto;
  padding: 30px 0 60px 0;
  h2 {
    font-size: 21px;
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.1em;
    margin-bottom: 45px;
  }
  li {
    line-height: 35px;
  }
  .username {
    color: #00779b;
    margin-right: 2px;
  }
  .profile_field {
    font-weight: 500;
    margin-right: 5px;
  }
`;

function ProfilePage() {
  const email = "rush00@student.42seoul.kr";
  const nickname = "rush00";

  // const getUser = () => {
  // };

  return (
    <ProfilePageStyled>
      <h2>
        <span className="username">{nickname}</span>의 프로필
      </h2>
      <ul>
        <li key="nickname">
          <span className="profile_field">Nickname: </span>
          {nickname}
        </li>
        <li key="email">
          <span className="profile_field">Email: </span>
          {email}
        </li>
      </ul>
    </ProfilePageStyled>
  );
}

export default ProfilePage;
