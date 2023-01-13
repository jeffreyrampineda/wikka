const express = require("express");
const router = express.Router();
const Story = require("../models/story");
const Author = require("../models/author");

router.get("/", async function (req, res, next) {
  const result = await Story.find().populate("author", "first_name last_name");
  res.send(result);
});

module.exports = router;
