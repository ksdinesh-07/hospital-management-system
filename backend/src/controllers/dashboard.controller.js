import {get_dashboard_stat_service} from "../services/dashboard.service.js"
import async_handler from "../utils/async_handler.js";

export const get_dashboard_stat=async_handler(async (req,res)=>{

    const dashboard=await get_dashboard_stat_service()
    return res.status(200).json({success:true,message:"Stat content",data:dashboard});
});