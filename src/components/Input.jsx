import React from "react";

const Input = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="p-2 border-2 border-gray-300 rounded-lg w-full"
          placeholder="Enter yout task..."
        />
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg whitespace-nowrap">
          Add Task
        </button>
      </div>
    </>
  );
};

export default Input;
