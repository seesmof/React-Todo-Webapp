import { useState } from "react";
import Input from "./components/Input";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-col p-4 min-h-screen">
        <div className="bg-slate-200">
          <Input />
        </div>
        <div className="flex-1 bg-orange-200">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default App;
