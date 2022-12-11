const express = require("express");
const router = express.Router();
const StoriesService = require("../services/stories.service");

router.get("/", function (req, res, next) {
  res.send(StoriesService.getStories());
});

module.exports = router;
