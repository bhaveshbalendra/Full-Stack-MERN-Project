const User = require("../models/userModel.js");

const handleCreateUser = async (req, res) => {
  const body = req.body;
  if (!body.email || !body.fname || !body.lname | !body.password) {
    return res
      .status(400)
      .json({ status: "Incomplete Data all field are required" });
  }
  const result = await User.create({
    fname: body.fname,
    lname: body.lname,
    email: body.email,
    password: body.password,
  });
  return res.status(200).json({ status: "success", result: result });
};

const handleGetAllUsers = async (req, res) => {
  const result = await User.find();
  return res.status(200).json({ status: "success", result: result });
};

const handleGetUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400).json({ status: "User not found" });
  }
  return res.status(200).json({ status: "success", user: user });
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ status: "success user deleted" });
};

const handleUpdateUserById = async (req, res) => {
  const body = req.body;
  await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  return res.status(200).json({ status: "user updated success" });
};
module.exports = {
  handleCreateUser,
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
};
