import {register_user_service,login_user_service} from "../services/auth.service.js"
import async_handler from "../utils/async_handler.js"

export const registerUser=async_handler(async (req,res)=>{

    const data=req.body
    const result=await register_user_service(data)
      res.status(201).json({"success": true,"message": "User registered successfully","data": result})
});

export const login_user=async_handler(async (req,res)=>{

  const result=await login_user_service(req.body)
  res.status(200).json({success:true,message:"login successfull",data:result})        
});
