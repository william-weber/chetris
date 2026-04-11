import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import tasksRoutes from './routes/tasksRoutes.js';
import connectDB from './config/db.js';

dotenv.config();  
const app = express();

// middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));
app.use(express.json());

// routes
app.use("/api/tasks", tasksRoutes);

// start
const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});