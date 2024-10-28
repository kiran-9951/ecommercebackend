const express =require("express");
const userController =require("../controllers/userController");
const router = express.Router();


router.post("/signup",userController.Signup);
router.post("/login",userController.Login)

module.exports =router