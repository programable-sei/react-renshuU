import './App.css';
import { React, useState } from "react";
// import Todo from "./components/Todo"
import Modal2 from "./components/Modal2"

function App() {
 
  const button = {
    cursor: "pointer",
  }

  return (
    <>
      {/* <div className="header">
        <h2>Task List</h2>
      </div>
      <Todo /> */}
      <Modal2 />
    </>
  );
}

export default App;
