import {create_doctor_service,get_all_doctors_services,get_doctor_by_id_service,updated_doctor_service} from "../services/doctor.service.js"

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

export const get_doctor_by_id=async (req,res)=>{
  try{
    const doctor=await get_doctor_by_id_service(req.params.id)

    return res.status(201).json({success:true,message:"Doctor fetched successfull",data:doctor})
  }catch(err){
    return res.status(403).json({success:false,message:err.message})
  }
}

export const update_doctor=async (req,res)=>{
  try{
    const updated_doctor=await updated_doctor_service(req.params.id,req.body)
    return res.status(200).json({success:true,message:"Doctor updated Successfully",data:updated_doctor})

  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}