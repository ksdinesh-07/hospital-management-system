import {create_doctor_service,get_all_doctors_services,get_doctor_by_id_service,updated_doctor_service,delete_doctor_service} from "../services/doctor.service.js"
import async_handler from '../utils/async_handler.js';

export const create_doctor=async_handler( async(req,res)=>{

  const result=await create_doctor_service(req.body);
    res.status(201).json({success:true,message:"Doctor created successfully",data:result})
 });

export const get_all_doctors=async_handler( async (req,res)=>{

    const doctors=await get_all_doctors_services(req.query);
    return res.status(200).json({success:true,message:"Doctor fetched Successfully",data:doctors})
});

export const get_doctor_by_id=async_handler(async (req,res)=>{

    const doctor=await get_doctor_by_id_service(req.params.id)
    return res.status(201).json({success:true,message:"Doctor fetched successfull",data:doctor})
});

export const update_doctor=async_handler(async (req,res)=>{

  const updated_doctor=await updated_doctor_service(req.params.id,req.body)
    return res.status(200).json({success:true,message:"Doctor updated Successfully",data:updated_doctor})
});

export const delete_doctor=async_handler(async (req,res)=>{

  await delete_doctor_service(req.params.id)
    return res.status(200).json({success:true,message:"Doctor deleted successfully"})
});