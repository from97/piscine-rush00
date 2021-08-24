const { Board, Comment } = require("./../models");
const { verify } = require("./../auth/service.js");

const getComments = async (request, response) => {
  const postId = parseInt(request.params.id);
  if (isNaN(postId)) {
    response.status(200).send(verify.error(10, "bad request"));
    return;
  }
  try {
    const comments = await Comment.findAll({
      include: {
        model: Board,
        where: { id: postId },
      },
    });
    console.log(comments);
  } catch (e) {
    console.log(e);
    response.status(200).send(verify.error(5, "query error occured"));
  }
};

module.exports = { getComments };
