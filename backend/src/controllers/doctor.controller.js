import {create_doctor_service,get_all_doctors_services} from "../services/doctor.service.js"

export const create_doctor=async(req,res)=>{
  try{
    const result=await create_doctor_service(req.body);

    res.status(201).json({success:true,message:"Doctor created successfully",data:result})

  }catch(err){
    res.status(400).json({success:false,message:err.message})
  }
}

export const get_all_doctors=async (req,res)=>{
  try{
    const doctors=await get_all_doctors_services()
    return res.status(200).json({success:true,message:"Doctors fetched successfully",data:doctors})
  }catch(err){
    return res.status(403).json({success:false,message:err.message})
  }
}