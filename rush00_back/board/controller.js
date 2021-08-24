const express = require("express");
const boardService = require("./service.js");
const router = express.Router();

router.get("/", (request, response) => {
  boardService.getPostList(request, response);
});

router.post("/", (request, response) => {
  boardService.newPost(request, response);
});

router.get("/:id", (request, response) => {
  boardService.getPost(request, response);
});

router.patch("/:id", (request, response) => {
  boardService.updatePost(request, response);
});

router.delete("/:id", (request, response) => {
  boardService.deletePost(request, response);
});

module.exports = router;
