import express from "express";
import {postReport} from "../controller/reportController.js";
import {isAdminAuthenticated,isPatientAuthenticated} from "../middlewares/auth.js"
const router = express.Router();


router.post("/post", postReport);


export default router;