// import { get_doctor_by_id_service } from "../services/doctor.service.js";
import {create_patient_service,get_all_patient_service,get_patient_by_id_service,update_patient_service,delete_patient_service} from "../services/patient.service.js"

export const create_patient =async (req,res)=>{
  try{
    const result=await create_patient_service(req.body);
    return res.status(200).json({success:true,message:"Patient created successfully",data:result})
  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}

export const get_all_patient=async (req,res)=>{
  try{
    const result=await get_all_patient_service(req.query);
    return res.status(200).json({success:true,message:"Patients fetched successfully",data:result})

  }catch(err){
    return res.status(400).json({success:true,message:err.message})
  }
}

export const get_patient_by_id=async (req,res)=>{
  try{
    const result =await get_patient_by_id_service(req.params.id);
    return res.status(200).json({success:true,message:"Patient fetched successfully",data:result})

  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}

export const update_patient=async (req,res)=>{
  try{
    const updated_patient= await update_patient_service(req.params.id,req.body);
    return res.status(200).json({success:true,message:"Patient Updated successfully",data:updated_patient})
  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}

export const delete_patient=async (req,res)=>{
  try{
    const delete_doctor=await delete_patient_service(req.params.id);
    return res.status(200).json({success:true,message:"Patient deleted successfully",data:delete_doctor})
  }catch(err){
    return res.status(400).json({success:false,message:err.message})

  }

}
