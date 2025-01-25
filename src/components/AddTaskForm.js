import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../context/TaskContext";
import "../styles/AddTaskForm.css";

const AddTaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTask = { id: Date.now(), title: data.title, completed: data.status === "Completed" };
    dispatch({ type: "ADD_TASK", payload: newTask });
    reset();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Task</h2>

      <input
        type="text"
        {...register("title", {
          required: "Task title is required",
          maxLength: { value: 50, message: "Task title must be 50 characters or less" },
        })}
        placeholder="Task title"
      />
      {errors.title && <p className="error-message">{errors.title.message}</p>}

      <select
        {...register("status", {
          required: "Please select a task status",
        })}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      {errors.status && <p className="error-message">{errors.status.message}</p>}

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
