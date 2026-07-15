import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import Doctor from "../models/doctor.models.js"

export const create_doctor_service=async (doctor_data)=>{
  const existing_user=await User.findOne({
    email:doctor_data.email
  })
  if (existing_user){
    throw new Error("Email already exists")
  }

  const hashed_password=await bcrypt.hash(doctor_data.password,10);

  const new_user = await User.create({
    fullname:doctor_data.fullname,
    email:doctor_data.email,
    password:hashed_password,
    phone:doctor_data.phone,
    address:doctor_data.address,
    role:"doctor"
  })

  const new_doctor = await Doctor.create({
    user:new_user._id,
    specialization:doctor_data.specialization,
    qualification:doctor_data.qualification,
    experience:doctor_data.experience,
    consultationFee: doctor_data.consultationFee,
    availableDays: doctor_data.availableDays,
    availableTime: doctor_data.availableTime
  })

  const user_response=new_user.toObject();
  delete user_response.password;

  return {
    user:user_response,
    doctor:new_doctor
  }
}

export const get_all_doctors_services=async (req,res)=>{
  const doctors=await Doctor.find().populate("user","-password");
  return doctors;
}

export const get_doctor_by_id_service=async (doctor_id)=>{
  const doctor = await Doctor.findById(doctor_id).populate("user","-password");
  if (!doctor){
    throw new Error("Doctor not found");
  }
  return doctor;
}