const LoginDb = async (props) => {
  const [email, passwd] = props;
  console.log(props);
  fetch("http://localhost:4242/auth/login", {
    method: "POST",
    body: {
      email: email,
      password: passwd,
    },
  })
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
};

export default LoginDb;
