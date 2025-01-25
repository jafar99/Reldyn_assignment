import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/TaskFilter.css";

const TaskFilter = () => {
  const { state, dispatch } = useContext(TaskContext);

  return (
    <div className="task-filter">
      <div className="filter-header">
        <h2>Task Filters</h2>
      </div>

      <div className="filter-buttons">
        {["All", "Completed", "Pending"].map((status) => (
          <button
            key={status}
            className={`filter-button ${state.filter === status ? "active" : ""}`}
            onClick={() => dispatch({ type: "SET_FILTER", payload: status })}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
