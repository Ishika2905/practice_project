const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser
    // loginUser
}=require("../controllers/userController");
router.post("/register" , registerUser);
router.post("/login",loginUser);
module.exports=router;