import Task from "./Task.js";
import ScheduledTask from "./ScheduledTask.js";

import { addMonths, addWeeks, addDays } from "date-fns";

class Schedule {
  constructor({ tasks }) {
    this.tasks = tasks;
  }

  async fetch({ startDate, endDate }) {
    // fetch scheduled tasks between startDate and endDate
    const scheduledTasks = await ScheduledTask.find({
      date: { $gte: startDate, $lte: endDate },
    }).populate("task");

    return scheduledTasks;
  }

  async generate() {
    // first delete all existing scheduled tasks
    await ScheduledTask.deleteMany({});

    const start = new Date();
    const end = addMonths(start, 6);
    const numberOfDays = (end - start) / (1000 * 60 * 60 * 24);
    // iterate over tasks and create a schedule for each one based on its repeat period and unit
    for (const task of this.tasks) {
      console.log("Scheduling task:", task);

      // how many times does this task need to be scheduled in the next 6 months?
      let occurrences = 0;
      if (task.repeatUnit === "day") {
        occurrences = Math.ceil(numberOfDays / task.repeatPeriod);
      } else if (task.repeatUnit === "week") {
        occurrences = Math.ceil(numberOfDays / 7 / task.repeatPeriod);
      } else if (task.repeatUnit === "month") {
        occurrences = Math.ceil(numberOfDays / 30 / task.repeatPeriod);
      }

      console.log(
        `Task "${task.name}" needs to be scheduled ${occurrences} times in the next 6 months.`,
      );

      // create scheduled tasks for this task
      for (let i = 0; i < occurrences; i++) {
        let scheduledDate;
        if (task.repeatUnit === "day") {
          scheduledDate = addDays(start, i * task.repeatPeriod);
        } else if (task.repeatUnit === "week") {
          scheduledDate = addWeeks(start, i * task.repeatPeriod);
        } else if (task.repeatUnit === "month") {
          scheduledDate = addMonths(start, i * task.repeatPeriod);
        }

        // if there's aready a task scheduled on this date, move it to the next available date
        while (await ScheduledTask.findOne({ date: scheduledDate })) {
          scheduledDate = addDays(scheduledDate, 1);
        }
        console.log(
          `Scheduling "${task.name}" on ${scheduledDate.toISOString()}`,
        );

        // if the scheduled date is after the end date, print a message
        // if (scheduledDate > end) {
        //   console.log(
        //     `Cannot schedule "${task.name}" on ${scheduledDate.toISOString()} because it is after the end date.`,
        //   );
        //   break;
        // }

        const scheduledTask = new ScheduledTask({
          task: task._id,
          date: scheduledDate,
        });
        await scheduledTask.save();
      }
    }
  }
}

export default Schedule;
