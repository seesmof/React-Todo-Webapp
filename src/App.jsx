import { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <main className="flex flex-col-reverse lg:flex-col p-4 min-h-screen">
        <section className="">
          <Input />
        </section>
        <section className="flex-1">
          <Todos />
        </section>
      </main>
    </>
  );
}

export default App;
