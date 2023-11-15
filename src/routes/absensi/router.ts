import express from "express";
const router = express.Router();

import attendance from "./attendance/router";
import fetch from "./fetch/index.routes";
import monitor from "./monitor/index.routes";

router.use("/fetch", fetch);
router.use("/monitor", monitor);
router.use("/attendance", attendance);

export default router;
