import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl font-bold text-primary tracking-tight font-sans">
              Chetris
            </h1>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/tasks/new" className="btn btn-primary">
              <PlusIcon className="h-5 w-5" />
              New Task
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
