import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        TypeScript React Checkpoint
      </h1>

      {/* Greeting Component */}
      <Greeting name="Zine Eddine" />

      {/* Counter Component */}
      <Counter />
    </div>
  );
};

export default App;
