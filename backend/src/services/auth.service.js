import bcrypt from "bcrypt"
import User from "../models/user.model.js"
export const register_user_service=async(user_data)=>{
  const existing_user=await User.findOne({email:user_data.email})
  if (existing_user){
    throw new Error("Email already exists");
  }
  const hashed_password=await bcrypt.hash(user_data.password,10)

  const new_user=await User.create({
    fullname :user_data.fullname,
    email:user_data.email,
    password : hashed_password,
    role : user_data.role,
    address:user_data.address,
    phone:user_data.phone

  });
  return new_user;
}