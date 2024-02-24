const express = require("express");
const router = express.Router();
const { verifyAccessToken } = require("../middlewares.js");
const { getTasks, getTask, postTask, putTask, deleteTask } = require("../controllers/taskControllers");

router.get("/", verifyAccessToken, getTasks);
router.get("/:taskId", verifyAccessToken, getTask);
// router.post("/", verifyAccessToken, postTask);
router.post("/", verifyAccessToken, postTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

module.exports = router;
