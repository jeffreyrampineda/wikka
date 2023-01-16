const Story = require("../models/story.model");
const Author = require("../models/author.model");

async function stories_list(req, res, next) {
  const result = await Story.find().populate("author", "first_name last_name");
  res.send(result);
}

async function stories_detail(req, res, next) {
  const { id } = req.params;
  const result = await Story.findById(id).populate("author");
  if (!result) {
    res.sendStatus(404);
    return;
  }
  res.send(result);
}

module.exports = {
  stories_list,
  stories_detail,
};
