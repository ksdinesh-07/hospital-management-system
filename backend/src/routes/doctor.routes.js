import {Router} from "express"
import {authenticate_user} from "../middleware/auth.middleware.js"
import {authorize_role} from "../middleware/role.middleware.js"
import {create_doctor,get_all_doctors} from "../controllers/doctor.controller.js"

const router=Router();

router.post('/',authenticate_user,authorize_role("admin"),create_doctor);
router.get('/',authenticate_user,authorize_role("admin"),get_all_doctors)

export default router;
