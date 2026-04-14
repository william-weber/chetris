import { useState } from "react";

const TaskForm = ({
  initialData = {},
  onSubmit,
  submitButtonText = " Task",
}) => {
  // task data
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    repeatPeriod: initialData.repeatPeriod || 1,
    repeatUnit: initialData.repeatUnit || "day",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Task Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter task name"
          className="input input-bordered w-full"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Repeat Every</span>
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            min="1"
            className="input input-bordered w-24"
            value={formData.repeatPeriod}
            onChange={(e) =>
              setFormData({ ...formData, repeatPeriod: e.target.value })
            }
            required
          />
          <select
            className="select select-bordered w-full"
            value={formData.repeatUnit}
            onChange={(e) =>
              setFormData({ ...formData, repeatUnit: e.target.value })
            }
            required
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className={`btn btn-primary ${loading ? "loading" : ""}`}
        disabled={loading}
      >
        {loading ? "Saving..." : submitButtonText}
      </button>
    </form>
  );
};

export default TaskForm;
