import EmptyState from "./components/EmptyState";
import Header from "./components/Header";
import List from "./components/List";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [taskName, setTaskName] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList((prevTask) => [
      ...prevTask,
      { id: uuidv4(), name: taskName, isActive: true },
    ]);
    setTaskName("");
    document.getElementById("taskInput").value = "";
  };

  const handleDelete = (event) => {
    const id = event.currentTarget.closest("li").id;
    setTaskList((prevTask) => prevTask.filter((item) => item.id !== id));
  };

  const handleDone = (event) => {
    const id = event.currentTarget.closest("li").id;
    setTaskList((prevTask) =>
      prevTask.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const list = taskList.map((task, index) => {
    return (
      <List
        key={task.id}
        value={task.name}
        id={task.id}
        deleteTask={handleDelete}
        done={handleDone}
        isActive={task.isActive}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="px-10 flex flex-col items-center gap-4 justify-center">
        <form onSubmit={handleSubmit} className="w-full flex gap-2 pb-6">
          <input
            id="taskInput"
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            className="border border-solid rounded px-6 py-2 w-full"
            placeholder="Add your task here"
          />
          <input
            type="submit"
            value="Add"
            className="rounded px-6 py-2 bg-red-500 text-white font-semibold"
          />
        </form>
        {taskList.length > 0 ? (
          <ul className="flex flex-col gap-2 w-full">{list}</ul>
        ) : (
          <EmptyState />
        )}
      </main>
    </>
  );
}
