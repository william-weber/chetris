import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

import { API_BASE_URL } from "../../config/api.js";

const NewTaskPage = () => {
  // task data
  const [name, setName] = useState("");
  const [repeatPeriod, setRepeatPeriod] = useState(1);
  const [repeatUnit, setRepeatUnit] = useState("day");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_BASE_URL}/tasks`, {
        name,
        repeatPeriod,
        repeatUnit,
      });
      toast.success("Task created successfully");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="btn btn-ghost mb-4">
          <ArrowLeftIcon className="size-5" />
          Back to Home
        </Link>
        <div className="card bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Add Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Task Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter task name"
                  className="input input-bordered w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                    value={repeatPeriod}
                    onChange={(e) => setRepeatPeriod(e.target.value)}
                    required
                  />
                  <select
                    className="select select-bordered w-full"
                    value={repeatUnit}
                    onChange={(e) => setRepeatUnit(e.target.value)}
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
                {loading ? "Saving..." : "Save Task"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskPage;
