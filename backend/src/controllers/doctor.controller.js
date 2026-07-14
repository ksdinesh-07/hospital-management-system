import {create_doctor_service} from "../services/doctor.service.js"

export const create_doctor=async(req,res)=>{
  try{
    const result=await create_doctor_service(req.body);

    res.status(201).json({success:true,message:"Doctor created successfully",data:result})

  }catch(err){
    res.status(400).json({success:false,message:err.message})
  }
}