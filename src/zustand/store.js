/*

It was redux instead of zustand. 

Advantages of Zustand:
1- Simplicity: Zustand requires less boilerplate compared to Redux.
2- React Hooks: Directly integrates with React's functional components using hooks.
3- Small Size: Zustand is lightweight and efficient.

*/

import { create } from 'zustand';

const API_BASE_URL = "http://localhost:5079";

const useTaskStore = create((set) => ({
  tasks: [],

  fetchTasks: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      const tasks = await response.json();
      set({ tasks });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },

  addTask: async (task) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error('Failed to add task');
      await response.json();
      set(() => {
        return { tasks: [] };
      });
      await set.fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },

  deleteTask: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete task');
      await response.json();
      set(() => {
        return { tasks: [] };
      });
      await set.fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  },

  toggleTask: async (id) => {
    try {      
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'PATCH',
      });
      if (!response.ok) throw new Error('Failed to toggle task');
      await response.json();
      set(() => {
        return { tasks: [] };
      });
      await set.fetchTasks();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  },
}));

export default useTaskStore;
