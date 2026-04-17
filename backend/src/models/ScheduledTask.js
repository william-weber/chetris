import mongoose from "mongoose";

const scheduledTaskSchema = new mongoose.Schema(
  {
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const ScheduledTask = mongoose.model("ScheduledTask", scheduledTaskSchema);

export default ScheduledTask;
