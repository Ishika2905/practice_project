const express = require("express");
const router = express.Router();
const jwtAuthMiddleware = require("../Middlewares/jwtmiddleware").validateJwtToken
const {
    registerUser,
    loginUser
    // loginUser
}=require("../controllers/userController");
const myAccount=async(req,res)=>{
    try {
        const userId = req.user.id;
        const user = await getUserById(userId);
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        res.json({
          id: user._id,
          name: user.name,
          email: user.email,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
      }
}
router.post("/register" , registerUser);
router.post("/login",loginUser);
router.get("/my-account", jwtAuthMiddleware, myAccount);
module.exports=router;