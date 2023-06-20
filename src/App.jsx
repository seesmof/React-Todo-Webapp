import { useRef, useState } from "react";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const addTodo = () => {
    const newTodo = inputRef.current.value;
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), todo: newTodo }]);
      inputRef.current.value = "";
    }
    return;
  };

  return (
    <>
      <div className="h-screen bg-stone-50 text-stone-900">
        <div className="flex container max-w-4xl h-full p-4 lg:p-6 mx-auto flex-col lg:flex-col-reverse justify-between w-full">
          <section className="flex flex-1 flex-col gap-2 w-full">
            {todos.map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </section>
          <section className="flex flex-col w-full">
            <h2 className="uppercase font-medium mb-1 lg:mb-2">add new todo</h2>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                className="input-field"
                placeholder="Enter your task..."
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
