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
      message: "Create data user sukses",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      errorMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    await userModel.updateUser(body, id);
    res.json({
      message: "Update data user sukses",
      data: {
        id,
        body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error!",
      errorMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
