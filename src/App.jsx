import { useState } from "react";

function App() {
  return (
    <>
      <div className="h-screen bg-stone-50 text-stone-900">
        <div className="flex container max-w-4xl h-full p-4 lg:p-6 mx-auto flex-col lg:flex-col-reverse justify-between w-full">
          <section className="flex flex-1 flex-col gap-2 w-full"></section>
          <section className="flex flex-col w-full">
            <h2 className="uppercase font-medium mb-1 lg:mb-2">add new</h2>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your search item..."
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
