import React from 'react';

const List = ({todos, deleteTodo}) => {

  const complete = (id) => {
    deleteTodo(id);
  }
  return (
    <div className="todoItemList">
      {todos.map(todo => {
        return (
          <div key={todo.id} className="item">
            <button onClick={() => complete(todo.id)}>完了</button>
            <span>{todo.content}</span>
          </div>
        )
      })}
    </div>
  )
}

export default List;
