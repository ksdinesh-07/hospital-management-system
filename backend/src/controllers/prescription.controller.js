import async_handler from "../utils/async_handler.js";
import { create_prescription_service,get_all_prescription_service,get_prescription_by_id_service,update_prescription_service,delete_prescription_service } from "../services/prescription.service.js";

export const  create_prescription=async_handler(async(req,res)=>{
  const result = await create_prescription_service(req.body)
  return res.status(200).json({success:true,message:"Prescription created successfully",data:result})
})

export const get_all_prescription=async_handler(async(req,res)=>{
  const result=await get_all_prescription_service(req.query);
  return res.status(200).json({success:true,message:"Prescription fetched successfully",data:result})
})

export const get_prescription_by_id=async_handler(async(req,res)=>{
  const result=await get_prescription_by_id_service(req.params.id);
  return res.status(200).json({success:true,message:`prescription fetched successfully for the id: ${req.params.id}`,data:result})
})

export const update_prescription=async_handler(async(req,res)=>{
  const result=await update_prescription_service(req.params.id,req.body)
  return res.status(200).json({success:true,message:"prescription updated successfully",data:result})
})

export const delete_prescription=async_handler(async (req,res)=>{
  const result=await delete_prescription_service(req.params.id)
  return res.status(200).json({success:true,message:"prescription deleted successfully",data:result})

})