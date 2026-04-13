import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import NewTaskPage from "./pages/tasks/NewTaskPage.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto p-4 mt-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks/new" element={<NewTaskPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
