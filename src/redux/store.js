// src/redux/store.js

// prop drilling
// zustand ( for store instead of redux, global store)
// Key for virtual dom


import { createStore } from 'redux';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted }
            : task
        ),
      };
    default:
      return state;
  }
};

const store = createStore(taskReducer);

export default store;
