import axios from "axios";

const JoinDb = async (props) => {
  const [email, passwd, nickname] = props;
  const params = new URLSearchParams([
    ["username", nickname],
    ["email", email],
    ["password", passwd],
  ]);
  await axios
    .post("http://localhost:4242/auth/signup", {}, { params })
    .then((response) => console.log("res: ", response))
    .catch((e) => console.log("err: ", e));
};

export default JoinDb;
