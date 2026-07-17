import Patient from "../models/patient.model.js";
import Doctor from "../models/doctor.models.js";
import Appointment from "../models/appointment.model.js";
import API_feature from "../utils/apiFeatures.js";

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

export const get_appointment_by_id_service=async (appointment_id)=>{
  const result=await Appointment.findById(appointment_id)
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

export const update_appointment_service=async (appointment_id,appointment_data)=>{
  const result=await Appointment.findById(appointment_id)
  if(!result){
    throw new Error("appointment not found")
  }
  const appointment_update={};

if (appointment_data.appointment_date) {
    appointment_update.appointment_date = appointment_data.appointment_date;
  }

  if (appointment_data.appointment_time) {
    appointment_update.appointment_time = appointment_data.appointment_time;
  }

  if (appointment_data.reason) {
    appointment_update.reason = appointment_data.reason;
  }

  if (appointment_data.status) {
    appointment_update.status = appointment_data.status;
  }

  if (appointment_data.notes) {
    appointment_update.notes = appointment_data.notes;
  }

  await Appointment.findByIdAndUpdate(
    appointment_id,appointment_update,{new:true});

  const updated_appointment=await Appointment.findById(appointment_id)
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
  return updated_appointment;
}

export const cancel_appointment_service=async (appointment_id)=>{
  const appointment=await Appointment.findById(appointment_id)

  if (!appointment){
    throw new Error('Appointment not found')
  }
  appointment.status="Cancelled"
  await appointment.save();

  return await Appointment.findById(appointment_id)
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
  })
}