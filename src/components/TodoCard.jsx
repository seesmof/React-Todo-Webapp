import React from "react";
import { BsTrash } from "react-icons/bs";

const TodoCard = ({ text, id, isCompleted, todos, setTodos }) => {
  return (
    <>
      <div className="bg-stone-800 duration-300 cursor-pointer hover:bg-stone-700 active:bg-stone-700 group text-white w-full rounded-lg p-4 items-center flex flex-row justify-between">
        <p className="group-hover:line-through">{text}</p>
        <button className="text-xl duration-300 hover:text-red-500 active:scale-95">
          <BsTrash />
        </button>
      </div>
    </>
  );
};

export default TodoCard;
