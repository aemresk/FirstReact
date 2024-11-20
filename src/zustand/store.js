/*

It was redux instead of zustand. 

Advantages of Zustand:
1- Simplicity: Zustand requires less boilerplate compared to Redux.
2- React Hooks: Directly integrates with React's functional components using hooks.
3- Small Size: Zustand is lightweight and efficient.

*/

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Use prevState instead of simply setState to ensure using latest state [be thread safe].
const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      
      addTask: (task) =>
        set((prevState) => ({
          tasks: [task, ...prevState.tasks],
        })),

      deleteTask: (id) =>
        set((prevState) => ({
          tasks: prevState.tasks.filter((task) => task.id !== id),
        })),

      toggleTask: (id) =>
        set((prevState) => ({
          tasks: prevState.tasks.map((task) =>
            task.id === id
              ? { ...task, done: !task.done }
              : task
          ),
        })),
    }),
    {
      name: 'tasks-storage', // The name of the localStorage key
      getStorage: () => localStorage, // Can use sessionStorage as well
    }
  )
);

export default useTaskStore;
