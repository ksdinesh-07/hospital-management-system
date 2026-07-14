import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const authenticate_user=async (req,res,next)=>{

  const auth_header=req.headers.authorization;
  if (!auth_header || !auth_header.startsWith("Bearer ")){
    return res.status(401).json({
      success:false,
      message:"unauthorized, Token not provided"
    });
  }

  const token=auth_header.split(" ")[1];
  try{
  const decoded=jwt.verify(token,process.env.JWT_SECRET)
  const user=await User.findById(decoded.user_id)
  if (!user){
    return res.status(401).json({success:false,message:"User not found"})
  }
  const user_response=user.toObject();
  delete user_response.password
  req.user=user_response
  next();
  }catch(err){
    return res.status(401).json({success:false,message:"Invalid or expired token"})
  }
}