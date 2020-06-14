import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="todo-item collection-item" key={todo.id}>
          <div
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </div>
        </div>
      );
    })
  ) : (
    <p className="center">You dont have any task</p>
  );

  return <div className="todo-list collection">{todosList}</div>;
};

export default Todos;
