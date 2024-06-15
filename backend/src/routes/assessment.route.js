import { Router } from "express";
import {addAssessment} from "../controllers/assessment.controller.js"

const router = Router()

router.route("/add-assessment/:id").post(addAssessment);


export default Router