import axios from "axios";

const JoinDb = (props) => {
  const [email, passwd, nickname] = props;
  let params = {
    username: nickname,
    email: email,
    password: passwd,
  };
  axios
    .post("http://localhost:4242/auth/signup", JSON.stringify(params))
    .then((response) => console.log("res: ", response))
    .catch((e) => console.log("err: ", e));
};

export default JoinDb;
