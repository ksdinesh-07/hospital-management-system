import {create_patient_service,get_all_patient_service,get_patient_by_id_service,update_patient_service,delete_patient_service} from "../services/patient.service.js"
import async_handler from "../utils/async_handler.js";

export const create_patient =async_handler(async (req,res)=>{

    const result=await create_patient_service(req.body);
    return res.status(200).json({success:true,message:"Patient created successfully",data:result})
});

export const get_all_patient=async_handler(async (req,res)=>{

  const result=await get_all_patient_service(req.query);
    return res.status(200).json({success:true,message:"Patients fetched successfully",data:result})
});

export const get_patient_by_id=async_handler(async (req,res)=>{

    const result =await get_patient_by_id_service(req.params.id);
    return res.status(200).json({success:true,message:"Patient fetched successfully",data:result})
});

export const update_patient=async_handler(async (req,res)=>{

    const updated_patient= await update_patient_service(req.params.id,req.body);
    return res.status(200).json({success:true,message:"Patient Updated successfully",data:updated_patient})
});

export const delete_patient=async_handler(async (req,res)=>{

    const delete_doctor=await delete_patient_service(req.params.id);
    return res.status(200).json({success:true,message:"Patient deleted successfully",data:delete_doctor})
});
