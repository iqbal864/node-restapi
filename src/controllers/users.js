const userModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [rows] = await userModel.getAllUsers();

    res.json({
      message: "Get all users sukses",
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      errorMessage: error,
    });
  }
};

const createNewUser = async (req, res) => {
  const body = req.body;
  try {
    await userModel.createNewUser(body);
    res.json({
      message: "Post data user sukses",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      errorMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
};
