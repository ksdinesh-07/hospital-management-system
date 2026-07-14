import {Router} from "express"
import {authenticate_user} from "../middleware/auth.middleware.js"
import {authorize_role} from "../middleware/role.middleware.js"

const router=Router();

router.get("/admin",authenticate_user,authorize_role("admin"),(req,res)=>{
  res.status(200).json({message:"welcome Admin",user:req.user})
})

router.get("/admin-doctor",authenticate_user,authorize_role("admin","doctor"),(req,res)=>{
  res.status(200).json({message:"Welcome patient",user:req.user})
})

router.get("/doctor",authenticate_user,authorize_role("doctor"),(req,res)=>{
  res.status(200).json({message:"Welcome doctor",user:req.user})
})

export default router;