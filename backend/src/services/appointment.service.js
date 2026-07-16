import Patient from "../models/patient.model.js";
import Doctor from "../models/doctor.models.js";
import Appointment from "../models/appointment.model.js";

export const create_appointment_service=async(appointment_details)=>{
  const patient_details=await Patient.findById(appointment_details.patient);
  if (!patient_details){
    throw new Error("Patient not found")
  }
  const doctor_details=await Doctor.findById(appointment_details.doctor);
  if (!doctor_details){
    throw new Error("Doctor not found")
  }
  if(!doctor_details.isAvailable){
    throw new Error("Doctor is not Available");
  }
  const new_appointment=await Appointment.create({
    patient:appointment_details.patient,
    doctor:appointment_details.doctor,
    appointment_date:appointment_details.appointmentDate,
    appointment_time:appointment_details.appointmentTime,
    reason:appointment_details.reason
  })

  return new_appointment;
}

export const get_all_appointments_service=async ()=>{
  const result=await Appointment.find()
  .populate({
    path:"patient",
    populate:{
      path:"user",
      select:"-password"
    }
  })
  .populate({
    path:"doctor",
    populate:{
      path:"user",
      select:"-password"
    }
  });
  return result;
}