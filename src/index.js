require("dotenv").config();
const PORT = process.env.PORT;

const bodyParser = require("body-parser");
const express = require("express");

const usersRoutes = require("./routes/users");

const app = express();

app.use("/users", bodyParser.json(), usersRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port ${PORT}`);
});
