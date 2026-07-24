import mongoose  from "mongoose";

const appointment_schema=new mongoose.Schema({
  patient:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Patient",
    required:true
  },
  doctor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"doctor",
    required:true
  },
  appointment_date:{
    type:Date,
    required:true,
    default: Date.now
  },
  appointment_time:{
    type:String,
    required:true,
    trim:true
  },
  reason:{
    type:String,
    required:true,
    trim:true
  },
  status:{
    type:String,
    enum:["Scheduled", "Completed", "Cancelled"],
    default:"Scheduled"
  },
  notes:{
    type:String,
    trim:true
  }
},
  {
    timestamps: true
  }
)

const Appointment=mongoose.model("appointment",appointment_schema)
export default Appointment;