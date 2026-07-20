import {body} from "express-validator"

export const register_user_validator=[
  body("fullname").notEmpty().withMessage("Full name is required"),
  body("email").isEmail().withMessage("invalid email"),
  body("password").isLength({min:8}).withMessage("Password must be at least 8 characters"),
  body("phone").isLength({min:10,max:10}).withMessage("Phone number must contains 8 digit"),
  body("address").notEmpty().withMessage("Address is required")
];