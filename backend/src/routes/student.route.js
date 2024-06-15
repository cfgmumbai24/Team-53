import { Router } from "express";
import {
    registerStudent, allStudents
} from "../controllers/student.controller.js";
import { verifyFellowJWT } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/add-student/:id").post(registerStudent);

router.route("/all/:id").get(allStudents);

export default router;