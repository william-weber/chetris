import express from 'express';

import { tasksIndex, createTask, updateTask, getTaskById } from '../controllers/tasksController.js';

const router = express.Router();

router.get("/", tasksIndex);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);

export default router;