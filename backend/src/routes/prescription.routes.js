import { Router } from "express";
import { authenticate_user } from "../middleware/auth.middleware.js";
import { authorize_role } from "../middleware/role.middleware.js";
import { validate_request } from "../middleware/validation.middleware.js";
import { prescription_validator } from "../validators/prescription.validator.js";
import {create_prescription,get_all_prescription, get_prescription_by_id,update_prescription,delete_prescription} from '../controllers/prescription.controller.js';


const router = Router();

router.post('/',authenticate_user,authorize_role("doctor","admin"),prescription_validator,validate_request,create_prescription);
router.get('/',authenticate_user,authorize_role("admin","doctor"),get_all_prescription);
router.get('/:id',authenticate_user,authorize_role("admin","doctor"),get_prescription_by_id);
router.put('/:id',authenticate_user,authorize_role("admin","doctor"),update_prescription);
router.delete('/:id',authenticate_user,authorize_role("admin","doctor"),delete_prescription);



export default router;