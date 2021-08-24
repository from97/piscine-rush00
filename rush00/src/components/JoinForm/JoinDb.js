const JoinDb = async (props) => {
  const [email, passwd, nickname] = props;
  console.log(props);
  fetch("http://localhost:4242/auth/signup", {
    method: "POST",
    payload: {
      username: nickname,
      email: email,
      password: passwd,
    },
  })
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
};

export default JoinDb;
