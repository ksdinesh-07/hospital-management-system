import {body} from 'express-validator'

export const appointment_validator=[

    body("patient").notEmpty().withMessage("Patient ID is required").isMongoId().withMessage("Invalid Patient ID"),

  body("doctor").notEmpty().withMessage("Doctor ID is required").isMongoId().withMessage("Invalid Doctor ID"),

  body("appointment_date").isISO8601().withMessage("Invalid appointment date"),

  body("appointment_time").notEmpty().withMessage("Appointment time is required"),

  body("reason").notEmpty().withMessage("Reason is required"),

  body("status").optional().isIn(["Scheduled", "Completed", "Cancelled"]).withMessage("Invalid appointment status"),

  body("notes").optional().isString()

];