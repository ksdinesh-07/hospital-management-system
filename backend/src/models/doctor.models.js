import mongoose  from "mongoose";

const doctor_schema=new mongoose.Schema({
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true,
      unique:true
    },
    doctor_name:{
      type:String,
      required:true,
      trim:true
    },
    specialization: {
      type: String,
      required: true,
      trim: true
    },
    qualification: {
      type: String,
      required: true,
      trim: true
    },
    experience: {
      type: Number,
      required: true,
      min: 0
    },
    consultationFee: {
      type: Number,
      required: true,
      min: 0
    },
    availableDays: [
      {
        type: String
      }
    ],
    availableTime: {
      start: String,
      end:String
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  });


const Doctor=mongoose.model("doctor",doctor_schema)
export default Doctor;