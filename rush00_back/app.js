const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const auth = require("./auth/controller.js");
const board = require("./board/controller.js");
const comment = require("./comment/controller.js");
const profile = require("./profile/controller.js");
const { sequelize } = require("./models");

dotenv.config();
sequelize.sync();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(process.env.ENDPOINT_AUTH, auth);
app.use(auth.jwtGuards);
app.get(
  `${process.env.ENDPOINT_AUTH}${process.env.ENDPOINT_AUTH_SIGNOUT}`,
  auth.signOut
);
app.use(process.env.ENDPOINT_BOARD, board);
app.use(process.env.ENDPOINT_PROFILE, profile);
app.use(comment);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/`);
});

/*
User.update(
  {
    refreshToken: null,
  },
  {
    where: { id: 1 },
  }
);

Board.create({
  author: "yahong",
  title: "title1",
  content: "c o n t e n t 1 4  5 3 1",
});

Board.create({
  author: "yahong",
  title: "title1",
  content: "c o n t e n t 1 4  5 3 1",
});

Comment.create({
  postId: 1,
  author: "yahong",
  content: "comme nt 1 4  5 3 1",
});

Comment.findAll({
  include: {
    model: Board,
    where: { id: 2 },
  },
}).then((comment) => {
  console.log("===============================================");
  console.log(comment);
});

Board.update(
  {
    author: "yahon",
  },
  {
    where: { id: 2 },
  }
);

Board.destroy({
  where: { id: 1 },
});
*/
