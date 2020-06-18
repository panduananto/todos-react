import React, { Component } from "react";

class FormTodo extends Component {
  state = {
    content: "",
    complete: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.editTodo.content !== prevProps.editTodo.content) {
      this.setState({
        content: this.props.editTodo.content || "",
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let newTodoInput = e.target.querySelector("input").value;
    if (this.props.isEditing) {
      this.props.addTodo(newTodoInput, this.props.editTodo.id);
    } else {
      this.props.addTodo(this.state, "");
    }
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div className="form-input">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content || ""}
          ></input>
        </form>
      </div>
    );
  }
}

export default FormTodo;
