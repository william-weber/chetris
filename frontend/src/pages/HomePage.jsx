import TaskCard from "../components/TaskCard";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../config/api.js";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/tasks`);

        console.log("Fetched tasks:", response.data);
        setTasks(response.data);
      } catch (error) {
        toast.error("Failed to fetch tasks. Please try again.");
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task. Please try again.");
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      {loading && (
        <div className="text-center text-primary py-10">Loading notes...</div>
      )}
      {tasks.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
