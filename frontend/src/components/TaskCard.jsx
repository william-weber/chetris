import { Link } from "react-router";

const TaskCard = ({ task }) => {
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
      </div>
    </Link>
  );
};

export default TaskCard;
