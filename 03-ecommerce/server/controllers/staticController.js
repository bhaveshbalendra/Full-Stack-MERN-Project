const User = require("../models/userModel");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.render("/");
}

module.exports = { handleUserSignUp };
