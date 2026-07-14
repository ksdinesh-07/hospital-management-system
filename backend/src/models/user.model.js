import mongoose from "mongoose"
import {Schema,model} from "mongoose"

const user_schema=new Schema({
  fullname:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "doctor", "patient"],
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  },
  {
    timestamps: true,
  }
);

const User = model("User", user_schema);

export default User;