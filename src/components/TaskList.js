import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/TaskList.css";

const TaskList = () => {
  const { state, dispatch } = useContext(TaskContext);

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "All") return true;
    return state.filter === "Completed" ? task.completed : !task.completed;
  });

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
          <span>{task.title}</span>
          <div className="task-buttons">
            <button className="complete" onClick={() => dispatch({ type: "TOGGLE_TASK_STATUS", payload: task.id })}>
              {task.completed ? "Mark as Pending" : "Mark as Completed"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
