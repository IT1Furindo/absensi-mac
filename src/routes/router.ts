import express from "express";
const router = express.Router();

import logs from "./absensi/router";

router.use("/", logs);

export default router;
