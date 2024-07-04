const express = require("express");
const { handleHomeValidUser } = require("../controllers/staticController");
const router = express.Router();

router.get("/", handleHomeValidUser);

module.exports = router;
