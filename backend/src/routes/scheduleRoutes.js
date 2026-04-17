import express from "express";

import {
  refreshSchedule,
  getSchedule,
} from "../controllers/scheduleController.js";

const router = express.Router();

router.post("/", refreshSchedule);
router.get("/", getSchedule);
export default router;
