import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  repeatPeriod: {
    type: Number,
    required: true,
  },
  repeatUnit: {
    type: String,
    enum: ['day', 'week', 'month'],
    required: true,
  },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;