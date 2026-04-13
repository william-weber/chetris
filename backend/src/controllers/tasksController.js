import Task from '../models/Task.js';

export const tasksIndex = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createTask = async (req, res) => {
    console.log("Received request to create task with body:", req.body);
    const { name, repeatPeriod, repeatUnit } = req.body;
    console.log("Received task creation request:", { name, repeatPeriod, repeatUnit });
    try {
        const newTask = new Task({ name, repeatPeriod, repeatUnit });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};