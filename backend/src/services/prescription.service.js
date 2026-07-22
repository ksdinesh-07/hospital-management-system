import Prescription from '../models/prescription.model.js'
import Patient from '../models/patient.model.js'
import Doctor from '../models/doctor.models.js'
import Appointments from '../models/appointment.model.js'
import API_error from '../utils/api_error.js'
import app from '../app.js'
import API_feature from '../utils/apiFeatures.js'
import prescriptionModel from '../models/prescription.model.js'


export const create_prescription_service=async (prescription_data)=>{
  const patient=await Patient.findById(prescription_data.patient)

  if(!patient){
  throw new API_error(404,"Patient not found")
  }

  const doctor=await Doctor.findById(prescription_data.doctor)

  if (!doctor){
    throw new API_error(404,'Doctor not found')
  }

  const appointment=await Appointments.findById(prescription_data.appointment)

  if (!appointment){
    throw new API_error(404,"Appointment not found")
  }

  //checking duplicate prescription
  const existing_prescription=await Prescription.findOne({
    appointment:prescription_data.appointment
  })

  if (existing_prescription){
    throw new API_error(409,"Prescription already exists for this appointment")
  }

  const prescription=await Prescription.create({
    patient:prescription_data.patient,
    doctor: prescription_data.doctor,
    appointment: prescription_data.appointment,
    diagnosis: prescription_data.diagnosis,
    medicines: prescription_data.medicines,
    notes: prescription_data.notes
  })
  return prescription;
}

export const get_all_prescription_service=async (query)=>{

  return await new API_feature(
    Prescription,
    query
  ).execute([
    {
      path:"doctor",
        populate:{
          path:"user",
          select:"fullname email phone"
        }
    },
    {
      path:"patient",
        populate:{
          path:"user",
          select:"fullname email phone"
        }
    },
    {
      path:"appointment"
    }
  ],
  "diagnosis"
  );
}

export const get_prescription_by_id_service=async (id)=>{
  const prescription=await Prescription.findById(id)
  .populate({
    path:"doctor",
    populate:{
      path:"user",
      select:"fullname email phone"
    }
  })
  .populate({
    path:"patient",
    populate:{
      path:"user",
      select:"fullname email phone"
    }
  })
  .populate("appointment");

  if (!prescription){
    throw new API_error(404,"Prescription not found");
  }
  return prescription;
}

export const update_prescription_service=async (id,data)=>{
  const prescription = await Prescription.findById(id) 
  
  if (!prescription){
    throw new API_error(404,"Prescription not found");
  }

  Object.assign(prescription,data);
  await prescription.save();
  return prescription;
};

export const delete_prescription_service =async (id)=>{
  const prescription=await Prescription.findById(id)

  if (!prescription){
    throw new API_error(404,"Prescription not found");
  }

  await Prescription.findByIdAndDelete(id)
  return;

};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  