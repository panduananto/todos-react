import React from "react";

const Todos = ({ todos }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="todo-item collection-item" key={todo.id}>
          <p>{todo.content}</p>
        </div>
      );
    })
  ) : (
    <p className="center">You dont have any task</p>
  );

  return <div className="todo-list collection">{todosList}</div>;
};

export default Todos;
