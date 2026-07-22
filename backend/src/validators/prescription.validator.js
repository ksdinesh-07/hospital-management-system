import {body} from 'express-validator'

export const prescription_validator=[
  
  body("patient").notEmpty().withMessage("Patient id is required"),

  body("doctor").notEmpty().withMessage("Doctor id is required"),

  body("appointment").notEmpty().withMessage("Appointment id is required"),

  body("diagnosis").trim().notEmpty().withMessage("Diagnosis is required"),

  body("medicines").isArray({ min: 1 }).withMessage("At least one medicine is required"),

  body("medicines.*.medicine_name").notEmpty().withMessage("Medicine name is required"),

  body("medicines.*.dosage").notEmpty().withMessage("Dosage is required"),

  body("medicines.*.frequency").notEmpty().withMessage("Frequency is required"),

  body("medicines.*.duration").notEmpty().withMessage("Duration is required"),

]