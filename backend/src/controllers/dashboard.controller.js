import {get_dashboard_stat_service} from "../services/dashboard.service.js"

export const get_dashboard_stat=async (req,res)=>{
  try{
    const dashboard=await get_dashboard_stat_service()
    return res.status(200).json({success:true,message:"Stat content",data:dashboard});
  }catch(err){
    return res.status(400).json({success:false,message:err.message});
  }
}