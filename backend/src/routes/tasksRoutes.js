import express from 'express';

import { tasksIndex } from '../controllers/tasksController.js';
import { createTask } from '../controllers/tasksController.js';

const router = express.Router();

router.get("/", tasksIndex);
router.post("/", createTask);

export default router;