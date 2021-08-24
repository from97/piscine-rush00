import axios from "axios";

const LoginDb = async (props) => {
  const [email, passwd] = props;
  console.log(
    JSON.stringify({
      email: email,
      password: passwd,
    })
  );
  await axios
    .post("http://localhost:4242/auth/login", {
      email: email,
      password: passwd,
    })
    .then((response) => {
      console.log("res: ", response);
      alert(`${email} 님 안녕하세요 :)`);
    })
    .catch((e) => alert(e));
};

export default LoginDb;
