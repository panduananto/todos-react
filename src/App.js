import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "learn reinforcement learning",
      },
      {
        id: 2,
        content: "play dota2",
      },
    ],
  };
  render() {
    return <div className="App"></div>;
  }
}

export default App;
