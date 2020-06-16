import React, { Component } from "react";
import Todos from "./Todos";
import FormTodo from "./FormTodo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "study MDP",
        complete: false,
      },
      {
        id: 2,
        content: "play dota2",
        complete: false,
      },
    ],
  };

  completeTodo = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          content: todo.content,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = this.state.todos[this.state.todos.length - 1].id + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo</h1>
        <Todos
          todos={this.state.todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
        <FormTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
