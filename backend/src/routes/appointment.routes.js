import {Router} from "express"
import { authenticate_user } from "../middleware/auth.middleware.js";
import { authorize_role } from "../middleware/role.middleware.js";
import {create_appointment,get_all_appointments} from "../controllers/appointment.controller.js"

const router=Router();

router.post('/',authenticate_user,authorize_role("admin"),create_appointment);
router.get('/',authenticate_user,authorize_role("admin"),get_all_appointments);

export default router;