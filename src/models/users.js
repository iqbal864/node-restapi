const dbPool = require("../config/database");

const getAllUsers = () => {
  const query = "SELECT * FROM users";
  return dbPool.execute(query);
};

const createNewUser = (body) => {
  const query = `INSERT INTO users (name, email, address) VALUES ('${body.name}', '${body.email}', '${body.address}')`;
  return dbPool.execute(query);
};

const updateUser = (body, id) => {
  const query = `UPDATE users SET name=?, email=?, address=? WHERE id=?`;
  return dbPool.execute(query, [body.name, body.email, body.address, id]);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
};
