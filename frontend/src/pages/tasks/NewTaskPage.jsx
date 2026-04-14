import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import TaskForm from "../../components/TaskForm.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../config/api.js";

const NewTaskPage = () => {
  const navigate = useNavigate();

  const saveTask = async (formData) => {
    try {
      await axios.post(`${API_BASE_URL}/tasks`, formData);
      toast.success("Task created successfully");
      navigate("/");
    } catch {
      toast.error("Failed to create task");
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
            <TaskForm onSubmit={saveTask} submitButtonText="Create Task" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskPage;
