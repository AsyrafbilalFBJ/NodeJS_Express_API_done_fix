const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./controller");

router.post("/register", createUser);
router.post("/login", login);
router.get("/users", checkToken, getUsers);
router.get("/users/:id", checkToken, getUserByUserId);
router.patch("/updateUser/:id", checkToken, updateUsers);
router.delete("/deleteUser/:id", checkToken, deleteUser);

module.exports = router;