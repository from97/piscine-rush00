import React from "react";

function ProfilePage() {
  const id = "rush00";
  const getUser = () => {
    fetch(`http://localhost:4242/profile/${id}`)
      .then((res) => res.text())
      .then((res) => console.log("Profile Page"));
  };
  return <div></div>;
}

export default ProfilePage;
