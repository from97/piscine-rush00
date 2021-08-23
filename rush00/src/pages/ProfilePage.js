import React from "react";
import styled from "styled-components";

const ProfilePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 21px;
    font-weight: 600;
    text-align: left;
  }
`;

function ProfilePage() {
  const email = "rush00@student.42seoul.kr";
  const nickname = "rush00";

  // const getUser = () => {
  // };

  return (
    <ProfilePageStyled>
      <h2>{email}의 프로필</h2>
      <ul>
        <li key="email">Email: {email}</li>
        <li key="nickname">Nickname: {nickname}</li>
      </ul>
    </ProfilePageStyled>
  );
}

export default ProfilePage;
