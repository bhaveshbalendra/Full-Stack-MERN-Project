const User = require("../models/userModel");
const { setUser } = require("../service/auth");

async function handleUserSignUp(req, res) {
  const { username, email, password } = req.body;

  const user = await User.create({ name: username, email, password });
  console.log(user);
  res.status(200).json({ message: "user created" });
}

async function handleUserLogIn(req, res) {
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(404).json({ message: "Invalid Username or Password" });
  }
  const token = setUser(user);
  console.log(token);
  res.cookie("token", token);

  return res.status(200).json({ message: "login success full" });
}

module.exports = { handleUserSignUp, handleUserLogIn };
