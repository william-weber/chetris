import { Link } from "react-router";
import { Trash2Icon } from "lucide-react";
import axios from "axios";
import { API_BASE_URL } from "../config/api.js";
import toast from "react-hot-toast";

const TaskCard = ({ task, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault(); // Prevent navigation when clicking delete
    onDelete(task._id); // Call the onDelete callback to update the parent component's state
  };

  return (
    <Link
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-amber-50"
      to={`/tasks/${task._id}/edit`}
    >
      <div className="card-body">
        <h3 className="card-title">{task.name}</h3>
        <p>
          Repeat every {task.repeatPeriod} {task.repeatUnit}
        </p>
        <div className="card-actions justify-end items-center mt-4">
          <div className="flex items-center gap-1">
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={handleDelete}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;
