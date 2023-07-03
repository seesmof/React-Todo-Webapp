import { useRef } from "react";
import React, { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const taskHolder = useRef();
  const id = 0;

  const handleTodo = () => {
    const newTodo = {
      id: id + 1,
      task: taskHolder.current.value,
      completed: false,
    };
  };

  return (
    <>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          placeholder="Enter yout task..."
          ref={taskHolder}
        />
        <button
          className="whitespace-nowrap px-4 py-2 text-white bg-blue-500 rounded-lg"
          onClick={() => {
            setTodos([...todos, taskHolder.current.value]);
            taskHolder.current.value = "";
            console.log(todos);
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default Input;
