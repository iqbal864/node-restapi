require("dotenv").config();

const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const express = require("express");
const usersRoutes = require("./routes/users");
const auth = require("./middleware/auth");

const app = express();

app.use(bodyParser.json());

app.use("/users", auth, usersRoutes);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di port ${PORT}`);
});
