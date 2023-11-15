import express from "express";
import { MonitorController } from "../../../controllers";
const router = express.Router();

router.get("/", MonitorController.index);
router.get("/employee", MonitorController.getEmployees);

export default router;
