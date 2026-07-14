import {register_user_service} from "../services/auth.service.js"

export const registerUser= async (req,res)=>{
  try{
    const data=req.body
    const result=await register_user_service(data)
      res.status(201).json({
      "success": true,
      "message": "User registered successfully",
      "data": result
      })
    
  }
  catch(err){
      res.status(400).json({
      "success": false,
      "message": err.message
      })
    }
  }
