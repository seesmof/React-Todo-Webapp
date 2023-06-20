import { useState } from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-stone-50 text-stone-900 flex container max-w-4xl p-4 mx-auto flex-col justify-between w-full">
        <section className="flex flex-1 flex-col gap-2 w-full "></section>
        <section className="flex flex-col w-full">
          <h2 className="uppercase font-medium mb-2">search</h2>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your search item..."
          />
        </section>
      </div>
    </>
  );
}

export default App;
