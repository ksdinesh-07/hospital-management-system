import {create_appointment_service,get_all_appointments_service} from '../services/appointment.service.js'

export const create_appointment=async (req,res)=>{
  try{
    const result=await create_appointment_service(req.body)
    return res.status(201).json({success:true,message:"Appointment booked successfully",details:result})
  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}

export const get_all_appointments=async (req,res)=>{
  try{
    const result=await get_all_appointments_service();
    return res.status(201).json({success:true,message:"Appointments fetched successfully",details:result})  
  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}