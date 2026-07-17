import Doctor from "../models/doctor.models.js";
import Patient from "../models/patient.model.js";
import Appointment from "../models/appointment.model.js";

export const get_dashboard_stat_service=async ()=>{
  const total_doctors=await Doctor.countDocuments();
  const total_patients=await Patient.countDocuments();
  const total_appointmemts=await Appointment.countDocuments();
  const scheduled_appointments=await Appointment.countDocuments({status:"Scheduled"});
  const completed_appointments=await Appointment.countDocuments({status:"Completed"});
  const cancelled_appointments=await Appointment.countDocuments({status:"Cancelled"});
  
  return {
    total_doctors,total_patients,total_appointmemts,scheduled_appointments,completed_appointments,cancelled_appointments
  }
}