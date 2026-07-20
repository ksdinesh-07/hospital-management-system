import {create_appointment_service,get_all_appointments_service,get_appointment_by_id_service,update_appointment_service,cancel_appointment_service,delete_appointment_service} from '../services/appointment.service.js'
import async_handler from '../utils/async_handler.js'

export const create_appointment=async_handler(async (req,res)=>{

    const result=await create_appointment_service(req.body)
    return res.status(201).json({success:true,message:"Appointment booked successfully",details:result})
});

export const get_all_appointments=async_handler(async (req,res)=>{

    const result=await get_all_appointments_service(req.query);
    return res.status(201).json({success:true,message:"Appointments fetched successfully",details:result})  
});

export const get_appointment_by_id=async_handler(async (req,res)=>{

    const result=await get_appointment_by_id_service(req.params.id);
    return res.status(201).json({success:true,message:"Appointment fetched successfully",details:result})  
});

export const delete_appointment=async_handler(async (req,res)=>{

    const result=await delete_appointment_service(req.params.id);
    return res.status(201).json({success:true,message:"Appointment deleted successfully",details:result})  
});

export const update_appointment=async_handler(async (req,res)=>{

    const result=await update_appointment_service(req.params.id,req.body);
    return res.status(201).json({success:true,message:"Appointment updated successfully",details:result})  

});

export const cancel_appointment=async_handler(async (req,res)=>{

    const result=await cancel_appointment_service(req.params.id);
    return res.status(201).json({success:true,message:"Appointment cancel successfully",details:result})  
});
