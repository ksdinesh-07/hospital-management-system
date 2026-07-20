import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import jwt from "jsonwebtoken"
import API_error from "../utils/api_error.js"

export const register_user_service=async(user_data)=>{
  //verifying the email already registered
  const existing_user=await User.findOne({email:user_data.email})
  if (existing_user){
    throw new API_error(404,"Email already exists");
  }

  //password hashing
  const hashed_password=await bcrypt.hash(user_data.password,10)

  //creating the new user
  const new_user=await User.create({
    fullname :user_data.fullname,
    email:user_data.email,
    password : hashed_password,
    role : user_data.role,
    address:user_data.address,
    phone:user_data.phone
  });

  //removing the password before sending the response
  const user_response=new_user.toObject();
  delete user_response.password;

  return user_response;
}

//login user service
export const login_user_service=async (login_data)=>{

  //finding the user using the email
  const user =await User.findOne({email:login_data.email})
  if (!user){
    throw new API_error(401,"Invalid email or password")
  }

  //compare with the stored hashed password
  const is_password_valid=await bcrypt.compare(
    login_data.password,
    user.password
  )
  if (!is_password_valid){
    throw new API_error(401,"Invalid email or password")
  }

  //generate the JWT
  const token=jwt.sign(
  {
    user_id:user._id,
    role:user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn:process.env.JWT_EXPIRES_IN
  } 
  );

  //remove the password before sending the user details
  const user_response =user.toObject();
  delete user_response.password;

  return {
    token,
    user:user_response
  }
}

