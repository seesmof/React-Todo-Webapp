import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="h-screen bg-stone-50 text-stone-900">
        <div className="flex container max-w-4xl h-full p-4 lg:p-6 mx-auto flex-col lg:flex-col-reverse justify-between w-full">
          <section className="flex flex-1 flex-col gap-2 w-full"></section>
          <section className="flex flex-col w-full">
            <h2 className="uppercase font-medium mb-1 lg:mb-2">add new</h2>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                className="input-field"
                placeholder="Enter your search item..."
              />
              <button className="bg-stone-800 duration-300 hover:bg-stone-700 active:scale-95 active:bg-stone-700 px-6 rounded-lg font-medium text-white capitalize">
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
