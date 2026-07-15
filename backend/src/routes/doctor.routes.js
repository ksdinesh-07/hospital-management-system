import {Router} from "express"
import {authenticate_user} from "../middleware/auth.middleware.js"
import {authorize_role} from "../middleware/role.middleware.js"
import {create_doctor,get_all_doctors,get_doctor_by_id,update_doctor,delete_doctor} from "../controllers/doctor.controller.js"

const router=Router();

router.post('/',authenticate_user,authorize_role("admin"),create_doctor);
router.get('/',authenticate_user,authorize_role("admin"),get_all_doctors);
router.get('/:id',authenticate_user,authorize_role("admin"),get_doctor_by_id);
router.put('/:id',authenticate_user,authorize_role("admin"),update_doctor);
router.delete('/:id',authenticate_user,authorize_role("admin"),delete_doctor);

export default router;
