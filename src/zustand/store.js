import { create } from "zustand";

const API_BASE_URL = "http://localhost:5079";

const useTaskStore = create((set, get) => ({
  tasks: [],
  loading: false,
  fetchTasks: async () => {
    set({ loading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      const result = await response.json();
      set({ tasks: result });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      set({ loading: false });
    }
  },
  addTask: async (task) => {
    set({ loading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error("Failed to add task");
      const newTask = await response.json();
      set((state) => ({ tasks: [...state.tasks, newTask] }));
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useTaskStore;