import {body} from "express-validator"

export const patient_validator=[

  body('fullname').notEmpty().withMessage("Fullname is required"),

  body("email").isEmail().withMessage("Invalid email"),

  body("Password").isLength({min:8}).withMessage("Password must contains 8 characters"),

  body("phone").matches(/^[0-9]{10}$/).withMessage("Phone number must contains exactly 10 digits"),

  body("address").notEmpty().withMessage("Address is required"),

  body("gender").isIn(["Male", "Female", "Other"]).withMessage("Invalid gender"),

  body("date_of_birth").isISO8601().withMessage("Invalid date of birth"),

  body("blood_group").isIn(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).withMessage("Invalid blood group"),

  body("height").isNumeric().withMessage("Height must be a number"),

  body("weight").isNumeric().withMessage("Weight must be a number"),

  body("emergency_contact").matches(/^[0-9]{10}$/).withMessage("Emergency contact number is required")
];

