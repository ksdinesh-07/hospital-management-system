import {create_patient_service} from "../services/patient.service.js"

export const create_patient =async (req,res)=>{
  try{
  const result=await create_patient_service(req.body);
  return res.status(200).json({success:true,message:"Patient created successfully",data:result})
  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}