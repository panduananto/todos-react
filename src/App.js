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
    isEditing: false,
    editTodo: {},
    todoToShow: "all",
  };

  editTodo = (id) => {
    const todoSelected = this.state.todos.find((todo) => {
      return todo.id === id;
    });
    this.setState({
      isEditing: true,
      editTodo: todoSelected,
    });
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

  addTodo = (todoNew, idEdited) => {
    if (idEdited) {
      const newTodo = this.state.todos.find((todo) => {
        return todo.id === idEdited;
      });

      newTodo.content = todoNew;

      const index = this.state.todos.findIndex((todo) => {
        return todo.id === idEdited;
      });

      this.state.todos.splice(index, 1, newTodo);
      this.setState({
        todos: this.state.todos,
        isEditing: false,
        editTodo: {},
      });
    } else {
      todoNew.id = this.state.todos[this.state.todos.length - 1].id + 1;
      let todos = [...this.state.todos, todoNew];
      this.setState({
        todos: todos,
      });
    }
  };

  updateToShow = (filter) => {
    this.setState({
      todoToShow: filter,
    });
  };

  render() {
    let todosFilter = [];

    if (this.state.todoToShow === "all") {
      todosFilter = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todosFilter = this.state.todos.filter((todo) => {
        return !todo.complete;
      });
    } else if (this.state.todoToShow === "complete") {
      todosFilter = this.state.todos.filter((todo) => {
        return todo.complete;
      });
    }

    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo</h1>
        <div className="button-group-filter center">
          <button className="blue-grey lighten-4" onClick={() => this.updateToShow("all")}>All</button>
          <button className="blue-grey lighten-4" onClick={() => this.updateToShow("active")}>Active</button>
          <button className="blue-grey lighten-4" onClick={() => this.updateToShow("complete")}>
            Complete
          </button>
        </div>
        <Todos
          todos={todosFilter}
          editTodo={this.editTodo}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
        <FormTodo
          isEditing={this.state.isEditing}
          editTodo={this.state.editTodo}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
