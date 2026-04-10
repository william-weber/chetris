import express from 'express';

// config
import dotenv from 'dotenv';
dotenv.config();  

// db
import connectDB from './config/db.js';

// app
const app = express();

// routes
import tasksRoutes from './routes/tasksRoutes.js';
app.use("/api/tasks", tasksRoutes);

// middleware
app.use(express.json());

// start
const PORT = process.env.PORT || 5001;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});