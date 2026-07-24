const express = require("express");
const router = express.Router();

const {
    registerUser,
    getUsers,
    updateUser,
    deleteUser
} = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/users", getUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;