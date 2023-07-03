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
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <div className="bg-stone-50 text-stone-900 min-h-screen">
        <div className="lg:p-6 lg:flex-col-reverse container flex flex-col justify-between w-full h-full max-w-4xl p-4 mx-auto">
          <section className="lg:mt-4 flex flex-col flex-1 w-full mb-4">
            <h2 className="lg:mb-3 mb-2 font-medium uppercase">your todo</h2>
            <div className="flex flex-col gap-2 overflow-scroll">
              {todos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  text={todo.text}
                  id={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </div>
          </section>
          <section className="flex flex-col w-full">
            <h2 className="lg:mb-2 mb-1 font-medium uppercase">add new todo</h2>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                className="input-field"
                placeholder="Enter your task..."
                ref={inputRef}
              />
              <button
                className="bg-accent hover:bg-accentHover active:scale-95 active:bg-accentHover text-text px-6 font-medium capitalize duration-300 rounded-lg"
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
