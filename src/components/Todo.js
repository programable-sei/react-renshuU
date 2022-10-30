import React from 'react';
import { useState } from "react";
import Modal from "./Modal";
import List from "./List";


const Todo = () => {

  const todosList = [
    {
      id: 1,
      content: "aaa",
    },
    {
      id: 3,
      content: "bbb",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(true);
  }

  const [ todos, setTodos ] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos)
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
    <button onClick={ShowModal} className="openButton">Enter Task</button>
    <List todos={todos} deleteTodo={deleteTodo} />
    <Modal createTodo={createTodo} showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
  
}

export default Todo;
