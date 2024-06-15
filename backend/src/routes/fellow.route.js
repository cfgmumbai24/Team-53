import { Router } from "express";
import { 
    loginFellow, 
    logoutFellow, 
    registerFellow, 
} from "../controllers/fellow.controller.js";
import {upload} from "../middleware/multer.middleware.js"


const router = Router()

router.route("/register").post(
    // upload.fields([
    //     {
    //         name: "avatar",
    //         maxCount: 1
    //     }
    // ]),
    registerFellow
    )

router.route("/login").post(loginFellow)

//secured routes
router.route("/logout").post(verifyJWT,  logoutFellow)

export default router