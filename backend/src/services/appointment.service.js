import Patient from "../models/patient.model.js";
import Doctor from "../models/doctor.models.js";
import Appointment from "../models/appointment.model.js";
import API_feature from "../utils/apiFeatures.js";
import API_error from "../utils/api_error.js";

export const create_appointment_service=async(appointment_details)=>{

  const existing_appointment=await Appointment.findOne({
    doctor:appointment_details.doctor,
    appointment_date:appointment_details.appointment_date,
    appointment_time:appointment_details.appointment_time,
    status:{
      $ne:"Cancelled"
    }
  });

  if (existing_appointment){
    throw new API_error(409,"Doctor already has an appointment at this time")
  }

  const patient_details=await Patient.findById(appointment_details.patient);
  if (!patient_details){
    throw new API_error(404,"Patient not found")
  }
  const doctor_details=await Doctor.findById(appointment_details.doctor);
  if (!doctor_details){
    throw new API_error(404,"Doctor not found")
  }
  if(!doctor_details.isAvailable){
    throw new API_error(404,"Doctor is not Available");
  }
  const new_appointment=await Appointment.create({
    patient:appointment_details.patient,
    doctor:appointment_details.doctor,
    appointment_date:appointment_details.appointment_date,
    appointment_time:appointment_details.appointment_time,
    reason:appointment_details.reason,
    notes: appointment_details.notes
  })

  return new_appointment;
}

export const get_all_appointments_service=async (query)=>{

// for testing=> console.log(await Appointment.find().select("doctor patient status").lean());

  const feature=new API_feature(Appointment,query);
  return await feature.execute([
    {
      path:"patient",
      populate:{
        path:"user",
        select:"-password"
     }
    },
    {
      path:"doctor",
      populate:{
        path:"user",
        select:"-password"
      }
    }
  ],
  "reason");
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

export const delete_appointment_service=async (appointment_id)=>{
  const result =await Appointment.findById(appointment_id)
  if (!result){
    throw new API_error(404,"Appointment not found")
  }
  await Appointment.findByIdAndDelete(appointment_id);
}

export const update_appointment_service=async (appointment_id,appointment_data)=>{
  const result=await Appointment.findById(appointment_id)
  if(!result){
    throw new API_error(404,"Appointment not found")
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
    throw new API_error(401,'Appointment not found')
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