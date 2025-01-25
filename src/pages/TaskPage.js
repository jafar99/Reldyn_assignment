import React from "react";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";
import Navbar from "../pages/Navbar";

const TaskPage = () => {
  return (
    <>
        <Navbar />
      <div className="container">
          <AddTaskForm />
          <TaskFilter />
          <TaskList />
      </div>
    </>
  );
};

export default TaskPage;
