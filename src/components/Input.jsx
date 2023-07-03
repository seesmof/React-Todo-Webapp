import { useRef } from "react";
import React, { useState } from "react";

const Input = () => {
  const [todos, setTodos] = useState([]);
  const taskHolder = useRef();

  return (
    <>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="p-2 border-2 border-gray-300 rounded-lg w-full"
          placeholder="Enter yout task..."
          ref={taskHolder}
        />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-lg whitespace-nowrap"
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
