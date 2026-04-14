import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import NewTaskPage from "./pages/tasks/NewTaskPage.jsx";
import EditTaskPage from "./pages/tasks/EditTaskPage.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto p-4 mt-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks/new" element={<NewTaskPage />} />
            <Route path="/tasks/:id/edit" element={<EditTaskPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
