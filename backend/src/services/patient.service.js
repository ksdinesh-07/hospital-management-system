import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import Patient from "../models/patient.model.js"
import API_feature from "../utils/apiFeatures.js"
import API_error from "../utils/api_error.js"

export const create_patient_service=async(patient_data)=>{
  const existing_user=await User.findOne({email:patient_data.email});
  if (existing_user){
    throw new API_error(409,"Email already exists")
  }

  const hashed_password=await bcrypt.hash(patient_data.password,10)

  const new_user=await User.create({
    fullname:patient_data.fullname,
    email:patient_data.email,
    password:hashed_password,
    phone:patient_data.phone,
    address:patient_data.address,
    role:"patient"
  })

const new_patient = await Patient.create({
  user: new_user._id,
  patient_name:new_user.fullname,
  gender: patient_data.gender,
  date_of_birth: patient_data.date_of_birth,
  blood_group: patient_data.blood_group,
  height: patient_data.height,
  weight: patient_data.weight,
  emergency_contact: patient_data.emergency_contact,
  allergies: patient_data.allergies,
  medical_history: patient_data.medical_history
});

  const user_response=new_user.toObject();
  delete user_response.password;

  return {
    user:user_response,
    patient:new_patient
  }
}

export const get_all_patient_service=async (query)=>{
 
  // console.log(await Patient.find().select("patient_name gender blood_group").lean());
  
  //const patients=await Patient.find().populate("user","-password");
  const feature =new API_feature(Patient,query)
  return await feature.execute({
    path:"user",
    select:"-password"
  },
  "patient_name")
}

export const get_patient_by_id_service=async (patient_id)=>{
  const patient=await Patient.findById(patient_id).populate("user","-password");
  if (!patient){
    throw new API_error(404,"Patient doesnot exists")
  }
  return patient;
}

export const update_patient_service=async (patient_id,patient_data)=>{
  const patient=await Patient.findById(patient_id)
  if(!patient){
    throw new API_error(404,"Patient not found")
  }
  const user_update={};
  if (patient_data.fullname){
    user_update.fullname=patient_data.fullname
  }
  if (patient_data.phone){
    user_update.phone=patient_data.phone
  }
  if (patient_data.address){
    user_update.address=patient_data.address
  }
  if (Object.keys(user_update).length>0){
    await User.findByIdAndUpdate(
      patient.user,
      user_update,
      {new:true}
    )};                                                                             
  
  const patient_update = {};

  if (patient_data.gender) {
    patient_update.gender = patient_data.gender;                                                                                                                                                                                                                                                                                                                                                                  
  }
  if (patient_data.fullname){
    patient_update.patient_name=patient_data.fullname;
  }

  if (patient_data.date_of_birth) {
    patient_update.date_of_birth = patient_data.date_of_birth;
  }

  if (patient_data.blood_group) {
    patient_update.blood_group = patient_data.blood_group;
  }

  if (patient_data.height !== undefined) {
    patient_update.height = patient_data.height;
  }

  if (patient_data.weight !== undefined) {
    patient_update.weight = patient_data.weight;
  }

  if (patient_data.emergency_contact) {
    patient_update.emergency_contact = patient_data.emergency_contact;
  }

  if (patient_data.allergies) {
    patient_update.allergies = patient_data.allergies;
  }

  if (patient_data.medical_history) {
    patient_update.medical_history = patient_data.medical_history;
  }

  if(Object.keys(patient_update).length>0){
    await Patient.findByIdAndUpdate(
      patient_id,
      patient_update,
      {new:true}
    )};
  
  const fully_updated_patient=await Patient.findById(patient_id).populate("user","-password");
  return fully_updated_patient;

}

export const delete_patient_service=async (patient_id)=>{
  const patient=await Patient.findById(patient_id)
  if(!patient){
    throw new API_error(404,"patient not found")
  }
  await User.findByIdAndDelete(patient.user)
  await Patient.findByIdAndDelete(patient_id)

  return ;
}