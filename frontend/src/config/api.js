import toast from "react-hot-toast";
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

const refreshSchedule = async () => {
  try {
    await axios.post(`${API_BASE_URL}/schedule`);
    toast.success("Schedule refreshed successfully!");
  } catch (error) {
    console.error("Error refreshing schedule:", error);
    toast.error("Failed to refresh schedule. Please try again.");
  }
};

const getSchedule = async (startDate, endDate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/schedule`, {
      params: { startDate, endDate },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching schedule:", error);
    toast.error("Failed to fetch schedule. Please try again.");
    return [];
  }
};

export { getSchedule };

export { refreshSchedule };
export { API_BASE_URL };
