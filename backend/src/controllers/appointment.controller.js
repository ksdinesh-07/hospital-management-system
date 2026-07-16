import {create_appointment_service} from '../services/appointment.service.js'

export const create_appointment=async (req,res)=>{
  try{
    const result=await create_appointment_service(req.body)
    return res.status(201).json({success:true,message:"Appointment booked successfully",details:result})
  }catch(err){
    return res.status(400).json({success:false,message:err.message})
  }
}