import React from "react";
import ReactDom from "react-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks,
    };
  }

  handleComplete = (id) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return ({
            ...task,
            complete: !task.complete,
          });
        } else {
          return(task);
        }
      })
    });
  };

  handleAdd = (task) => {
    const newTask = {
      task,
      id: Date.now(),
      complete: false,
    };

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask],
    });
  };

  handleRm = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => {
        return task.complete !== true;
      }),
    });
  };

  render() {
    return (
      <div id='container'>
        <div class='head'>
          <h2>Welcome to your Todo List!</h2>
          <TodoForm handleAdd={this.handleAdd} />
        </div>
        <div class='list'>
          <TodoList
            handleRm={this.handleRm}
            handleComplete={this.handleComplete}
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
