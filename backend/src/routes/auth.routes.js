import { Router } from "express";
import {registerUser,login_user} from "../controllers/auth.controller.js"
import {register_user_validator} from '../validators/auth.validator.js'
import {validate_request} from '../middleware/validation.middleware.js'
import { authenticate_user } from "../middleware/auth.middleware.js";


const router=Router();

router.post('/login',login_user);

router.get('/profile',authenticate_user,(req,res)=>{
  res.status(200).json({success:true,user:req.user})
})

router.post('/register',register_user_validator,validate_request,registerUser);

export default router;
