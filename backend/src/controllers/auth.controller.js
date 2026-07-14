import {register_user_service,login_user_service} from "../services/auth.service.js"

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

  export const login_user=async (req,res)=>{
    console.log("login controller reached")
    try{
      const result=await login_user_service(req.body)
      res.status(200).json({success:true,message:"login successfull",data:result})
    }catch(err){
      console.log(err)
      res.status(400).json({
        success:false,
        message:err.message
      })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }
  }
