const express = require("express");
const router = express.Router();
const { verify } = require("./../auth/service.js");

router.get(process.env.ENDPOINT_PROFILE_ID, async (request, response) => {
  if (request.user.id == request.params.id) {
    response.status(200).send(
      JSON.stringify({
        username: request.user.username,
        email: request.user.email,
        createdAt: request.user.createdAt,
      })
    );
    return;
  }
  response.status(400).send(verify.error(12, "invalid request"));
});

module.exports = router;
