const express = require("express");
const router = express.Router();
const getUsers = require("../controllers/users");
router.get("/", getUsers.getAll);
router.get("/:id", getUsers.getSingle);

router.post("/", getUsers.createUser);

router.put("/:id", getUsers.updateUser);

router.delete("/:id", getUsers.deleteUser);

module.exports = router;
