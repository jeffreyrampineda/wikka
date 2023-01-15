const express = require("express");
const router = express.Router();
const stories_controller = require("../controllers/stories.controller");

router.get("/api/stories", stories_controller.stories_list);

router.get("/api/stories/:id", stories_controller.stories_detail);

module.exports = router;
