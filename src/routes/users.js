const express = require("express");

const userControllers = require("../controllers/users");

const router = express.Router();

router.post("/", userControllers.createNewUser);

router.get("/", userControllers.getAllUsers);

router.patch("/:id", userControllers.updateUser);

router.patch("/:id", userControllers.deleteUser);

module.exports = router;
