import { Router } from "express";
import {addAssessment, getStudentAssessments} from "../controllers/assessment.controller.js"

const router = Router()

router.route("/add-assessment/:id").post(addAssessment);
router.route("/student-assessment/:id").get(getStudentAssessments);


export default Router;