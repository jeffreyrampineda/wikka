const createError = require("http-errors");
const Story = require("../models/story.model");
const Author = require("../models/author.model");

async function stories_list(req, res, next) {
  try {
    const result = await Story.find().populate(
      "author",
      "first_name last_name"
    );
    if (!result) {
      return res.send([]);
    }

    return res.send(result);
  } catch (err) {
    return next(createError(500));
  }
}

async function stories_detail(req, res, next) {
  try {
    const { id } = req.params;
    const result = await Story.findById(id).populate("author");
    if (!result) {
      return res.sendStatus(404);
    }

    return res.send(result);
  } catch (err) {
    return next(createError(500));
  }
}

module.exports = {
  stories_list,
  stories_detail,
};
