const express = require("express");
const commentService = require("./service.js");
const router = express.Router();

router.get("/board/:id/comment", (request, response) => {
  commentService.getComments(request, response);
});

router.post("/board/:id/comment", (request, response) => {
  commentService.newComment(request, response);
});

router.delete("/board/:id/comment/:commentId", (request, response) => {
  commentService.deleteComment(request, response);
});

router.patch("/board/:id/comment/:commentId", (request, response) => {
  commentService.updateComment(request, response);
});

module.exports = router;
