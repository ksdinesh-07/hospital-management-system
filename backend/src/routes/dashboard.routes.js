import {Router} from "express";
import {authenticate_user} from "../middleware/auth.middleware.js";
import {authorize_role} from "../middleware/role.middleware.js";
import {get_dashboard_stat} from "../controllers/dashboard.controller.js"

const router=Router();

router.get('/stats',authenticate_user,authorize_role("admin"),get_dashboard_stat);

export default router;