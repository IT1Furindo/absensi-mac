import express from "express";
import { AttendanceController } from "../../../controllers";
const router = express.Router();

router.get("/", AttendanceController.index);

export default router;
