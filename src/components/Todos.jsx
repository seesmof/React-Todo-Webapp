import React from "react";

const Todos = ({ todos, setTodos }) => {
  const Todo = ({ todo, setTodos }) => {
    const { id, task } = todo;
    const removeTodo = () => {
      setTodos(todos.filter((t) => t.id !== id));
    };

    return (
      <>
        <div className="flex items-center justify-between gap-2 p-2 border-2 border-gray-300 rounded-lg">
          <p className="">{task}</p>
          <button
            className="text-red-50 lg:active:scale-95 lg:hover:bg-red-600 px-4 py-2 font-medium duration-300 bg-red-500 rounded-lg"
            onClick={removeTodo}
          >
            Delete
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </div>
    </>
  );
};

export default Todos;
