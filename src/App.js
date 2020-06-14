import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "study MDP",
      },
      {
        id: 2,
        content: "play dota2",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
