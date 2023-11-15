import express from "express";
import { FetchLogController } from "../../../controllers";
const router = express.Router();

router.get("/", FetchLogController.index);
router.post("/", FetchLogController.create);

export default router;
