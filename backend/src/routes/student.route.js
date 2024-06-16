import { Router } from "express";
import {
    registerStudent, allStudents,
    getStudentsByClassAndFellow
} from "../controllers/student.controller.js";
import { verifyFellowJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/add-student/:id").post(registerStudent);

router.route("/all/:id").get(allStudents);
router.route("/all/:id").post(getStudentsByClassAndFellow);

export default router;