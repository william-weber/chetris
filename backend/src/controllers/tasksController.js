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

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { name, repeatPeriod, repeatUnit } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { name, repeatPeriod, repeatUnit },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};