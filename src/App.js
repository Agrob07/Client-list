import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Clients from "./pages/Clients";

function App() {
  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App w-screen md:w-auto h-full">
      <p>Lorem10</p>
      <Clients />
    </div>
    // </DndProvider>;
  );
}

export default App;
