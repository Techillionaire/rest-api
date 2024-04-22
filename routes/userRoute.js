const express = require("express")
const router = express.Router()
const { getAllUsers, getSingleUser, createAUser, updateUser, deleteUser } = require("../controllers/userController")

router.route(`/users`).get(getAllUsers).post(createAUser)
router.route(`/users/:id`).get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router