import React from "react";

const Todos = ({ todos, editTodo, completeTodo, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="todo-item collection-item" key={todo.id}>
          <div
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
            onClick={() => {
              completeTodo(todo.id);
            }}
          >
            {todo.content}
          </div>
          <div className="button-group secondary-content">
            <div
              className="waves-effect waves-light btn blue lighten-1"
              onClick={() => {
                editTodo(todo.id);
              }}
            >
              <i className="material-icons">edit</i>
            </div>
            <div
              className="waves-effect waves-light btn red lighten-1"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              <i className="material-icons">delete</i>
            </div>
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
