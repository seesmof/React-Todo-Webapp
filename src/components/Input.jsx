import { useEffect, useRef } from "react";
import React, { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const taskHolder = useRef();

  const handleTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: taskHolder.current.value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    taskHolder.current.value = "";
    console.log(todos);
  };

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleTodo();
        }}
      >
        <div className="flex flex-row gap-4">
          <input
            type="text"
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
            placeholder="Enter yout task..."
            ref={taskHolder}
            required
          />
          <button className="whitespace-nowrap px-4 py-2 text-white bg-blue-500 text-blue-50 rounded-lg font-medium">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
