import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const TodoCard = ({ text, id, todos, setTodos }) => {
  const [isDone, setIsDone] = useState(isCompleted);

  const isCompletedHandler = () => {
    todos[id].isDone = !todos[id].isDone;
  };

  return (
    <>
      <button
        className="bg-accent hover:bg-accentHover active:bg-accentHover group text-text flex flex-row items-center justify-between w-full p-4 duration-300 rounded-lg cursor-pointer"
        onClick={isCompletedHandler}
      >
        <p className={`${isDone ? "line-through" : ""}`}>{text}</p>
        <button className="hover:text-red-500 active:scale-95 text-xl duration-300">
          <BsTrash />
        </button>
      </button>
    </>
  );
};

export default TodoCard;
