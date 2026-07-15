import mongoose from "mongoose";

const patient_schema=new mongoose.Schema({

      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
      },
      gender: {
        type: String,
        required: true,
        enum:["Male","Female","Other"]
      },
      date_of_birth: {
        type: Date,
        required: true,
      },
      blood_group: {
        type: String,
        required: true,
        enum: [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-"
      ]
      },
      height: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      emergency_contact: {
        type: String,
        required: true,
        trim:true
      },
      allergies: [
        {
          type: String
        }
      ],
      medical_history:[
        {
          type:String
        }
      ]
    },
    {
      timestamps: true
  

})

const Patient=mongoose.model("Patient",patient_schema)
export default Patient