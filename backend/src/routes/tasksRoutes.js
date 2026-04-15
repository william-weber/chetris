import express from 'express';

import { tasksIndex, createTask, updateTask, getTaskById, deleteTask } from '../controllers/tasksController.js';

const router = express.Router();

router.get("/", tasksIndex);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);

export default router;