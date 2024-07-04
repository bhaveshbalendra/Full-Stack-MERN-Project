const express = require("express");
const {
  handleCreateUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
} = require("../controllers/userController");
const router = express.Router();

router.post("/create", handleCreateUser);
router.get("/", handleGetAllUsers);
router.get("/user/:id", handleGetUserById);
router.patch("/update/:id", handleUpdateUserById);
router.delete("/delete/:id", handleDeleteUserById);

module.exports = router;
