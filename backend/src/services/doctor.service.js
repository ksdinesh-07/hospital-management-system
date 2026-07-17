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

export const get_all_doctors_services=async (query)=>{
  const filter={};
  if (query.specialization){
    filter.specialization=query.specialization
  }
  if(query.isAvailable){
    filter.isAvailable=query.specialization==="true";
  }
  const doctors=await Doctor.find(filter).populate("user","-password");
  return doctors;
}

export const get_doctor_by_id_service=async (doctor_id)=>{
  const doctor = await Doctor.findById(doctor_id).populate("user","-password");
  if (!doctor){
    throw new Error("Doctor not found");
  }
  return doctor;
}

export const updated_doctor_service=async (doctor_id,doctor_data) => {
  const doctor=await Doctor.findById(doctor_id);
  if (!doctor){
    throw new Error("Doctor not found");
  }
  const user_update={};
  if (doctor_data.fullname){
    user_update.fullname=doctor_data.fullname;
  }
  if (doctor_data.phone){
    user_update.phone=doctor_data.phone;
  }
  if (doctor_data.address){
    user_update.address=doctor_data.address;
  }
  
  if (Object.keys(user_update).length>0){
    await User.findByIdAndUpdate(
      doctor.user,
      user_update,
      {new:true}
    );
  }

  const doctor_update={}

  if (doctor_data.specialization){
    doctor_update.specialization=doctor_data.specialization
  }
  if (doctor_data.qualification){
    doctor_update.qualification=doctor_data.qualification
  }
  if (doctor_data.experience!==undefined){
    doctor_update.experience=doctor_data.experience
  }
  if (doctor_data.consultationFee !== undefined){
    doctor_update.consultationFee = doctor_data.consultationFee;
  }
  if (doctor_data.availableDays){
    doctor_update.availableDays = doctor_data.availableDays;
  }
  if (doctor_data.availableTime){
    doctor_update.availableTime = doctor_data.availableTime;
  }
  if (doctor_data.isAvailable !== undefined){
    doctor_update.isAvailable = doctor_data.isAvailable;
  }

  if (Object.keys(doctor_update).length>0){
    await Doctor.findByIdAndUpdate(
      doctor_id,
      doctor_update,
      {new:true}
    );
  }

  const fully_update_doctor=await Doctor.findById(doctor_id).populate("user","-password");

  return fully_update_doctor;
}

export const delete_doctor_service=async (doctor_id)=>{
  const doctor =await Doctor.findById(doctor_id);
  if (!doctor){
    throw new Error("Doctor not found");
  }
  await Doctor.findByIdAndDelete(doctor_id)
  await User.findByIdAndDelete(doctor.user)

  return;
}
