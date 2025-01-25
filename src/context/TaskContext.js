import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const TaskContext = createContext();

const initialState = {
  tasks: [],
  filter: "All",
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return { ...state, tasks: action.payload };
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "TOGGLE_TASK_STATUS":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => dispatch({ type: "SET_TASKS", payload: response.data }))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
