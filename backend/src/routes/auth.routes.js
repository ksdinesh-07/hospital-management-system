import { Router } from "express";
import {registerUser,login_user} from "../controllers/auth.controller.js"
const router=Router();

router.post('/register',registerUser)
router.post('/login',login_user);



import { authenticate_user } from "../middleware/auth.middleware.js";

router.get('/profile',authenticate_user,(req,res)=>{
  res.status(200).json({success:true,user:req.user})
})

export default router;
