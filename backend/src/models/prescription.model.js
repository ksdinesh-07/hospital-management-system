import mongoose, { Schema } from "mongoose";

const medicine_schema=new mongoose.Schema({

      medicine_name:{
        type:String,
        required:true,
        trim:true
      },
      dosage:{
        type:String,
        required:true
      },
      frequency:{
        type:String,
        required:true
      },
      duration:{
        type:String,
        required:true
      }
});

const prescription_schema=new mongoose.Schema({

      patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctor",
      required: true
    },

    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointment",
      required: true
    },

    diagnosis: {
      type: String,
      required: true,
      trim: true
    },

    medicines: {
      type: [medicine_schema],
      required: true
    },

    notes: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Prescription",prescription_schema)