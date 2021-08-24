const express = require("express");
const commentService = require("./service.js");
const router = express.Router();

router.get("/board/:id/comment", (request, response) => {
  commentService.getComments(request, response);
});

router.post("/board/:id/comment", (request, response) => {
  console.log(request.params);
});

router.delete("/board/:id/comment/:commentId", (request, response) => {
  console.log(request.params);
});

router.patch("/board/:id/comment/:commentId", (request, response) => {
  console.log(request.params);
});

module.exports = router;
