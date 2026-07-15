import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import Patient from "../models/patient.model.js"

export const create_patient_service=async(patient_data)=>{
  const existing_user=await User.findOne({email:patient_data.email});
  if (existing_user){
    throw new Error("Email already exists")
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