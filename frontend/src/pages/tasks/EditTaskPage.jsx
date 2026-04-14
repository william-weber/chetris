import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import TaskForm from "../../components/TaskForm.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../config/api.js";
import { useEffect, useState } from "react";

const EditTaskPage = () => {
  const navigate = useNavigate();
  const taskId = window.location.pathname.split("/")[2]; // Extract task ID from URL
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tasks/${taskId}`);
        setTaskData(response.data);
      } catch (error) {
        toast.error("Failed to fetch task data. Please try again.");
        console.error("Error fetching task data:", error);
      }
    };

    fetchTask();
  }, [taskId]);

  const saveTask = async (formData) => {
    try {
      await axios.put(`${API_BASE_URL}/tasks/${taskId}`, formData);
      toast.success("Task updated successfully");
      navigate("/");
    } catch {
      toast.error("Failed to update task");
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
            <h2 className="card-title text-2xl mb-4">Update Task</h2>
            {taskData ? (
              <TaskForm
                onSubmit={saveTask}
                submitButtonText="Update Task"
                initialData={taskData}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
