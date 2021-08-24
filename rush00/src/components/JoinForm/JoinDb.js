const JoinDb = async (props) => {
  const [email, passwd, nickname] = props;
  console.log(props);
  fetch("http://localhost:4242/auth/signup", {
    method: "POST",
    headers: {
      username: nickname,
      password: passwd,
      email: email,
    },
  })
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
};

export default JoinDb;
