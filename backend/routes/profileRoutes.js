const express = require("express");
const router = express.Router();
const { verifyAccessToken } = require("../middlewares.js");
const { getProfile } = require("../controllers/profileControllers");


router.get("/", verifyAccessToken, getProfile);

module.exports = router;