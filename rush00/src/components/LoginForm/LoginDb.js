import axios from "axios";

function LoginDb(props) {
  const [email, passwd, state, actions] = props;
  console.log(
    JSON.stringify({
      email: email,
      password: passwd,
    })
  );
  const handleLogin = async () => {
    await axios
      .post("http://localhost:4242/auth/login", {
        email: email,
        password: passwd,
      })
      .then((response) => {
        console.log("res: ", response);
        actions.setEmail(email);
        alert(`${email} 님 안녕하세요 :)`);
        console.log(state, actions);
        return true;
      })
      .catch((e) => {
        alert(e);
        return false;
      });
  };
  handleLogin();
}

export default LoginDb;
