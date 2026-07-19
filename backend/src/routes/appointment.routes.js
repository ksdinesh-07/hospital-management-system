import {Router} from "express"
import { authenticate_user } from "../middleware/auth.middleware.js";
import { authorize_role } from "../middleware/role.middleware.js";
import {create_appointment,get_all_appointments,get_appointment_by_id,update_appointment,cancel_appointment,delete_appointment} from "../controllers/appointment.controller.js"

const router=Router();

router.post('/',authenticate_user,authorize_role("admin"),create_appointment);
router.get('/',authenticate_user,authorize_role("admin"),get_all_appointments);
router.get('/:id',authenticate_user,authorize_role("admin"),get_appointment_by_id);
router.put('/:id',authenticate_user,authorize_role("admin"),update_appointment);
router.delete('/:id',authenticate_user,authorize_role("admin"),delete_appointment);
router.patch('/:id/cancel',authenticate_user,authorize_role("admin"),cancel_appointment);

export default router;