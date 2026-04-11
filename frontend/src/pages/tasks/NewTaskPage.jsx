import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";

const NewTaskPage = () => {
  // task data
  const [name, setName] = useState("");
  const [repeatPeriod, setRepeatPeriod] = useState(1);
  const [repeatUnit, setRepeatUnit] = useState("day");

  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="btn btn-ghost mb-4">
          <ArrowLeftIcon className="size-5" />
          Back to Home
        </Link>
        <div className="card bg-base-200">NewTaskPage</div>
      </div>
    </div>
  );
};

export default NewTaskPage;
