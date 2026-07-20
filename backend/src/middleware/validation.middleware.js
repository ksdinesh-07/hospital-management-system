import { validationResult } from "express-validator";

export const validate_request=(req,res,next)=>{

  const err=validationResult(req);
  
  if (!err.isEmpty()){
    return res.status(400).json({success:false,errors:err.array()});
  }
  next(); 
}

