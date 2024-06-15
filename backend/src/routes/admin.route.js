import { Router } from "express";
import {
    loginAdmin,
    logoutAdmin,
    registerAdmin,
} from "../controllers/admin.controllers.js";
import { verifyAdminJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(
    registerAdmin
);

router.route("/login").post(loginAdmin);

// Secured routes
router.route("/logout").post(verifyAdminJWT, logoutAdmin);

export default router;