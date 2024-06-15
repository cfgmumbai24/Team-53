import { Router } from "express";
import {
    loginAdmin,
    logoutAdmin,
    registerAdmin,
    getAllFellows,
    getTotalNumberOfStudents,
    getStudentsCountByCategory
} from "../controllers/admin.controllers.js";
import { verifyAdminJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(
    registerAdmin
);

router.route("/login").post(loginAdmin);

// Secured routes
router.route("/logout").post(verifyAdminJWT, logoutAdmin);
router.route("/get-all-fellows").get(getAllFellows);
router.route("/student-count").get(getTotalNumberOfStudents);
router.route("/student-category-count").get(getStudentsCountByCategory);

export default router;