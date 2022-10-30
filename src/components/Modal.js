import React from 'react';
import { useState } from "react";

const Modal = ({showModal, setShowModal, createTodo}) => {
  const button = {
    cursor: "pointer",
  }
  https://www.netlify.com/
  const handleModal = () => {
    setShowModal(false);
  }


  const [ enteredTodo, setEnteredTodo ] = useState("");
  
  const addTodo = (e) => {
    if (enteredTodo === undefined) {
      alert("Invalid Input Value");
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1e5),
        content: enteredTodo,
      }
      createTodo(newTodo);
    }


    
    // e.preventDefault();
    
  }
  return (
    <>
      {showModal ? (     
       <div id="overlay" className="overlay"> 
       <div id="modalContent" className="modalContent" >
          <p>Input Your Task and Time</p>
          <div className="itemBox">     
          {/* <form onSubmit={handleSetTodo} > */}
            <input type="text" value={enteredTodo} onChange={(e => setEnteredTodo(e.target.value))} />
            <span>{enteredTodo}</span>
            <div className="timer">
              <input type="number" className="minute" />
              <span>分</span>
              <input type="number" className="second" />  
              <span>秒</span>
              
            </div>    
            <button style={button} onClick={addTodo}>set</button>          
            <button style={button} onClick={handleModal}>close</button>
          </div>
        </div>      
      </div>
      
      ) : (
      <></>  
      )
      }
      
    </>
  )
}

export default Modal;
