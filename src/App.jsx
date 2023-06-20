import { useRef, useState } from "react";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addTodo = () => {
    const text = inputRef.current.value;
    const newTodo = {
      text: text,
      id: Date.now(),
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <div className="bg-stone-50 min-h-screen text-stone-900">
        <div className="flex container max-w-4xl h-full p-4 lg:p-6 mx-auto flex-col lg:flex-col-reverse justify-between w-full">
          <section className="flex flex-1 flex-col mb-4 lg:mt-4 w-full">
            <h2 className="uppercase font-medium mb-2 lg:mb-3">your todo</h2>
            <div className="flex flex-col gap-2 overflow-scroll">
              {todos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  isCompleted={todo.isCompleted}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </div>
          </section>
          <section className="flex flex-col w-full">
            <h2 className="uppercase font-medium mb-1 lg:mb-2">add new todo</h2>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                className="input-field"
                placeholder="Enter your task..."
                ref={inputRef}
              />
              <button
                className="bg-stone-800 duration-300 hover:bg-stone-700 active:scale-95 active:bg-stone-700 px-6 rounded-lg font-medium text-white capitalize"
                onClick={addTodo}
              >
                add
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
