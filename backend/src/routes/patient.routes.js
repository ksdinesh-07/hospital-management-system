import {Router} from "express"
import {authenticate_user} from "../middleware/auth.middleware.js"
import {authorize_role} from "../middleware/role.middleware.js"
import {create_patient,get_all_patient,get_patient_by_id,update_patient,delete_patient} from "../controllers/patient.controller.js"
import {validate_request} from '../middleware/validation.middleware.js'
import { patient_validator } from "../validators/patient.validator.js"

const router=Router()

router.post('/',authenticate_user,authorize_role("admin"),patient_validator,validate_request,create_patient);
router.get('/',authenticate_user,authorize_role("admin","doctor"),get_all_patient);
router.get('/:id',authenticate_user,authorize_role("admin"),get_patient_by_id);
router.put('/:id',authenticate_user,authorize_role("admin"),update_patient);
router.delete('/:id',authenticate_user,authorize_role("admin"),delete_patient);


export default router;