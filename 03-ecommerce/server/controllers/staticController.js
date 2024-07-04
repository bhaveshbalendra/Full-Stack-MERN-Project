const User = require("../models/userModel");

async function handleHomeValidUser(req, res) {
  const user = req.user;
  return res.status(200).json({ message: "valid user", user });
}

module.exports = { handleHomeValidUser };
