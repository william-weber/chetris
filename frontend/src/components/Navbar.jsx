import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary tracking-tight font-sans">
            Chetris
          </h1>
          <div className="flex items-center space-x-4">
            <a href="#" className="btn btn-primary">
              <PlusIcon className="h-5 w-5" />
              New Task
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
