import {body} from 'express-validator'

export const doctor_validator=[

  body("fullname").notEmpty().withMessage("Fullname is required"),

  body("email").isEmail().withMessage("Invalid email"),

  body("password").isLength({min:8}).withMessage("Password must be 8 characters"),

  body("phone").matches(/^[0-9]{10}$/).withMessage("Phone number must contains exactly 10 digits"),

  body("specialization").notEmpty().withMessage("specialization is required"),

  body("qualification").notEmpty().withMessage("Qualification is required"),

  body("experience").notEmpty().withMessage('Experience is required'),

  body("consultationFee").isNumeric().withMessage("Consultation fee must be a number"),

  body("availableDays").isArray({ min: 1 }).withMessage("Available days are required"),

  body("availableTime.start").notEmpty().withMessage("Start time is required"),

  body("availableTime.end").notEmpty().withMessage("End time is required")

];