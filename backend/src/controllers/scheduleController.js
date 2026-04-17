import Task from "../models/Task.js";
import Schedule from "../models/Schedule.js";

export const refreshSchedule = async (req, res) => {
  try {
    // Fetch all tasks
    const tasks = await Task.find();

    const schedule = new Schedule({ tasks });
    await schedule.generate();

    res.status(200).json({ message: "Schedule refreshed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSchedule = async (req, res) => {
  try {
    let { startDate, endDate } = req.query;
    const schedule = new Schedule([]);
    const scheduledTasks = await schedule.fetch({ startDate, endDate });
    res.status(200).json(scheduledTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
