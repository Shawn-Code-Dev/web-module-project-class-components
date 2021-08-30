import React, { useState } from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="task"
          onChange={this.handleChanges}
          placeholder="Add a task..."
          value={this.state.input}
        />
        <button onClick={this.handleSubmit} class="button add-task">
          Add Task
        </button>
      </form>
    );
  }
}

export default TodoForm;
