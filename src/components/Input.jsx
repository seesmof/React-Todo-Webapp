import React, { useRef } from "react";

const Input = ({ todos, setTodos }) => {
  const taskHolder = useRef();

  const handleTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: taskHolder.current.value,
    };
    setTodos([...todos, newTodo]);
    taskHolder.current.value = "";
    taskHolder.current.focus();
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
          <button className="whitespace-nowrap text-blue-50 lg:hover:bg-blue-600 lg:active:scale-95 px-4 py-2 font-medium duration-300 bg-blue-500 rounded-lg">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
