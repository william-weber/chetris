import express from 'express';

import { tasksIndex } from '../controllers/tasksController.js';

const router = express.Router();

router.get("/", tasksIndex);

export default router;