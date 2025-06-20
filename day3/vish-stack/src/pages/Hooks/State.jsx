// src/Pages/Hooks/State.jsx
import { useState } from "react";

const State = () => {
  const [name, setName] = useState("Vishanth");

  return (
    <div className="p-4 border border-gray-200 rounded">
      <h1 className="text-2xl font-bold mb-2">Hello {name}</h1>
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => setName("Vish")}
      >
        Change Name
      </button>
    </div>
  );
};

export default State;
